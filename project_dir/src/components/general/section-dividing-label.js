import React from "react";
import "./section-dividing-label.scss";
export default class SectionDividingLabel extends React.Component{
    render(){
        const {
            label_name
        } = this.props;
        return(
            <div 
                data-sal = "slide-right"
                data-sal-duration = "500"
                data-sal-delay = "0"
                data-sal-easing = "ease"
                className = "dividingLabelDiv">
                    <div class="container">
                        <div class="glitch" data-text={label_name}>{label_name}</div>
                        <div class="glow">{label_name}</div>
                        
                    </div>
                    <div class="scanlines"></div>
                
            </div>
        )
    }
}