"use client";
import { API_URL } from "@/constants";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch(`${API_URL}/auth/signin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    userEmail: formData.get("email"),
                    userPassword: formData.get("password"),
                }),
            });
            if (response.status === 201) {
                router.push("/dashboard");
            } else {
                const data = await response.json().catch(() => null);
            }
        } catch (error) { console.log(error); }
        finally { setLoading(false); }
    }

    return (
        <form className="bg-gray-50 grid p-6 rounded-2xl gap-2 shadow-accent-soft" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Login</h1>
            <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input type="email" />
                <FieldError>Email is required</FieldError>
            </TextField>
            <TextField name="password" type="password" isRequired>
                <Label>Password</Label>
                <Input type="Password" />
                <FieldError>Password is required</FieldError>
            </TextField>
            <Button className="w-full" type="submit" isDisabled={loading}>
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
            <p>¿No tienes una cuenta? <Link href="/register" className="text-blue-800">Registrate</Link> </p>
        </form>
    )
}