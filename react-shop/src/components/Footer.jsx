import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  GitHub,
  LinkedIn,
  WhatsApp
} from "@material-ui/icons";
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

const Logo = styled.h1`
  color:blue;`;

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
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  margin-right: 20px;
  &:hover {
    transform:scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color:blue;
  font-weight:bold;
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
  cursor:pointer;
  margin-bottom: 10px;
  &:hover{
    color:blue;
    transform:scale(1.05);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CYGNOOS</Logo>
        <Desc>
        Her satın alma hareketi, tüketicide bir suçluluğa yol açar. Tüketici, her ne kadar gönüllü olsa da para harcamaktan kaynaklanan bir suçluluk psikolojisine sahiptir. Eğer bu suçluluğu engellemezseniz satış yapmak zor. Bu yüzden yazacağınız ürün açıklamaları da müşterinizin bu psikolojiye girmesine engel olmalı, müşteriyi rahatlamalı ve onlara güven vermelidir. Müşteri satın alımdan sonra kendini mutlu hissetmelidir.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="FD1D1D">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="171515">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="0072b1 ">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Faydalı Linkler</Title>
        <List>
          <ListItem>Ana Sayfa</ListItem>
          <ListItem>Sebetim</ListItem>
          <ListItem>Kişi Kolleksiyası</ListItem>
          <ListItem>Qadın Kolleksiyası</ListItem>
          <ListItem>Aksesuarlar</ListItem>
          <ListItem>Hesabım</ListItem>
          <ListItem>Sifarişim</ListItem>
          <ListItem>Beyendiklerim</ListItem>
          <ListItem>Qaydalar</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Elaqe</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Şeki şeher , Oğuz Yolu küçesi ev:3 5506
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +994 70 897 94 77  
        </ContactItem>
        <ContactItem>
          <WhatsApp style={{marginRight:"10px"}}/> +90 535 897 94 77  
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> safarlinihat@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
