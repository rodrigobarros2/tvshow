import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = !!session;
  const isLoading = status === "loading";

  return { session, isAuthenticated, isLoading };
};
