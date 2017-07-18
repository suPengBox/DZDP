import React from "react";


export default class MineNewP extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section>
                <div className="newP">
                    <h3>新人专区NEW</h3>
                    <div className="nweb">
                        <div className="newb-l">
                            <div className="new-L">
                                <h4>超级豪华大奖</h4>
                                <p>
                                    等你来拿
                                    <img src="DZDP.React.Project/src/static/images/new3.png"/>
                                </p>
                            </div>
                            <img src="DZDP.React.Project/src/static/images/new1.png"/>
                        </div>
                        <div className="newb-l">
                            <div className="new-L">
                                <h4>外卖超值购</h4>
                                <p>
                                    低至2折起
                                    <img src="DZDP.React.Project/src/static/images/new3.png"/>
                                </p>
                            </div>
                            <img src="DZDP.React.Project/src/static/images/new2.png"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}