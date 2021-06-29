import React from "react";
import AnimatedHead from "../animated/animated-head-canvas";
import AnimatedTyper from "../animated/animated_typer";
import "./personal-diagnostics-container.scss";
export default class PersonalDiagnosticsContainer extends React.Component{
    render(){
        const {
            diagnostics_entry_list = []
        } = this.props;
        return(
            <div className = "diagnosticsContainer">
                <AnimatedHead></AnimatedHead>
                <div className = "diagnosticsDisplay">
                    {
                        diagnostics_entry_list.map(
                            diagnostic => (
                                <div>
                                   
                                    <AnimatedTyper prompt = {diagnostic.prompt + ": " + diagnostic.answer}></AnimatedTyper>
                                   
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}