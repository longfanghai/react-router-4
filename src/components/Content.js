import React,{Component} from 'react';
export default class Content extends Component{
  render(){
      console.log(this.props);
      const {params}=this.props.match;//获取url参数
      const location=this.props.location;
    return (
       <div>
          <hr/>
          params:{JSON.stringify(params)}
          <br/>
          location:{location.search.substr(1)}
          <hr/>
        </div>
      )
   }
 }