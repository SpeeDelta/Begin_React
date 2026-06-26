import {useForm} from "@tanstack/react-form";
import {Label} from "@/Page/General/utils/label.tsx";
import {Input} from "@/Page/General/utils/input.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/Page/General/utils/card.tsx";
import {Button} from "@/Page/General/utils/button.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Page/General/utils/select.tsx";
import {X} from "lucide-react";

export const FormTest = () => {

    const form = useForm({
        defaultValues: {
            interest: ["", ""] as string[],
            skills: [] as { language: string; rating: number }[],
        }, validators: {}, onSubmit: ({value}) => {
            console.log(value);
        }
    });

    return (
        <div className="bo-acf-card">
            <Card className="w-100">
                <CardHeader>
                    <CardTitle className="bo-acf-title">Form</CardTitle>
                    <CardDescription>

                    </CardDescription>
                </CardHeader>
                <CardContent className="bo-acf-form bo-acf-grid">
                    <form>
                        <div>
                            <form.Field
                                name={"interest"}
                                mode={"array"}
                                children={(field) => (
                                    <>
                                        <Label className="mr-2 bo-acf-label"> Interests </Label>
                                        {field.state.value.map((_, index) => (
                                            <div key={index} className="my-2 flex items-center gap-2">
                                                <Select
                                                    value={`${index}`}
                                                    onValueChange={(newIndex) =>
                                                        field.moveValue(index, +newIndex)
                                                    }>
                                                    <SelectTrigger className="w-28">
                                                        <SelectValue/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {field.state.value.map((_, index) => (
                                                            <SelectItem key={index} value={`${index}`}>
                                                                # {index + 1}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <form.Field
                                                    name={`interest[${index}]`}
                                                    key={index}
                                                    children={(subField) => (
                                                        <Input
                                                            type={"text"}
                                                            className="flex-1 bo-acf-input"
                                                            value={subField.state.value}
                                                            onChange={(e) =>
                                                                subField.handleChange(e.target.value)
                                                            }
                                                        />
                                                    )}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    onClick={() => field.removeValue(index)}
                                                >
                                                    <X/>
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => field.pushValue("")}
                                        >
                                            Ajouter
                                        </Button>
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <form.Field
                                name={"skills"}
                                mode={"array"}
                                children={(field) => (
                                    <>
                                        <Label className="mr-2"> Skills </Label>
                                        {field.state.value.map((_, index) => (
                                            <div key={index} className="my-2 flex items-center gap-2">
                                                <form.Field
                                                    name={`skills[${index}].language`}
                                                    key={index}
                                                    children={(subField) => (<Input
                                                            type={"text"}
                                                            className="flex-1"
                                                            value={subField.state.value}
                                                            autoFocus
                                                            onChange={(e) =>
                                                                subField.handleChange(e.target.value)
                                                            }
                                                        />
                                                    )}
                                                />
                                                <form.Field
                                                    name={`skills[${index}].rating`}
                                                    key={index}
                                                    children={(subField) => (<Input
                                                            type={"number"}
                                                            className="flex-1"
                                                            value={subField.state.value}
                                                            onChange={(e) =>
                                                                subField.handleChange(e.target.valueAsNumber)
                                                            }
                                                        />
                                                    )}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    onClick={() => field.removeValue(index)}
                                                >
                                                    <X/>
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => field.pushValue({language: '', rating: 0})}
                                        >
                                            Ajouter
                                        </Button>
                                    </>
                                )}
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        variant={"ghost"}
                        onClick={() => console.log(form.state.values)}
                    >
                        Debug
                    </Button>
                    <Button
                        type="button"
                        onClick={() => form.reset()}
                    >
                        Annuler
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
