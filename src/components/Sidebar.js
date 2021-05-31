import React from 'react';
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'

import {sidebarItems} from "../data/SidebarData";

const Sidebar = () => {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>Rookas Channel</Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>

            <MainChannels>
                {
                    sidebarItems.map((item, index) => (
                        <MainChannelItem key={index}>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }

            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelsList>
                    <Channel>
                   Something
                    </Channel>

                    <Channel>
                        Something
                    </Channel>

                    <Channel>
                        Something
                    </Channel>
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
  background-color: #3f0e40;
  
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
  cursor: pointer;
  
  
`;

const Name = styled.div`

`;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3F0E40;
  fill: #3F0E40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background-color: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div`
  
`;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  
  :hover {
    background-color: #350d36;
  }
`;

