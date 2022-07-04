import { ReactElement, createElement } from "react";
import { TextInput } from "./components/TextInput";
import { GTextBoxPreviewProps } from "../typings/GTextBoxProps";

export function preview({ textAttribute }: GTextBoxPreviewProps): ReactElement {
    return <TextInput value={textAttribute} />;
}

export function getPreviewCss(): string {
    return require("./ui/GTextBox.css");
}
