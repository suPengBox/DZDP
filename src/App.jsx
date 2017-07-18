import  React from "react";
import {BrowserRouter as Router , Route , Link} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import FindPage from "./pages/FindPage.jsx";
import LirenPage from "./pages/LirenPage.jsx";

export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/Li" component={LirenPage}/>
                    <Route exact path="/F" component={FindPage}/>
                    <footer>
                        <ul>
                            <li className="active"><Link to="/"><img src="src/static/images/foot1.png"/><span>首页</span></Link></li>
                            <li><a><img src="src/static/images/foot2.png"/><span>品质优惠</span></a></li>
                            <li className="active"><Link to="/F"><img src="src/static/images/foot3.png"/><span>发现</span></Link></li>
                            <li><a href="mine.html"><img src="src/static/images/foot4.png"/><span>我的</span></a></li>
                         </ul>
                    </footer>
                </div>
            </Router>
        )
    }
}