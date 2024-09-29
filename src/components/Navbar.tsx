"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1>Meu App</h1>
      {!session && (
        <>
          <span>Você não está logado</span>
          <Link href="/login" style={{ marginLeft: "1rem" }}>
            Entrar
          </Link>
        </>
      )}
      {session && (
        <>
          <span>Bem-vindo, {session.user?.name}</span>
          <button onClick={() => signOut()} style={{ marginLeft: "1rem" }}>
            Sair
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
