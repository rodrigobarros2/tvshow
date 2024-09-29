"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Realiza o logout e redireciona para a página principal
    signOut({ callbackUrl: "/" });
  }, [router]);

  return <p>Saindo...</p>;
}
