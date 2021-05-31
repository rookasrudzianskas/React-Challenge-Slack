import React, {useEffect, useRef, useState} from 'react';
import "./styles/Chat.css";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import {useParams} from "react-router-dom";
import firebase from "firebase";

const Chat = ({ user }) => {
    const chatRef = useRef(null);

    let { channelId } = useParams();
    const [channel, setChannel] = useState([]);
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     // go to the chat reference and scroll into something
    //     chatRef?.current?.scrollIntoView({
    //         behavior: "smooth",
    //     });
    //
    //
    // }, [channelId]);


        const getMessages = () => {
            db.collection('rooms').doc(channelId).collection('messages').onSnapshot(snapshot => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
            })
        }

        const getChannel = () => {
            db.collection('rooms').doc(channelId).onSnapshot(snapshot => {
                setChannel(snapshot.data());
            })
        }

        const sendMessage = (text) => {
            if (channelId) {
                let payload = {
                    text: text,
                    timestamp: firebase.firestore.Timestamp.now(),
                    user: user.name,
                    userImage: user.photo
                }
                db.collection("rooms").doc(channelId).collection('messages').add(payload);
            }
        }

        useEffect(() => {
            getChannel();
            getMessages();
        }, [channelId]);


        return (
            <Container>
                <Header>
                    <Channel>
                        <ChannelName>
                            #{channel.name}
                        </ChannelName>
                        <ChannelInfo>
                            This is the main channel
                        </ChannelInfo>
                    </Channel>

                    <ChannelDetails>
                        <div>
                            Details
                        </div>
                        <Info/>
                    </ChannelDetails>
                </Header>

                <MessageContainer>
                    {messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage key={index} text={data.text} name={data.user} image={data.userImage}
                                     timestamp={data.timestamp}/>
                    ))
                    }
                    <ChatBottom ref={chatRef}/>

                </MessageContainer>

                <ChatInput sendMessage={sendMessage}/>
            </Container>

        );
    };

export default Chat;


const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`

const Channel = styled.div`
  
`

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`

const ChannelName = styled.div`
  font-weight: 700;
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 38, 83, 0.13) ;
  justify-content: space-between;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const ChatBottom = styled.div`
  
`

