import React from "react";
import SubscribeForm from "../components/general/subscribe-form";
import "./subscribe.scss";
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