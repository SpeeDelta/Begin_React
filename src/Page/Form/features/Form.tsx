import {useForm} from "@tanstack/react-form";
import {Label} from "@/Page/Login/utils/label.tsx";
import {Input} from "@/Page/Login/utils/input.tsx";
import {Card} from "@/Page/Login/utils/card.tsx";
import {CardContent, CardDescription, CardHeader, CardTitle} from "@/Page/Form/utils/card.tsx";

export const Form = () => {

    const form = useForm({
        defaultValues: {
            interest: ["", ""] as string[],
        },
        validators: {},
        onSubmit: ({value}) => {
            console.log(value);
        }
    });

    return (
        <Card className="w-[400px]">
            <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
                <CardHeader>
                    <CardTitle>Form</CardTitle>
                    <CardDescription>

                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <form.Field
                            name={"interest"}
                            mode={"array"}
                            children={(field) => (
                                <>
                                    <Label className="mr-2"> Interests </Label>
                                    {field.state.value.map((_, index) => (
                                        <div key={index} className="my-2">
                                            <form.Field
                                                name={`interest[${index}]`}
                                                key={index}
                                                children={(subField) => (
                                                    <Input
                                                        type={"text"}
                                                        value={subField.state.value}
                                                        onChange={(e) =>
                                                            subField.handleChange(e.target.value)
                                                        }
                                                    />
                                                )}
                                            />
                                        </div>
                                    ))}
                                </>
                            )}
                        />
                    </form>
                </CardContent>
            </div>
        </Card>
    )
}
