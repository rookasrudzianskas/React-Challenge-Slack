import React from 'react';
import "./styles/Login.css";
import styled from "styled-components";
import {auth, provider} from "../firebase";
import {useHistory} from "react-router-dom";


const Login = (props) => {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }

            // then we login, we pass the new user, and then we back to the app js we set the user from here to the state in app js
            props.setUser(newUser);
            // we add the user to the local storage
            localStorage.setItem('user', JSON.stringify(newUser));
        }).catch((error) => {
            alert(error.message);
        })
    }


    return (
        <Container>
            <Content>
                <SlackImg src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
                <h1>Sign in to Slack</h1>
                <SignInButton onClick={signIn}>
                    Sign In with Google
                </SignInButton>
            </Content>
        </Container>
    );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 13px 12px 40px -4px #000000;
  box-shadow: 13px 12px 40px -4px #000000;
`
const Content = styled.div`
  background: white;  
  padding:100px;
  border-radius: 4px;
  -webkit-box-shadow: 13px 12px 40px -4px #000000;
  box-shadow: 13px 12px 40px -4px #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const SlackImg = styled.img`
  height:100px;
  object-fit: contain;
`

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-box-shadow: 1px 5px 15px 5px rgba(0,0,0,0.31);
  box-shadow: 1px 5px 15px 5px rgba(0,0,0,0.31);
  font-size: 15px;
  
`

