import React,{Component} from 'react';

import {NavLink,Route,Switch} from 'react-router-dom';
export default class Ruqice extends Component{
  render(){
    return (
        <div>
        <ul>
          <li><NavLink to={this.props.match.url+'/leve1'}>level 1</NavLink></li>
          <li><NavLink to={this.props.match.url+'/leve2'}>level 2</NavLink></li>
          <li><NavLink to={this.props.match.url+'/leve3'}>level 3</NavLink></li>
        </ul>
        {/* route既是路由，又是占位显示 */}
       {/* 组件调用自身，实现递归*/}
          <Route path={`${this.props.match.url}/:leve`} component={Ruqice}/>
         
      </div>
      )
   }
 }