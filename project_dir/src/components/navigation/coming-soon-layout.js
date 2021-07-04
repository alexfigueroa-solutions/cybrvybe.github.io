import React from "react";
import AnimatedTyper from "../animated/animated_typer";
import "./coming-soon-layout.scss";
import EmailForm from "../general/subscribe-form";
export default class ComingSoonLayout extends React.Component{
    render(){
        

        return(
            <div className = "comingSoonLayoutWrapper">
                <div className = "animatedComingSoonTyperDiv">
                    <AnimatedTyper prompt = "Coming Soon" font = "EastLift" font_size = {"4"} className = "animatedComingSoonTyper">

                    </AnimatedTyper>
                </div>
                <div>
                    <h3 className = "comingSoonActionPrompt">Stay Tuned! Subscribe to my email list for updates.</h3>
                </div>
                <div className = "emailFormDivWrapper">
                    <div className = "emailFormDiv">
                        <EmailForm>

                        </EmailForm>
                    </div>
                </div>
                
                
               
            </div>
        )
    }
}