
import React from "react";

import ListOne from "./Slect/LiRenList1.jsx";
import ListTwo from "./Slect/LiRenList2.jsx";
import ListThree from "./Slect/LiRenList3.jsx";
import ListFour from "./Slect/LiRenList4.jsx";
import ListFive from "./Slect/LiRenList5.jsx";
import ListSix from "./Slect/LiRenList6.jsx";
import ListSeven from "./Slect/LiRenList7.jsx";
import ListEight from "./Slect/LiRenList8.jsx";
import ListNine from "./Slect/LiRenList9.jsx";
import ListTen from "./Slect/LiRenList10.jsx";


export default class LiRenNav extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render(){
        return(
            <section>
                <div className="product">
                    <ListOne/>
                    <ListTwo/>
                    <ListThree/>
                    <ListFour/>
                    <ListFive/>
                    <ListSix/>
                    <ListSeven/>
                    <ListEight/>
                    <ListNine/>
                    <ListTen/>
                </div>
            </section>
        )
    }
}



