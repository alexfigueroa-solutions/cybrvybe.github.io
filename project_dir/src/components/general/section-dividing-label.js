import React from "react";
import "./section-dividing-label.scss";
export default class SectionDividingLabel extends React.Component{
    render(){
        const {
            label_name
        } = this.props;
        return(
            <div className = "dividingLabelDiv">
                <h2 className = "dividingLabelText">{label_name}</h2>
            </div>
        )
    }
}