"use client";

import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao Meu App com Autenticação</h1>
      <p>
        <Link href="/dashboard">Ir para a Página Protegida</Link>
      </p>
    </div>
  );
};

export default HomePage;
