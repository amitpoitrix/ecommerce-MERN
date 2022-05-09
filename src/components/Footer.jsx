import styled from '@emotion/styled'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:#${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`

`;

const Footer = () => {
  return (
    <Container>

        <Left>
            <Logo>eBuy</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight: "10px"}} /> M.G. Road, Gurugram, 122001</ContactItem>
            <ContactItem> <Phone style={{marginRight: "10px"}} /> +1 234 786 3445</ContactItem>
            <ContactItem> <MailOutline style={{marginRight: "10px"}} /> contact@ebuy.com</ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer