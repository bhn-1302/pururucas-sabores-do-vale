import { Section, Container, Content, Title, Text } from "./styles";

export const About = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>Quem somos</Title>

          <Text>
            Somos a Distribuidora Sabores do Vale, localizada em Jacareí, com
            mais de 2 anos produzindo e distribuindo pururucas artesanais.
          </Text>

          <Text>
            A ideia de produzir as pururucas surgiu de lembranças da infância.
            Um salgadinho simples, mas que remete a momentos marcantes, como a
            cantina da escola ou a feira livre aos finais de semana.
          </Text>

          <Text>
            Valorizamos a qualidade em cada etapa do processo artesanal e, hoje,
            atendemos comércios do Vale do Paraíba e Litoral Norte, levando
            sabor e crocância para cada ponto de venda.
          </Text>
        </Content>
      </Container>
    </Section>
  );
};
