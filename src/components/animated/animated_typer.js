import React from "react";
import Typing from "react-typing-animation";
import "./animated-typer.scss";
export default class AnimatedTyper extends React.Component{
    render(){
        const {
            prompt, 
            font, 
            font_size
        } = this.props;
        return(
            <div className = "animatedTyperWrapper">
                <Typing
                    speed = {0.5}
                    count = {100}
                    loop = {true}
                    cursor = {true}
                    className = "animatedTyperDiv"
                   
                >
                    <span className = "animatedTyperText" style = {{fontFamily: font, fontSize: font_size + "rem"}}>{prompt}</span>
                    <Typing.Delay ms = {10000} />
                    <Typing.Backspace count={prompt.length} />
                    <Typing.Delay ms = {200} />
                </Typing>
            </div>
            
        )
    }
}