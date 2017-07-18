import React from "react";

export default class MainHeader extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render(){
        return(
            <section>
                <div className="AD">
                    <a className="valign">
                        <img src="DZDP.React.Project/src/static/images/li2.png"/>
                    </a>
                </div>
                <div className="list">
                    <div className="list-l">
                        <div className="list-l-t">
                            <a>
                                <p>领美发红包</p>
                                <span>剪发8元起</span><br/>
                                <img src="DZDP.React.Project/src/static/images/liren2.png"/>
                            </a>
                        </div>
                        <div className="list-l-b">
                            <a>
                                <div className="list-l-b-l">
                                    <p>限时送红包</p>
                                    <span>夏日美甲狂欢</span>
                                </div>
                                <img className="list-l-b-l-r" src="DZDP.React.Project/src/static/images/liren6.png"/>
                            </a>
                        </div>
                    </div>
                    <ul className="list-r">
                        <li>
                            <a>
                                <div className="li-l">
                                    <p>免费试用</p>
                                    <span>纪梵希散粉</span>
                                </div>
                                <img className="li-r" src="DZDP.React.Project/src/static/images/liren3.png"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="li-l">
                                    <p>天天特价</p>
                                    <span>5折任性强</span>
                                </div>
                                <img className="li-r" src="DZDP.React.Project/src/static/images/liren4.png"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="li-l">
                                    <p>夏季最火大牌</p>
                                    <span>1分钱送给你</span>
                                </div>
                                <img className="li-r" src="DZDP.React.Project/src/static/images/liren5.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="find">
                    <span>发现好店</span>满足挑剔的你
                </div>
            </section>
         )
    }
}