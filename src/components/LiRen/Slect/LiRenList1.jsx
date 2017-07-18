import React from "react";
import LiRenSev from "../../../service/lirenSever.js"

export default class ListOne extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render(){
        let LiRens=LiRenSev.getLirenSev().imgs
        console.log(LiRens);
        let props=LiRens.map((t,index)=>{
            return(
                <div className="goods" key={index}>
                    <div className="goodst">
                        <div className="goodst1">
                            {t.name}<i>{t.tuan}</i><span>{t.ding}</span>
                        </div>
                        <div className="goodst2">
                            <div className="goodst2-l">
                                <ul>
                                    <li><img src="DZDP.React.Project/src/static/images/star1.png"/> </li>
                                    <li><img src="DZDP.React.Project/src/static/images/star1.png"/> </li>
                                    <li><img src="DZDP.React.Project/src/static/images/star1.png"/> </li>
                                    <li><img src="DZDP.React.Project/src/static/images/star1.png"/> </li>
                                    <li><img src="DZDP.React.Project/src/static/images/star2.png"/> </li>
                                </ul>
                                <i>美甲</i>
                            </div>
                            <span>720m</span>
                        </div>
                        <div className="goodst3">
                            <i><span>团购</span>超值立减30元</i>
                        </div>
                    </div>
                    <div className="goodsb">
                        <div className="goodsb1">
                            <span>款</span>{t.tittle}
                        </div>
                        <ul className="goodsb2">
                            <li>
                                <img src={t.imgUrl1}/>
                                <div className="money">
                                    <span>¥{t.price1}</span> ¥<s>80</s>
                                </div>
                            </li>
                            <li>
                                <img src={t.imgUrl2}/>
                                <div className="money">
                                    <span>¥{t.price2}</span> ¥<s>410</s>
                                </div>
                            </li>
                            <li>
                                <img src={t.imgUrl3}/>
                                <div className="money">
                                    <span>¥{t.price3}</span> ¥<s>450 </s>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        })


        return(
            <div className="goodslist1">
                {props}
            </div>
        )
    }
}

