import {useForm} from "@tanstack/react-form";
import {FormSchema} from "@/Page/Form/hooks/validationForm.ts";
import {type ZodValidator, zodValidator} from "@tanstack/zod-form-adapter";
import {z} from "zod";

//Fields Definition
export type FormExValues = {
    // Administration & Organization fields
    assistOwn: string;
    assistCoOwn: string;
    orgName: string;
    orgDep: string;
    assistPurp: string;
    assistPurpDesc: string;
    assistSuppMail: string;
    // Main Properties fields
    name: string;
    desc: string;
    convStart: string;
    chatEngine: string;
    promptSugg: boolean;
    suggPrompTitle: string;
    custInstruct: string;
    followUpQuestionSwitch: boolean;
    followUpQuestion: string;

};

//Default Values of the form
const defaultValues: FormExValues = {
    // Administration & Organization fields
    assistOwn: "",
    assistCoOwn: "",
    orgName: "",
    orgDep: "",
    assistPurp: "",
    assistPurpDesc: "",
    assistSuppMail: "",

    // Main Properties fields
    name: "",
    desc: "",
    convStart: "",
    chatEngine: "",
    promptSugg: false,
    suggPrompTitle: "",
    custInstruct: "",
    followUpQuestionSwitch: false,
    followUpQuestion: "",
};

export const FormValidator = FormSchema;

type Form = z.infer<typeof FormValidator>;

export function useFormEx() {
    return useForm<Form, ZodValidator>({
        defaultValues,
        onSubmit: ({value}) => {
            console.log("Valeurs du formulaire :", value);
        },
        validators: {
            onChange: FormValidator,
        },
        validatorAdapter: zodValidator(),
    });
}

export type FormExApi = ReturnType<typeof useFormEx>;

