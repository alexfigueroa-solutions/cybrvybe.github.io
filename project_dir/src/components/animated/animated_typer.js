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
                    speed = {2}
                    count = {100}
                    loop = {true}
                    className = "animatedTyperDiv"
                >
                    <span className = "animatedTyperText">{prompt}</span>
                    <Typing.Delay ms = {1200} />
                    <Typing.Backspace count={20} />
                    <Typing.Delay ms = {200} />
                </Typing>
            </div>
        )
    }
}