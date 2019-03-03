import React,{Component} from 'react';

import {Content,Nomatch} from '../components';
//Switch选择判断
import {NavLink,Route,Switch} from 'react-router-dom';

export default class Miss extends Component{
  render(){
    return (
        <div>
          <ul>
            <li><NavLink to={this.props.match.url+'/abc/leve1'}>level 1</NavLink></li>
            <li><NavLink to={this.props.match.url+'/leve2'}>level 2</NavLink></li>
            <li><NavLink to={this.props.match.url+'/abc/leve3'}>level 3</NavLink></li>
          </ul>
          {/* route既是路由，又是占位显示 */}
          {/* Switch选择判断，如果那个路由匹配了，就不进行后续的操作,可以匹配404页面*/}
          <Switch>
            <Route path={`${this.props.match.url}/abc/:leve`} component={Content}/>
            <Route component={Nomatch}/>
          </Switch>
        
        </div>
      )
   }
 }