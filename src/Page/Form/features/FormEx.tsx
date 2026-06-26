import {AdminOrg} from "@/Page/Form/features/Admin&Org.tsx";
import {createFileRoute} from "@tanstack/react-router";
import {MainProperties} from "@/Page/Form/features/MainProperties.tsx";
import {useFormEx} from "@/Page/Form/hooks/useFormEx.ts";
import type {FieldMeta} from "@tanstack/react-form";

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute("/form_back")({
    component: FormPage,
});

function FormPage() {
    const form = useFormEx();

    return (
        <>
            <main className="bo-body">
                <div className="bo-content bo-acf-content">
                    <form>
                        <AdminOrg formApi={form}/>
                        <MainProperties formApi={form}/>
                    </form>
                </div>
            </main>
        </>
    );
}

export function FieldInfo({ fieldMeta }: { fieldMeta: FieldMeta | undefined }) {
    if (!fieldMeta) return null;
    return (
        <>
            {fieldMeta.isTouched && fieldMeta.errors.length ? (
                <p className="bo-acf-field-error">
                    {fieldMeta.errors.join(",")}
                </p>
            ) : null}
            {fieldMeta.isValidating ? "Validating..." : null}
        </>
    );
}