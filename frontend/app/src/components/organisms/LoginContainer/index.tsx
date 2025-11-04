"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../lib/hooks/use-auth";
import { LoginForm } from "../../molecules/LoginForm";

export function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8">
      <h2 className="text-3xl font-bold text-center">Login</h2>

      <LoginForm
        email={email}
        password={password}
        error={error}
        loading={loading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
