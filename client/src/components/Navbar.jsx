import styled from '@emotion/styled';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: centre;
    ${mobile({padding: "10px 0px"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-Left: 25px;
    padding: 5px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({justifyContent: "center", flex: 2})};
`;

const MenuItem = styled.div`
    margin-left: 25px;
    cursor: pointer;
    font-size: 14px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>

            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'></Input>
                    <Search style={{color: "gray", fontSize: 16}} ></Search>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>eBuy</Logo>
            </Center>

            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge 
                        badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar