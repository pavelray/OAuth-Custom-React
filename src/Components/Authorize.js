import React, { Component } from 'react';
import {GITHUB_CONFIG} from './Config';

export class Authorize extends Component {
  
    componentDidMount(){
        const githubAuthUrl =`${GITHUB_CONFIG.AUTH_URL}client_id=${GITHUB_CONFIG.CLIENT_ID}&redirect_uri=${GITHUB_CONFIG.REDIRECT_URI}
        &scope=${GITHUB_CONFIG.SCOPE}`;
        window.open(githubAuthUrl,'_self');
    }

    render(){
        console.log(this.props);
        return(
            <div></div>
        )
    }
}

export default Authorize
