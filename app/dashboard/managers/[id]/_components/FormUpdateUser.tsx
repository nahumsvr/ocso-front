"use client";
import { Button, FieldError, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";
import generator from "generate-password";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Manager } from "@/entities";
import { updateManager } from "@/actions/users/update";

export default function UpdateUserForm({ manager }: { manager: Manager }) {
    const updateManagerUserById = updateManager.bind(null, manager);
    const [password, setPassword] = useState<string>("");
    const generatePassword = () => {
        const password = generator.generate({
            length: 10,
            numbers: true,
            symbols: true,
            uppercase: true,
            lowercase: true,
        });
        setPassword(password);
    }

    return (
        <form className="flex flex-col gap-2" action={updateManagerUserById}>
            <TextField name="userEmail" type="text" defaultValue={manager?.user?.userEmail}>
                <Label>Correo electrónico</Label>
                <Input type="email" placeholder="example@mail.com" />
                <FieldError>El correo es requerido</FieldError>
            </TextField>
            <PasswordWithToggle password={password} setPassword={setPassword} />
            <Button type="button" className="w-full" variant="secondary" onClick={generatePassword}>Generar contraseña</Button>
            <Button type="submit" className="w-full">Actualizar</Button>
        </form>
    )
}


function PasswordWithToggle({ password, setPassword }: { password: string, setPassword: (password: string) => void }) {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <TextField className="w-full" name="userPassword">
            <Label>Password</Label>
            <InputGroup>
                <InputGroup.Input
                    className="w-full"
                    type={isVisible ? "text" : "password"}
                    value={isVisible ? password : "••••••••"}
                    onChange={(e) => {
                        if (isVisible) {
                            setPassword(e.target.value);
                        }
                    }}
                />
                <InputGroup.Suffix className="pr-0">
                    <Button
                        isIconOnly
                        aria-label={isVisible ? "Hide password" : "Show password"}
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                    </Button>
                </InputGroup.Suffix>
            </InputGroup>
        </TextField>
    );
}
