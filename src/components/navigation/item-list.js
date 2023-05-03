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
            <div className = "listWrapperWrapper">
                <div className = "listWrapper">
                    <div className = "titleWrapper">
                        <h1 className = "itemsListTitle">{list_title}</h1>
                    </div>
                    <div className = "itemsWrapperWrapper">
                        <div className = "itemsWrapper">
                            {
                                
                                items_list.map(
                                    item => (
                                        <div 
                                            data-sal = "slide-up"
                                            data-sal-duration = "500"
                                            data-sal-delay = "0"
                                            data-sal-easing = "ease" 
                                            className = "listItemDiv">
                                            <div className = "listItemIconDiv">
                                                <span class="iconify" data-icon={item.icon} data-inline="false"></span>
                                            </div>
                                            <h3 className = "itemText">{item.title}</h3>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}