import { auth } from "@/services/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return <p>Você precisa estar logado para acessar essa página.</p>;
  }

  return <div>Bem-vindo, {session.user?.name}!</div>;
}
