import React from "react";

export default class MainHeader extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render(){
        return(
            <header>
                <a className="valign">
                    <img src="DZDP.React.Project/src/static/images/liren1.png"/>
                </a>
                丽人
                <div className="lir"></div>
            </header>
            )
    }
}