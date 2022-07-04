import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { GTextBoxContainerProps } from "../typings/GTextBoxProps";
import { TextInput } from "./components/TextInput";

import "./ui/GTextBox.css";

class TextBox extends Component<GTextBoxContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    private onUpdate(value: string): void {
        this.props.textAttribute.setValue(value);
    }
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        return (
            <TextInput
                value={value}
                tabIndex={this.props.tabIndex}
                onUpdate={this.onUpdateHandle}
            />
        );
    }
}

export default hot(TextBox);
