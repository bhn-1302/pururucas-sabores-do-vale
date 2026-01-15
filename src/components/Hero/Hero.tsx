import logo from "../../assets/images/logo-fundo-removido.png";
import mascote from "../../assets/images/macote-fundo-removido.png";

import {
  HeroSection,
  Container,
  Content,
  LogoArea,
  TextArea,
  Title,
  Subtitle,
  ImageArea,
  SpeechBubble,
  MascotWrapper,
} from "./styles";

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <TextArea>
            <LogoArea>
              {/* Logo da marca */}
              <img src={logo} alt="Pururucas Sabores do Vale" />
            </LogoArea>

            <Title>Pururucas artesanais com sabor de infância</Title>
            <Subtitle>
              Produzidas artesanalmente e distribuídas pela Distribuidora
              Sabores do Vale, direto de Jacareí para o Vale do Paraíba e
              Litoral Norte.
            </Subtitle>
          </TextArea>

          <ImageArea>
            <MascotWrapper>
              <SpeechBubble>Oi! Que bom te ver por aqui 😊</SpeechBubble>
              <img src={mascote} alt="Mascote Pururukinha" />
            </MascotWrapper>
          </ImageArea>
        </Content>
      </Container>
    </HeroSection>
  );
};
