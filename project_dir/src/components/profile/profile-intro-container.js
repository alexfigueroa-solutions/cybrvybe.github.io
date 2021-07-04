import React from "react";
import dict from "../../data/profile_data";
import SectionDividingLabel from "../general/section-dividing-label";
import ProfileTraitsContainer from "./profile-traits-container";
import "../profile/profile-intro-container.scss";
import PersonalDiagnosticsContainer from "./personal-diagnostics-container";
export default class ProfileIntroContainer extends React.Component{
    render(){
        return(
            <div className = "profileIntroContainerWrapper">
                <SectionDividingLabel label_name = {"Intro"}>
                    
                </SectionDividingLabel>
                <div className = "profileIntroContainer">
                    
                    <PersonalDiagnosticsContainer diagnostics_entry_list = {dict["diagnostics"]}></PersonalDiagnosticsContainer>
                    <ProfileTraitsContainer traits_list = {dict["traits_list"]}></ProfileTraitsContainer>
                </div>
            </div>
        )
    }
}