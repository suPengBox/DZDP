import React from "react";
import Swiper from "../../static/js/swiper";
import {BrowserRouter as Router , Route , Link} from "react-router-dom";
import MineNavRec from "../../service/MineNavSever";

export default class MainBanner extends React.Component{
    constructor(){
        super();
        this.state={
            imgOne:[],
            imgTwo:[]
        }
        this.initDate=this.initDate.bind(this);
        this.initDate();
    }
    initDate(){
        MineNavRec.getMNavRec((data)=>{
            this.setState({imgOne:data.Img1});
            this.setState({imgTwo:data.Img2});
        })

    }

    componentDidMount(){
        var mySwiper = new Swiper ('.slide1', {
            pagination: '.swiper-pagination',
        })
    }

    render(){
        return(
            <section>
                <div className="swiper-container slide1">
                    <div className="swiper-wrapper">
                        <ul className="swiper-slide slide1-t">
                            {this.state.imgOne.map((t,index)=>{
                                    return(
                                        <li key={index}>
                                            <Link to={index==6?'/Li':'/BB'}>
                                                <img src={t.imgUrl}/>
                                                <span>{t.name}</span>
                                            </Link>
                                        </li>
                                    )
                             })}
                        </ul>
                        <ul className="swiper-slide slide1-t">
                            {this.state.imgTwo.map((t,index)=>{
                                return(
                                    <li key={index}>
                                        <a>
                                            <img src={t.imgUrl}/>
                                            <span>{t.name}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }
}