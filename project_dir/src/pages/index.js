import * as React from "react";
import Sidebar from "../components/navigation/sidebar";
import "./index.scss";
import array from "../data/nav_list"


// markup

const IndexPage = () => {
  return (
    
    
    <main>
      <div className = "metaWrapper">
        <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
        
      </div>
    
     </main>
  )
}

export default IndexPage
