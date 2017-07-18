import React from "react";
import FindMoreRev from "../../service/FindMoreSever";

export default class MainHeader extends React.Component{
    constructor(){
        super();
        this.state={
            content:[]
        }
        this.initDate=this.initDate.bind(this);
        this.initDate();
    }
    initDate(){
        FindMoreRev.getFindMoreRec((data)=>{
            this.setState({content:data});
            console.log(data);
        })
    }
    componentDidMount(){

    }

    render(){
        let {content} = this.state;
        let pros="";
        if(content.length >0) {
            pros = content.map((item,index)=>{
                return (
                    <li key={index}>
                        <div className="find3l">
                            <p>{item.tittle}</p>
                            <span>{item.location}</span><br/>
                            <div className="find3l-b">
                                <i>盘点</i>{item.person}万人看过
                            </div>
                        </div>
                        <img src={item.imgUrl} />
                    </li>
                )
            })
        }
        return(
            <section>
                <ul className="find3">
                    {pros}
                </ul>
            </section>
        )
    }
}