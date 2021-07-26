import React from "react";
import SubscribeForm from "../components/general/subscribe-form";
import "./subscribe.scss";
import Sidebar from "../components/navigation/sidebar";
import array from "../data/nav_list";
export default function SubscribePage(){

    return <div className = "SubscribePageWrapperWrapper">
              
                <div className = "SubscribePageWrapper">
                    <div className = "SubscribePageDiv">
                        <h1 className = "SubscribeHeader">
                            Subscribe to my newsletter
                        </h1>
                        
                        <SubscribeForm></SubscribeForm>
                    </div>
                    
                </div>
               
            </div>
    };