import React, { Component } from 'react';
import auth0 from 'auth0-js';


class LoginForm extends Component
{

    /* I have used Auth0 for the Login feature in my App  & show my Integratin skills
    :Auth0 provides authentication and authorization as a service. 
    We are here to give developers and companies the building blocks they need to secure their 
    applications without having to become security experts. ... Based on your app's technology,
    choose one of our SDKs (or call our API), and hook it up to your app. */


    auth0 = new auth0.WebAuth({
        domain: 'dhirensingh.auth0.com',
        clientID: '27qWdjwLT4NYlP5m7RiYF65T1wGztxFX',
        redirectUri: 'http://localhost:3000/home',
        responseType: 'token id_token',
        scope: 'openid'
    });

    
    componentDidMount()
    {
        console.log('login called');  
        this.auth0.authorize();
    }
    render() {
        return (
            null
                /* 

                In real life application there is a input form like such
                from where the credentials are athorized from server to fet to profile which is themm
                stored in localstorage/Session storage etc 
                
                {<form>
                    <label>
                        User Name:
                    <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                    <input type="text" name="pass" />
                    </label>
                    <input type="button" value="submit" onClick={this.clickHandler} />
                </form>} */
        );
    }
}

export default LoginForm;

