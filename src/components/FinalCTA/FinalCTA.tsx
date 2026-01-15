import {
  Section,
  Container,
  Title,
  Text,
  ButtonWrapper,
  Mascot,
  Button,
  InstagramBox,
  InstagramText,
  InstagramLink,
  InstagramIcon
} from "./styles";
import mascote from "../../assets/images/macote-fundo-removido.png";

export const FinalCTA = () => {
  return (
    <Section>
      <Container>
        <Title>Leve Pururucas Sabores do Vale para o seu comércio</Title>

        <Text>
          Entre em contato e saiba como revender nossas pururucas artesanais.
        </Text>

        <ButtonWrapper>
          <Button href="https://wa.me/5512996609971" target="_blank">
            Falar no whatsApp
          </Button>

          <Mascot>
            <img src={mascote} alt="Mascote convidando para contato" />
          </Mascot>
        </ButtonWrapper>

        <InstagramBox>
          <InstagramText>
            Acompanhe nosso dia a dia e a produção artesanal no Instagram
          </InstagramText>

          <InstagramLink
            href="https://instagram.com/saboresdovalejac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon /> @saboresdovalejac
          </InstagramLink>
        </InstagramBox>
      </Container>
    </Section>
  );
};
