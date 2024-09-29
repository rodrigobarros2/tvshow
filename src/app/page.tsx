"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function Home() {
  const { session, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      {!isAuthenticated ? (
        <>
          <h1>Bem-Vindo!</h1>
          <Link href="/login">
            <button style={buttonStyle}>Entrar</button>
          </Link>
        </>
      ) : (
        <>
          <h1>Olá, {session?.user?.name}</h1>
          <Link href="/logout">
            <button style={buttonStyle}>Sair</button>
          </Link>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  display: "block",
  margin: "1rem 0",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
};
