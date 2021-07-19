import React from "react";
import SubscribeForm from "../components/general/subscribe-form";
import "./subscribe.scss";
import Sidebar from "../components/navigation/sidebar";
import array from "../data/nav_list";
export default function SubscribePage(){

    return <div className = "SubscribePageWrapperWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <div className = "SubscribePageWrapper">
                    <SubscribeForm></SubscribeForm>
                </div>
               
            </div>
    };