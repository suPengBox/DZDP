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
                <a className="liput">
                    <span>输入商户名、服务项目</span>
                </a>
                <ul className="linav">
                    <li>
                        <a href="check.html">
                            <img src="DZDP.React.Project/src/static/images/liren (1).png"/>
                            美发
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (2).png"/>
                            美甲美睫
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (3).png"/>
                            美容SPA
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (4).png"/>
                            纤体瘦身
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (5).png"/>
                            瑜伽
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (6).png"/>
                            舞蹈
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (7).png"/>
                            韩式定妆
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (8).png"/>
                            脱毛
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (9).png"/>
                            纹身
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (10).png"/>
                            医学美容
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (11).png"/>
                            祛痘
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="DZDP.React.Project/src/static/images/liren (12).png"/>
                            产后塑形
                        </a>
                    </li>
                </ul>
            </section>
         )
    }
}