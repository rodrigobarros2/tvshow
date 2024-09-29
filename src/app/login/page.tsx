"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Redireciona para a página principal se já estiver autenticado
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      <button onClick={() => signIn("google")} style={buttonStyle}>
        Entrar com Google
      </button>
      <button onClick={() => signIn("github")} style={buttonStyle}>
        Entrar com GitHub
      </button>
      <button onClick={() => signIn("email")} style={buttonStyle}>
        Entrar com E-mail
      </button>
    </div>
  );
}

const buttonStyle = {
  display: "block",
  margin: "1rem 0",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
};
