import {useForm} from "@tanstack/react-form";
import {Button} from "../utils/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../utils/card.tsx";
import {Input} from "../utils/input.tsx";
import {Label} from "../utils/label.tsx";
import {AlertCircle, LoaderCircle} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "../utils/alert"
import {validateUsername} from "@/api/user.ts";

export const SignUp = () => {
    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        validators: {
            onSubmit: ({value}) => {
                if (!value.username || !value.password) {
                    return "Please fill out the form";
                }
            },
        },
        onSubmit: ({value}) => {
            console.log(value.username, value.password);
        }
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl">Profile Settings</CardTitle>
                    <CardDescription>
                        Entrez vos identifiants pour vous <span className="font-semibold">connecter</span>
                    </CardDescription>
                </CardHeader>

                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                >
                    <CardContent className="space-y-4">
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <form.Field
                                name="username"
                                validators={{
                                    onChangeAsyncDebounceMs: 500,
                                    onChangeAsync: ({value}) =>
                                        validateUsername(value),
                                    onChange: ({value}) =>
                                        value.length < 3 &&
                                        "Username should be 3 characters long",
                                }
                                }
                                children={(field) => (
                                    <div>
                                        <Label htmlFor="username">Nom d'utilisateur</Label>
                                        <div className="grid gap-2">
                                            <Input
                                                id="username"
                                                type="text"
                                                autoComplete="username"
                                                placeholder="Votre nom d'utilisateur"
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            {field.getMeta().isValidating && (
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                                    <LoaderCircle className="animate-spin"/>
                                                </div>
                                            )}
                                        </div>
                                        {field.state.meta.errors && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {field.state.meta.errors}
                                            </div>
                                        )}
                                    </div>
                                )}
        </div>
)}
</div>
)}
/>
    <form.Field
        name="password"
        validators={{
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: ({value}) => {
                if (value.length < 6) {
                    return "Password should be 6 characters long";
                }
                if (!/[A-Z]+/.test(value)) {
                    return "Password must have Upper Case";
                }
                if (!/[a-z]+/.test(value)) {
                    return "Password must have Lower Case";
                }
                if (!/[0-9]+/.test(value)) {
                    return "Password must have at least a number";
                }
            },
        }}
        children={(field) => (
            <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Votre mot de passe"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors && (
                    <div className={"text-sm text-red-500"}>
                        {field.state.meta.errors}
                    </div>
                )
                }
            </div>
        )
        }
    />
    <form.Subscribe
        selector={(state) => state.errors}
        children={(errors) =>
            errors.length > 0 && (
                <Alert variant={"destructive"}>
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Form Error</AlertTitle>
                    <AlertDescription>
                        {errors}
                    </AlertDescription>
                </Alert>
            )
        }
    />
</CardContent>

    <CardFooter className="flex gap-2">
        <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => form.reset()}
        >
            Annuler
        </Button>
        <Button type="submit"
                className="flex-1"
                onClick={form.handleSubmit}>Se connecter</Button>
    </CardFooter>
</form>
</Card>
</div>
)
    ;
};
