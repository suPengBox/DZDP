import React from "react";


export default class LiRenNav extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render(){
        return(
           <section>
               <div className="nav">
                   <div className="swiper-container select">
                       <ul className="swiper-wrapper">
                           <li className="swiper-slide active">
                               精选
                           </li>
                           <li className="swiper-slide">
                               美发
                           </li>
                           <li className="swiper-slide">
                               美甲美睫
                           </li>
                           <li className="swiper-slide">
                               美容SPA
                           </li>
                           <li className="swiper-slide">
                               纤体瘦身
                           </li>
                           <li className="swiper-slide">
                               瑜伽
                           </li>
                           <li className="swiper-slide">
                               舞蹈
                           </li>
                           <li className="swiper-slide">
                               韩式定妆
                           </li>
                           <li className="swiper-slide">
                               纹身
                           </li>
                           <li className="swiper-slide">
                               祛痘
                           </li>
                       </ul>
                   </div>
               </div>
           </section>
        )
    }
}