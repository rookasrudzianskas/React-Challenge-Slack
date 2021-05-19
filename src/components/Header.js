import React from 'react';
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />

            </Main>

            <UserContainer>

            </UserContainer>
        </Container>
    );
};

export default Header;
const Container = styled.div`
  
`;

const Main = styled.div`

`;


const UserContainer = styled.div`

`;

const SearchContainer = styled.div`

`;

const Search = styled.div`

`;
