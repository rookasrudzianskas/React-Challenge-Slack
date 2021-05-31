import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import {useParams} from "react-router-dom";

const Chat = () => {
    let { channelId } = useParams();
    const [channel, setChannel] = useState([]);

    const getChannel = () => {

        db.collection('rooms').doc(channelId).onSnapshot(snapshot => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() => {
        getChannel();
    }, [channelId]);
    console.log("🚀", channel)


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
                    <Info />
                </ChannelDetails>
            </Header>

            <MessageContainer>
                <ChatMessage />
            </MessageContainer>

            <ChatInput />
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
  
`


