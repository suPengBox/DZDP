import React from "react";
import MineLikeSec from "../../service/MineLikeSever";
export default class MineYouLike extends React.Component{
    constructor(){
        super();
        this.state={
            content:[]
        }
        this.initDate=this.initDate.bind(this);
        this.initDate();
    }
    initDate(){
        MineLikeSec.getDiscussRec((data)=>{
            this.setState({content:data});
            console.log(data);
        })
    }

    render(){
        let {content} = this.state;
        let pros="";
        if(content.length >0) {
            pros = content.map((item,index)=>{
                return (
                    <li key={index}>
                        <a>
                            <img className="like-L" src={item.imgUrl}/>
                            <div className="like-R">
                                <div className="li-t">
                                    {item.name}
                                    <span>7.6km</span>
                                </div>
                                <div className="li-c">{item.tittle}</div>
                                <div className="li-b">
                                    <i>¥{item.price}<s>¥40</s></i><span>已售186</span>
                                </div>
                                <div className="li-bb">
                                    <span className={item.bb}>{item.introduce}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })
        }
        return(
            <section>
                <div className="like">
                    <h3>猜你喜欢</h3>
                    <ul>
                        {pros}
                    </ul>
                </div>
            </section>
        )
    }

}
