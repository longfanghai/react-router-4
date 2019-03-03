import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
export default class Blocking extends Component{
  render(){
    return (
       <div>
          Blocking
          {/*路由离开时触发的方法*/}
          <Prompt message="你确认要离开该页面吗？"/>
        </div>
      )
   }
 }
