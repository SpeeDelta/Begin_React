import {Search} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/Page/General/utils//card";
import {Label} from "@/Page/General/utils//label.tsx";
import {Input} from "@/Page/General/utils/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/Page/General/utils/select.tsx";
import type {FormExApi} from "@/Page/Form/hooks/useFormEx.ts";
import {FieldInfo} from "@/Page/Form/features/FormEx.tsx";

const organizationSuggestions = [
    "Volvo Digital & IT AB",
    "Volvo Cars",
    "Volvo Group",
    "Renault Trucks",
    "Mack Trucks",
    "UD Trucks",
];

const AssistantPurposes = [
    "Professional Purpose",
    "Personal Purpose",
    "Educational Purpose",
]

type AdminOrgProps = {
    formApi: FormExApi;
};

export const AdminOrg = ({formApi}: AdminOrgProps) => {

    return (
        <section className="bo-acf-card">
            <Card className="bo-acf-panel">
                <CardHeader className="bo-acf-header">
                    <CardTitle className="bo-acf-title">Administration & Organization</CardTitle>
                </CardHeader>

                <CardContent className="bo-acf-form">
                    <div className="bo-acf-grid">
                        <div>
                            <Label className="bo-acf-label"> Assistant Owner :</Label>
                            <formApi.Field name={"assistOwn"}>
                                {(field) =>
                                    (
                                    <div style={{position: "relative"}}>
                                        <div style={{position: "relative"}}>
                                            <Search
                                                size={16}
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: "0.6rem",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "#6b7280",
                                                    pointerEvents: "none",
                                                }}
                                            />
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className="bo-acf-input"
                                                style={{paddingLeft: "2.1rem", paddingRight: "2.2rem"}}
                                                placeholder="Carpentier Cyril - cyril.carpentier@volvo..."
                                            />
                                            {field.state.value ? (
                                                <button
                                                    type="button"
                                                    className="bo-acf-clear-btn"
                                                    onClick={() => field.handleChange("")}
                                                    aria-label="Empty the field"
                                                >
                                                    ×
                                                </button>
                                            ) : null}
                                        </div>
                                        <FieldInfo fieldMeta={field.state.meta}/>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>

                        <div>
                            <Label className="bo-acf-label"> Assistant co-Owner :</Label>
                            <formApi.Field name={"assistCoOwn"}>
                                {(field) => (
                                    <div style={{position: "relative"}}>
                                        <div style={{position: "relative"}}>
                                            <Search
                                                size={16}
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: "0.6rem",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "#6b7280",
                                                    pointerEvents: "none",
                                                }}
                                            />
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.setValue(e.target.value)}
                                                className="bo-acf-input"
                                                style={{paddingLeft: "2.1rem", paddingRight: "2.2rem"}}
                                                placeholder="type name or ID"
                                            />
                                            {field.state.value ? (
                                                <button
                                                    type="button"
                                                    className="bo-acf-clear-btn"
                                                    onClick={() => field.handleChange("")}
                                                    aria-label="Empty the field"
                                                >
                                                    ×
                                                </button>
                                            ) : null}
                                        </div>

                                        <FieldInfo fieldMeta={field.state.meta}/>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>

                        <div>
                            <formApi.Field name={"orgName"}>
                                {(field) => (
                                    <div>
                                        <Label className="bo-acf-label">Organization name*</Label>
                                        <Input
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            onBlur={field.handleBlur}
                                            className="bo-acf-input"
                                            placeholder="Type your organization name (e.g., Volvo Digital & IT AB)"
                                            list="organization-name-suggestions"
                                        />
                                        <datalist id="organization-name-suggestions">
                                            {organizationSuggestions.map((name) => (
                                                <option key={name} value={name}/>
                                            ))}
                                        </datalist>
                                        <FieldInfo fieldMeta={field.state.meta}/>
                                    </div>
                                )}
                            </formApi.Field>

                        </div>

                        <div>
                            <formApi.Field name={"orgDep"}>
                                {(field) => (
                                    <div>
                                        <Label className="bo-acf-label">Organization department (optional)</Label>
                                        <Input
                                            value={field.state.value}
                                            onChange={(e) => field.setValue(e.target.value)}
                                            className="bo-acf-input"
                                            placeholder="Type your organization departement(e.g., System Analysis Chapter S..."
                                            list="organization-name-suggestions"
                                        />
                                        <datalist id="organization-name-suggestions">
                                            {organizationSuggestions.map((name) => (
                                                <option key={name} value={name}/>
                                            ))}
                                        </datalist>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>

                        <div>
                            <formApi.Field name="assistPurp">
                                {(field) => (
                                    <div>
                                        <Label className="bo-acf-label">
                                            Assistant Purpose
                                        </Label>

                                        <Select
                                            value={field.state.value ?? ""}
                                            onValueChange={(value) => field.handleChange(value)}
                                        >
                                            <SelectTrigger className="bo-acf-input bo-acf-select-trigger">
                                                <SelectValue placeholder="Select"/>
                                            </SelectTrigger>
                                            <SelectContent className="bo-acf-select-content">
                                                {AssistantPurposes.map((name) => (
                                                    <SelectItem
                                                        key={name}
                                                        className="bo-acf-select-item"
                                                        value={name}
                                                    >
                                                        {name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>

                        <formApi.Field name={"assistPurpDesc"}>
                            {(field) => (
                                <div className="bo-acf-empty-label-gap">
                                    <Input
                                        value={field.state.value}
                                        onChange={(e) => field.setValue(e.target.value)}
                                        placeholder="Enter the Assistant purpose"
                                        className="bo-acf-input"
                                    />
                                </div>
                            )}
                        </formApi.Field>

                        <div className="bo-acf-support-mail">
                            <Label className="bo-acf-label"> Assistant support e-mail :</Label>
                            <formApi.Field name={"assistSuppMail"}>
                                {(field) => (
                                    <div style={{position: "relative"}}>
                                        <div style={{position: "relative"}}>
                                            <Search
                                                size={16}
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: "0.6rem",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "#6b7280",
                                                    pointerEvents: "none",
                                                }}
                                            />
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className="bo-acf-input"
                                                style={{paddingLeft: "2.1rem", paddingRight: "2.2rem"}}
                                                placeholder="Carpentier Cyril - cyril.carpentier@volvo..."
                                            />
                                            {field.state.value ? (
                                                <button
                                                    type="button"
                                                    className="bo-acf-clear-btn"
                                                    onClick={() => field.handleChange("")}
                                                    aria-label="Empty the field"
                                                >
                                                    ×
                                                </button>
                                            ) : null}
                                        </div>
                                        <FieldInfo fieldMeta={field.state.meta}/>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
