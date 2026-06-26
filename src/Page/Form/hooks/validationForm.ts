import * as z from "zod";

//Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//The ID regex to check if it respect the 'A000000'
const assistIdRegex = /^A\d{6}$/;

// Regex to respect the  'Functional assistant_YYYYMMDD_HHMMSS...' on name
const nameRegex = /^Functional assistant_(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2}).*$/;

// the validation constant should verify that the 'YYYYMMDD' segment does not correspond to a date beyond today.
// and that the 'HHMMSS' is a valid time
export const isValidFunctionalAssistantName = (value: string): boolean => {
    const match = value.match(nameRegex);
    if (!match) return false;

    const [, y, mo, d, h, mi, s] = match;
    const year = Number(y);
    const month = Number(mo);
    const day = Number(d);
    const hour = Number(h);
    const minute = Number(mi);
    const second = Number(s);

    // Range checks for each time/date component before building Date.
    if (month < 1 || month > 12) return false;
    if (hour < 0 || hour > 23) return false;
    if (minute < 0 || minute > 59) return false;
    if (second < 0 || second > 59) return false;

    const candidateDate = new Date(year, month - 1, day, hour, minute, second);

    // Reject invalid calendar dates (e.g. 20260231).
    if (
        candidateDate.getFullYear() !== year ||
        candidateDate.getMonth() !== month - 1 ||
        candidateDate.getDate() !== day ||
        candidateDate.getHours() !== hour ||
        candidateDate.getMinutes() !== minute ||
        candidateDate.getSeconds() !== second
    ) {
        return false;
    }

    return candidateDate.getTime() <= Date.now();
};

//Organization list
const organizationSuggestions = [
    "Volvo Digital & IT AB",
    "Volvo Cars",
    "Volvo Group",
    "Renault Trucks",
    "Mack Trucks",
    "UD Trucks",
 ] as const;

//Chat Engine list
const chatEngineSuggestions = [
    "Professional Purpose",
    "Personal Purpose",
    "Educational Purpose",
]

export const FormSchema = z.object({
    // Administration & Organization fields
    assistOwn: z.string().regex(emailRegex, "Mail not valid"),

    assistCoOwn: z.string().refine((value) => emailRegex.test(value) || assistIdRegex.test(value), {
        message: "Have to be an valid email or ID in the 'A000000' ",
    }),
    orgName: z
        .string()
        .trim()
        .min(1, "Organization name is required")
        .refine((value) => organizationSuggestions.includes(value as (typeof organizationSuggestions)[number]), {
            message: "Organization name must match one of the suggested organizations",
        }),
    orgDep: z.string().optional(),
    assistPurp: z.string(),
    assistPurpDesc: z.string(),

    // Accept empty value or a valid email to keep type as string while field stays optional in UX.
    assistSuppMail: z.string().refine((value) => value === "" || emailRegex.test(value), {
        message: "Mail not valid",
    }),

    // Main Properties fields
    name: z.string().refine(isValidFunctionalAssistantName, {
        message: "Name must match Functional assistant_YYYYMMDD_HHMMSS",
    }),
    desc: z.string().min(1, "Description is required"),
    convStart: z.string(),
    chatEngine: z
        .string()
        .trim()
        .min(1, "Chat engine must be selected")
        .refine((value) => chatEngineSuggestions.includes(value as (typeof chatEngineSuggestions)[number]), {
            message: "ChatEngine must be one of the following suggestions",
        }),
    promptSugg: z.boolean(),
    suggPrompTitle: z.string(),
    custInstruct: z.string(),
    followUpQuestionSwitch: z.boolean(),
    followUpQuestion: z.string(),
});
