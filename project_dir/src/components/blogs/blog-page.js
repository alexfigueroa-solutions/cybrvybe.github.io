import React from "react";
import "./blog-page.scss";
export default class BlogPage extends React.Component{
    render(){
        const{
            blog_post = []
        } = this.props;
        return(
            <div className = "blogPageWrapper">
                <div className = "blogPageTitleDiv">
                    <h3>{blog_post.title}</h3>
                </div>
                <div className = "blogPageIntroDiv">
                    <h3>{blog_post.intro}</h3>
                </div>
                <div className = "blogPageBodySectionsDiv">
                    {
                        blog_post.sections.map(
                            section => (
                                <div className = "blogPostBodySectionDiv">
                                    <div className = "blogPostBodySectionHeaderDiv">
                                        <p className = "blogPostBodySectionHeader">{section.header}</p>
                                    </div>
                                    <div className = "blogPostBodySectionBodyDiv">
                                        <p className = "blogPostBodySectionBody">{section.body}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}