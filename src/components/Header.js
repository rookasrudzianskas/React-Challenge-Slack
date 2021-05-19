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
                <Name>
                    Rokas
                </Name>

                <UserImage>
                    <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg" alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    );
};

export default Header;
const Container = styled.div`
  background-color: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
`;


const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`

`;

const Search = styled.div`

`;

const Name = styled.div`

`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
