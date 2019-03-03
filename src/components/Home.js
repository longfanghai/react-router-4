import React, { Component } from "react";
export default class Home extends Component {
    handeclick=()=>{
      //程序式跳转
         this.props.history.push('/miss')
    }
  render() {
    return <div>Home
          <button onClick={this.handeclick}>goto</button>
    </div>;
  }
}
