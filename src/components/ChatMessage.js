import React from 'react';
import styled from "styled-components";

const ChatMessage = () => {
    return (
        <Container>
            <UserAvatar>
                <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg" alt=""/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Rokas Rudzianskas
                </Name>

                <Text>
                    How is the best Challenge ever?
                </Text>
            </MessageContent>
        </Container>
    );
};

export default ChatMessage;
const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
    
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
  margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`

const Text = styled.span` 
  
`
