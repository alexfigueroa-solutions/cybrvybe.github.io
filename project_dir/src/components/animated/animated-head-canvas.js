import React from "react";
import "../animated/animated-head.scss";
import threeEntryPoint from '../animated/three-entry-point';


export default class AnimatedHead extends React.Component{
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
      }
    
    render() {

        return (
            <div>
                
                <div
                    className="animatedHeadHeader"
                    ref={element => (this.threeRootElement = element)}
                />
                
            </div>
            
        );
    }
}
