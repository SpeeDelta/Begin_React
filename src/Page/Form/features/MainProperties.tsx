import {Card, CardContent, CardHeader, CardTitle} from "@/Page/General/utils/card.tsx";
import {Button} from "@/Page/General/utils/button.tsx";
import {Input} from "@/Page/General/utils/input.tsx";
import {Textarea} from "@/Page/General/utils/textarea.tsx";
import {Label} from "@/Page/General/utils//label.tsx";
import * as FaIcons from "react-icons/fa";
import type {FormExApi} from "@/Page/Form/hooks/useFormEx.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Page/General/utils/select.tsx";
import {FieldInfo} from "@/Page/Form/features/FormEx.tsx";

type MainPropertiesProps = {
    formApi: FormExApi;
};

const generateFunctionalAssistantName = (date: Date = new Date(), suffix = ""): string => {
    const yyyy = String(date.getFullYear());
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mi = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `Functional assistant_${yyyy}${mm}${dd}_${hh}${mi}${ss}${suffix}`;
};

const chatEngineSuggestions = [
    "Professional Purpose",
    "Personal Purpose",
    "Educational Purpose",
]

export const MainProperties = ({formApi}: MainPropertiesProps) => {

    return (
        <section className="bo-acf-card">
            <Card className="bo-acf-panel">
                <CardHeader className="bo-acf-header">
                    <CardTitle className="bo-acf-title"> Main Properties </CardTitle>
                    <div className="bo-acf-logo-row">
                        <div className="bo-acf-logo" aria-hidden="true">
                            <FaIcons.FaBars className="bo-acf-logo-icon"/>
                        </div>
                        <p className="typography-caption-1 text-primary">Assistant Logo</p>
                        <Button variant="secondary" className="bo-acf-logo-btn-library">Icon Library</Button>
                        <Button variant="ghost" className="bo-acf-logo-btn-rules">Icon rules</Button>
                    </div>
                </CardHeader>

                <CardContent className="bo-acf-form">
                    <div className="bo-acf-main-properties-grid">
                        <div>
                            <formApi.Field
                                name={"name"}
                                children={(field) => (
                                    <div className="bo-acf-name-field">
                                        <Label className="bo-acf-label">Name</Label>
                                        <div
                                            className="bo-acf-name-row"
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "2fr 1fr 1fr",
                                                width: "100%",
                                                gap: "0.5rem"
                                            }}
                                        >
                                            <div className="bo-acf-input-wrap">
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) => field.setValue(e.target.value)}
                                                    className="bo-acf-input bo-acf-name-input bo-acf-input-has-clear"
                                                    placeholder="Functional assistant_YYYYMMDD_HHMMSS..."
                                                    style={{width: "100%"}}
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
                                            <Button variant="secondary"
                                                    className="bo-acf-name-btn-generate"
                                                    style={{width: "100%"}}
                                                    type="button"
                                                    onClick={() => field.setValue(generateFunctionalAssistantName())}
                                            >Generate a name</Button>
                                            <Button variant="ghost" className="bo-acf-name-btn-rules"
                                                    style={{width: "100%"}}>Naming
                                                rules</Button>
                                        </div>
                                        <FieldInfo fieldMeta={field.state.meta}/>
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <formApi.Field
                                name={"desc"}
                                children={(field) => (
                                    <div className="bo-acf-name-field">
                                        <Label className="bo-acf-label">Description*</Label>
                                        <div
                                            className="bo-acf-name-row"
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr",
                                                width: "100%",
                                                gap: "0.5rem"
                                            }}
                                        >
                                            <div className="bo-acf-input-wrap bo-acf-textarea-wrap">
                                                <Textarea
                                                    value={field.state.value}
                                                    onChange={(e) => field.setValue(e.target.value)}
                                                    className="bo-acf-input bo-acf-name-input bo-acf-textarea bo-acf-input-has-clear"
                                                    placeholder="Your description here"
                                                    rows={4}
                                                />
                                                {field.state.value ? (
                                                    <button
                                                        type="button"
                                                        className="bo-acf-clear-btn bo-acf-clear-btn-textarea"
                                                        onClick={() => field.handleChange("")}
                                                        aria-label="Empty the field"
                                                    >
                                                        ×
                                                    </button>
                                                ) : null}
                                            </div>
                                            <FieldInfo fieldMeta={field.state.meta}/>                                        </div>
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <formApi.Field
                                name={"convStart"}
                                children={(field) => (
                                    <div className="bo-acf-name-field">
                                        <Label className="bo-acf-label">Conversation starter</Label>
                                        <div
                                            className="bo-acf-name-row"
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr",
                                                width: "100%",
                                                gap: "0.5rem"
                                            }}
                                        >
                                            <div className="bo-acf-input-wrap">
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) => field.setValue(e.target.value)}
                                                    className="bo-acf-input bo-acf-name-input bo-acf-input-has-clear"
                                                    placeholder="Hi there! How can i help you today ?"
                                                    style={{width: "100%"}}
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
                                        </div>
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <formApi.Field name="chatEngine">
                                {(field) => (
                                    <div>
                                        <Label className="bo-acf-label">
                                            Chat Engine*
                                        </Label>
                                        <Select
                                            value={field.state.value}
                                            onValueChange={(value) => field.handleChange(value)}
                                        >
                                            <SelectTrigger className="bo-acf-input bo-acf-select-trigger">
                                                <SelectValue placeholder="Select"/>
                                            </SelectTrigger>
                                            <SelectContent className="bo-acf-select-content">
                                                <SelectItem className="bo-acf-select-item"
                                                            value="personnel">Personnel</SelectItem>
                                                <SelectItem className="bo-acf-select-item"
                                                            value="pro">Professionnel</SelectItem>
                                                <SelectItem className="bo-acf-select-item"
                                                            value="education">Education</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            </formApi.Field>
                        </div>

                        <div>
                            <div>
                                <Label className="bo-acf-label-inline"> Prompt Suggestion </Label>
                                <formApi.Field name="promptSugg">
                                    {(field) => (
                                        <label className="switch-line full-width">
                                        <span className="switch-control">
                                          <Input
                                              type="checkbox"
                                              className="switch-input"
                                              onBlur={field.handleBlur}
                                              aria-label="Activer le Prompt suggestion"
                                          />
                                          <span className="switch-track" aria-hidden="true">
                                            <span className="switch-thumb"/>
                                          </span>
                                        </span>
                                        </label>
                                    )}
                                </formApi.Field>
                            </div>
                            <div>
                                <formApi.Field
                                    name={"suggPrompTitle"}
                                    children={(field) => (
                                        <div className="bo-acf-name-field">
                                            <Label className="bo-acf-label">Suggestion Prompt Title</Label>
                                            <div
                                                className="bo-acf-name-row"
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "2fr 1fr 1fr",
                                                    width: "100%",
                                                    gap: "0.5rem"
                                                }}
                                            >
                                                <div className="bo-acf-input-wrap">
                                                    <Input
                                                        value={field.state.value}
                                                        onChange={(e) => field.setValue(e.target.value)}
                                                        className="bo-acf-input bo-acf-name-input bo-acf-input-has-clear"
                                                        placeholder=""
                                                        style={{width: "100%"}}
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
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div>
                                <formApi.Field
                                    name={"custInstruct"}
                                    children={(field) => (
                                        <div className="bo-acf-name-field">
                                            <Label className="bo-acf-label">Custom instructions (prompt)*</Label>
                                            <div
                                                className="bo-acf-name-row"
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr",
                                                    width: "100%",
                                                    gap: "0.5rem"
                                                }}
                                            >
                                                <div className="bo-acf-input-wrap bo-acf-textarea-wrap">
                                                    <Textarea
                                                        value={field.state.value}
                                                        onChange={(e) => field.setValue(e.target.value)}
                                                        className="bo-acf-input bo-acf-name-input bo-acf-textarea bo-acf-input-has-clear"
                                                        placeholder="Your custom instruction (e.g : 'You are a personnal assistant from [Departement] helping to answer questions base on the files provided first an then with internal knowledge.')"
                                                        rows={4}
                                                    />
                                                    {field.state.value ? (
                                                        <button
                                                            type="button"
                                                            className="bo-acf-clear-btn bo-acf-clear-btn-textarea"
                                                            onClick={() => field.handleChange("")}
                                                            aria-label="Empty the field"
                                                        >
                                                            ×
                                                        </button>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>

                            <div>
                                <Label className="bo-acf-label-inline"> Follow Up Question </Label>
                                <formApi.Field name="followUpQuestionSwitch">
                                    {(field) => (
                                        <label className="switch-line full-width">
                                        <span className="switch-control">
                                          <Input
                                              type="checkbox"
                                              className="switch-input"
                                              onBlur={field.handleBlur}
                                              aria-label="Activer le Prompt suggestion"
                                          />
                                          <span className="switch-track" aria-hidden="true">
                                            <span className="switch-thumb"/>
                                          </span>
                                        </span>
                                        </label>
                                    )}
                                </formApi.Field>
                            </div>

                        </div>

                    </div>
                </CardContent>
            </Card>
        </section>
    );
}