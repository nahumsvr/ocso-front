import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-gray-50 grid p-6 rounded-2xl gap-2 shadow-accent-soft">
            <h1 className="text-2xl font-bold">Register</h1>
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
            <Button className="w-full">Registrarse</Button>
            <p>¿No tienes una cuenta? <Link href="/register" className="text-blue-800">Registrate</Link> </p>
        </div>
    )
}