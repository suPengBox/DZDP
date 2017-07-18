import React from "react";
export default class MainHeader extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render(){
        return(
            <header>
                <div className="header-l">
                    <span>西安</span>
                    <img src="DZDP.React.Project/src/static/images/find1.png"/>
                </div>
                <div className="header-c">
                    <span><img src="DZDP.React.Project/src/static/images/find2.png"/> 附近热门：蛋糕</span>
                </div>
            </header>
        )
    }
}