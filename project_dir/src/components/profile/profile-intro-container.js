import React from "react";
import dict from "../../data/profile_data";
import ProfileTraitsContainer from "./profile-traits-container";
import "../profile/profile-intro-container.scss";
import PersonalDiagnosticsContainer from "./personal-diagnostics-container";
export default class ProfileIntroContainer extends React.Component{
    render(){
        return(
            <div>
                <div className = "introTitleWrapper">
                    <h1 className = "title">Intro</h1>
                </div>
                <div className = "profileIntroContainer">
                    
                    <PersonalDiagnosticsContainer diagnostics_entry_list = {dict["diagnostics"]}></PersonalDiagnosticsContainer>
                    <ProfileTraitsContainer traits_list = {dict["traits_list"]}></ProfileTraitsContainer>
                </div>
            </div>
        )
    }
}