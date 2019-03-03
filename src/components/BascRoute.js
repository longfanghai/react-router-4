import React,{Component} from 'react';
import {NavLink,Route} from 'react-router-dom';
import {Content} from '../components';

export default class BascRoute extends Component{
  render(){ 
    console.log(this.props)
    return (
       <div>
          <ul>{/*this.props.match.url当前路由地址 */}
            <li><NavLink to={this.props.match.url+'/leve1'}>level 1</NavLink></li>
            <li><NavLink to={this.props.match.url+'/leve2'}>level 2</NavLink></li>
            <li><NavLink to={this.props.match.url+'/leve3'}>level 3</NavLink></li>
          </ul>
          {/* route既是路由，又是占位显示  这是路由的嵌套 */}
          <Route path={`${this.props.match.url}/:leve`} component={Content}/>
        </div>
      )
   }
 }