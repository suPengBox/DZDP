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
                </div>
                <div className="header-c">
                    <span><img src="DZDP.React.Project/src/static/images/pic-ser.png"/> 附近热门：蛋糕</span>
                </div>
                <div className="header-R">
                    <img src="DZDP.React.Project/src/static/images/pic-jia.png"/>
                </div>
                <ul className="nextNav">
                    <li>
                        <div className="nextNav-l valign">
                            <img src="DZDP.React.Project/src/static/images/index1.png"/>
                        </div>
                        <p>写点评</p>
                    </li>
                    <li>
                        <div className="nextNav-l valign">
                            <img src="DZDP.React.Project/src/static/images/index2.png"/>
                        </div>
                        <p>添加商户</p>
                    </li>
                    <li>
                        <div className="nextNav-l valign">
                            <img src="DZDP.React.Project/src/static/images/index3.png"/>
                        </div>
                        <p>扫一扫</p>
                    </li>
                    <li>
                        <div className="nextNav-l valign">
                            <img src="DZDP.React.Project/src/static/images/index4.png"/>
                        </div>
                        <p>付款码</p>
                    </li>
                    <img className="toTop" src="DZDP.React.Project/src/static/images/index5.png"/>
                </ul>
            </header>
        )
    }
}
