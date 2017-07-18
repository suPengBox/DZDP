import React from "react";
import FindHeaders from  "../components/Find/FindHeader.jsx";
import FindCenter1 from  "../components/Find/FindCenter1.jsx";
import FindCenter2 from  "../components/Find/FindCenter2.jsx";
import FindMore from  "../components/Find/FindMore.jsx";
export default class FindPage extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){

    }

    render(){
        return(
            <div id="Find">
                <FindHeaders></FindHeaders>
                <FindCenter1></FindCenter1>
                <FindCenter2></FindCenter2>
                <FindMore></FindMore>
            </div>
        )
    }
}