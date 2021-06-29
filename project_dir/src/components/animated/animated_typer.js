import React from "react";
import Typing from "react-typing-animation";
import "./animated-typer.scss";
export default class AnimatedTyper extends React.Component{
    render(){
        const {
            prompt
        } = this.props;
        return(
            <div className = "animatedTyperWrapper">
                <Typing
                    speed = {1}
                    count = {100}
                    loop = {true}
                    cursor = {true}
                    className = "animatedTyperDiv"
                >
                    <span className = "animatedTyperText">{prompt}</span>
                    <Typing.Delay ms = {1200} />
                    <Typing.Backspace count={prompt.length} />
                    <Typing.Delay ms = {200} />
                </Typing>
            </div>
        )
    }
}