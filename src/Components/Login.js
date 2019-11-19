import React, { Component } from 'react'
import axios from 'axios';
import queryString from 'query-string';
import {Redirect} from 'react-router-dom';

import {GITHUB_CONFIG, MS_CONFIG} from './Config';

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json"
}

export class Login extends Component {

    state = {
        access_token : null
    }
    
    componentDidMount(){
        let params = queryString.parse(this.props.location.search)
        const code = params.code;

        axios.post(`${MS_CONFIG.TOKEN_URL}client_id=${MS_CONFIG.CLIENT_ID}&client_secret=${MS_CONFIG.CLIENT_SECRET}
                    &scope=${MS_CONFIG.SCOPE}`,
                    { 
                        mode: 'no-cors', 
                        headers:headers,
                        data: {
                            code:code,
                            grant_type: 'authorization_code',
                            client_secret:MS_CONFIG.CLIENT_SECRET
                        }
                    }
            ).then((res)=>{
        
            console.log(queryString.parse(res.data));
            const data = queryString.parse(res.data);
            localStorage.setItem('access_token', data.access_token);
            if(data.access_token !== null){
                this.setState({access_token: data.access_token})
               
            }
        })
               
    }

    render() {
        if(this.state.access_token !== null){
            return (
                <Redirect  to="/home"/>
            )
        }
        else{
            return(<div>Loading..</div>)
        }
    }
}

export default Login
