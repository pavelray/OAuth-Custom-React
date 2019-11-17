import React, { Component } from 'react'
import axios from 'axios';

export class Home extends Component {

  state={
    user:null
  }

  async componentDidMount(){
    const access_token = localStorage.getItem('access_token');
    const config = {
      headers:{
          Authorization: "Bearer " + access_token,
          Accept: "application/json, text/plain, */*",
          'Content-Type': 'multipart/form-data'
      }
    }
    
    console.log(config);

   const userInfo = await axios.get('https://api.github.com/user',config)

   console.log(userInfo);
   this.setState({user: userInfo.data});
  }


  render() {

    if(this.state.user!==null){
      return (
        <div>
          Welcome {this.state.user.name}
        </div>
      )
    }
    else{
      return(<div>Loading.. </div>)
    }

    
  }
}

export default Home
