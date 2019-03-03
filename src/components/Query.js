import React,{Component} from 'react';
import {Content,Nomatch} from '../components';
import {NavLink,Route,Switch} from 'react-router-dom';
export default class Query extends Component{
  render(){
    console.log(this.props);
      const {location,match}=this.props;
    return (
      
       <div>
       <div>
       <ul>{/*to对象化操作 url参数传递 ，路由传参*/}
         <li><NavLink to={{
          pathname:match.url+'/leve1',
          search:"?abc=123"
         }}>level 1</NavLink></li>
         <li><NavLink to={{
           pathname:match.url+'/leve3',
           search:'?abc=123&xyz=455'
         }}>level 2</NavLink></li>
         <li><NavLink to={{
           pathname:match.url+'/leve3?abc=123&sad=34'
         }}>level 3</NavLink></li>
       </ul>
       {/* route既是路由，又是占位显示 */}
       <Switch>
         <Route path={`${match.url}/:leve`} component={Content}/>
         <Route component={Nomatch}/>
       </Switch>
     
     </div>
        </div>
      )
   }
 }
