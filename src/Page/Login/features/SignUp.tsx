import {useForm} from "@tanstack/react-form";
import {useState} from "react";
import {Button} from "../utils/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../utils/card.tsx";
import {Input} from "../utils/input.tsx";
import {Label} from "../utils/label.tsx";
import {AlertCircle, LoaderCircle} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "../utils/alert.tsx"
import {validateUsername} from "@/api/user.ts";

export const SignUp = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validators: {
            onSubmit: ({value}) => {
                if (!value.username || !value.password) {
                    return "Error: please fill in all fields";
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
                <CardContent>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setHasSubmitted(true);
                            form.handleSubmit();
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
                                    <div className="relative">
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
                        <form.Field
                            name="confirmPassword"
                            validators={{
                                onChangeListenTo: ["password"],
                                onChange: ({value, fieldApi}) =>
                                    value !== fieldApi.form.getFieldValue("password") &&
                                        "Password do not match",
                            }}
                            children={(field) => (
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Confirmation de mot de passe</Label>
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
                            selector={(state) => ({
                                submitError: state.errorMap.onSubmit,
                                username: state.values.username,
                                password: state.values.password,
                            })}
                            children={({submitError, username, password}) =>
                                hasSubmitted && (submitError || !username || !password) && (
                                    <Alert variant={"destructive"}>
                                        <AlertCircle className="h-4 w-4"/>
                                        <AlertTitle>Form Error</AlertTitle>
                                        <AlertDescription>
                                            {submitError ?? "Error: please fill in all fields"}
                                        </AlertDescription>
                                    </Alert>
                                )
                            }
                        />
                    </form>
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
                    <Button
                        type="submit"
                        className="flex-1"
                        onClick={() => {
                            setHasSubmitted(true);
                            form.handleSubmit();
                        }}
                    >
                        Se connecter
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
