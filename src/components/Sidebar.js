import React from 'react';
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'


const Sidebar = () => {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>Rookas Channel</Name>
                <NewMessage>

                </NewMessage>
            </WorkspaceContainer>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
  background-color: #3f0e40;
`;

const WorkspaceContainer = styled.div`

`;

const Name = styled.div`

`;

const NewMessage = styled.div`

`;

