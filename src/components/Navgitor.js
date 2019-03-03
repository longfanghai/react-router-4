import React,{Component} from 'react';
//NavLink路由跳转的标签
import {NavLink} from 'react-router-dom';
export default class Navgitor extends Component{
  render(){
    return (
       <div>
          <ul>{/*exact 路由也要加上*/}
            <li><NavLink to="/" activeClassName="active" exact>home</NavLink></li>
            <li><NavLink to="/basc" activeClassName="active">basc</NavLink></li>
            <li><NavLink to="/blocking" activeClassName="active">blocking</NavLink></li>
            <li><NavLink to="/miss" activeClassName="active">miss</NavLink></li>
            <li><NavLink to="/query" activeClassName="active">query</NavLink></li>
            <li><NavLink to="/ruqice" activeClassName="active">ruqice</NavLink></li>
          </ul>
        </div>
      )
   }
 }