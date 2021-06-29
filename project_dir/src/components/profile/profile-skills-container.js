import React from "react";
import dict from "../../data/profile_data";
import "./profile-skills-container.scss";
import ItemList from "../navigation/item-list";
export default class ProfileSkillsContainer extends React.Component{
    render(){
        
        return(
            <div className = "mainWrapper">
                <div className = "labelContainer">
                    <h3>Skills</h3>
                </div>
                
                <div className = "listsWrapper">
                    <ItemList className = "listDiv" items_list = {dict["technical_skills_list"]} list_title = {"Technical"}></ItemList>
                    <ItemList className = "listDiv" items_list = {dict["business_skills_list"]} list_title = {"Business"}></ItemList>
            
                </div>
               
            </div>
        )
    }
}