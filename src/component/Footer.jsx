import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ padding:"0px 1px" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin: 0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items: center;

`;

const Payment = styled.img`
width:50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VShop</Logo>
        <Desc>
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. VShop is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at VShop from the comfort of
          your home and get your favourites delivered right to your doorstep.
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
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
            contact
        </Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}}/>  107,Gobi, Erode, Tamil Nadu - 638476. 
        </ContactItem>
        <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +91 9655306133 
        </ContactItem>
        <ContactItem>
        <MailOutline style={{marginRight:"10px"}} /> VShop@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
