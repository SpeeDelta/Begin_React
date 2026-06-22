import {useForm} from "@tanstack/react-form";
import {Card, CardContent } from "../utils/card";
import {Label} from "../utils/label.tsx";
import {Input} from "@/Page/Login/utils/input.tsx";

export const AdminOrg = () => {

    const form = useForm({
        defaultValues: {
            assistOwn: "",
            assistCoOwn: "",
            orgName: "",
            orgDep: "",
            assPurp: "",
            assPurpDesc: "",
            assSuppMail: "",
        }
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
            <Card className="w-100">
                <CardContent>
                    <form.Field
                        name={"assistOwn"}
                        children={(field) => (
                            <div>
                                <Label className="mr-2">Assistant Owner : </Label>
                                <Input
                                    value={field.state.value}
                                    onChange={(e) => field.setValue(e.target.value)}
                                />
                            </div>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
