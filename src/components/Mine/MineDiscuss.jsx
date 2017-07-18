import React from "react";
import MineDiscussRev from "../../service/MineDiscussServe";
import Swiper from "../../static/js/swiper";

export default class MineDiscussbb extends React.PureComponent{
    constructor(){
        super();
        this.state= {
            products:[]
        };
        this.initDate = this.initDate.bind(this);
        this.initDate();
    }
    initDate(){
        MineDiscussRev.getDiscussRec((data)=>{
            this.setState({products:data});
        })
    }

    componentDidMount(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){
        var myDianping=new Swiper('.slide2',{
            paginationClickable: true,
            direction: 'vertical',
            loop:true,
            autoplay:3000,
            spaceBetween: 90,
            autoplayDisableOnInteraction : false,
        })
    }
    render(){
        let {products} = this.state;
        let pros="";
        if(products.length >0) {
            pros = products.map((item,index)=>{
                return (
                    <div className="swiper-slide" key={index}>
                        <img src={item.imgUrl}/>
                        <p>
                            {item.tittle}<br/>
                            <span>@{item.name} 距你{item.distance}km</span>
                        </p>
                    </div>
                )
            })
        }
        return(
            <section>
                <div className="dian">
                    <img className="slide2Left" src="http://localhost:3000/images/pic21.png"/>
                    <i></i>
                    <div className="swiper-container slide2">
                        <div className="swiper-wrapper">
                            {pros}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}