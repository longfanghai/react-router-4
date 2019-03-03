import React from 'react';
import ReactDOM from 'react-dom';
import {Home,Navgitor,BascRoute,Blocking,Miss,Nomatch,Query,Ruqice} from './components'
import style from './main.css';
//引入的是react-router-dom，HashRouter
import { HashRouter  as Router,Route,Switch} from 'react-router-dom'

class Index extends React.Component{
    render(){
        return (
            <Router>
            {/*需要加顶层div */}
                <div>
                    <Navgitor/>
                    <Switch>
                    {/*Router占位显示  */}
                     <Route path="/" component={Home} exact/>
                    <Route path="/basc" component={BascRoute}/>
                    <Route path="/blocking" component={Blocking}/>
                    <Route path="/miss" component={Miss}/>
                    <Route path="/query" component={Query}/>
                    <Route path="/ruqice" component={Ruqice}/>
                    <Route component={Nomatch}/>
                    </Switch>
                </div>
            </Router>
           
        )
    }
}
ReactDOM.render(<Index/> 
    ,document.getElementById('app'))
