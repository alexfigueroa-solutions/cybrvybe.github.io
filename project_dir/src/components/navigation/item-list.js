import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./item-list.scss";
export default class ItemList extends React.Component{
    render(){
        const {
            items_list = [],
            list_title
        } = this.props;
        return(
            <div className = "listWrapper">
                <div className = "titleWrapper">
                    <h1 className = "itemsListTitle">{list_title}</h1>
                </div>
                <div className = "itemsWrapperWrapper">
                    <div className = "itemsWrapper">
                        {
                            
                            items_list.map(
                                item => (
                                    <div className = "listItemDiv">
                                        <FontAwesomeIcon className = "itemIcon" icon = {item.icon}></FontAwesomeIcon>
                                        <h3 className = "itemText">{item.title}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}