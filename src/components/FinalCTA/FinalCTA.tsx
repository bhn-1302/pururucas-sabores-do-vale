import {
  Section,
  Container,
  Title,
  Text,
  ButtonWrapper,
  Mascot,
  Button,
} from "./styles";
import mascote from "../../assets/images/mascote.png";

export const FinalCTA = () => {
  return (
    <Section>
      <Container>
        <Title>Leve Pururucas Sabores do Vale para o seu comércio</Title>

        <Text>Entre em contato e saiba como revender nossas pururucas artesanais.</Text>

        <ButtonWrapper>
          <Button href="https://wa.me/5512996609971" target="_blank">
            Falar no whatsApp
          </Button>

          <Mascot>
            <img src={mascote} alt="Mascote convidando para contato" />
          </Mascot>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};
