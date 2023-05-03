import React from "react";
import BlogPage from "./blog-page";
import "./blog-tab-panel-layout.scss";
export default class BlogTabPanelLayout extends React.Component{
    render(){
        const{
            blog_post
        } = this.props;
        return(
            <div className = "blogTabPanelLayout">
                <BlogPage blog_post = {blog_post}></BlogPage>
            </div>
        )
    }
        
}