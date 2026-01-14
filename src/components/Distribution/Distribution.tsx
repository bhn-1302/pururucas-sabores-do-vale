import {
  Section,
  Container,
  Title,
  Cards,
  Card,
  CardTitle,
  CardText,
} from "./styles";

export const Distribution = () => {
  return (
    <Section>
      <Container>
        <Title>Como funciona a distribuição</Title>

        <Cards>
          <Card>
            <CardTitle>Contato</CardTitle>
            <CardText>
              Entre em contato com a Sabores do Vale para conhecer as condições
              de revenda e tirar todas as suas dúvidas.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Produção</CardTitle>
            <CardText>
              Produzimos pururucas de forma artesanal, com foco em qualidade,
              sabor e crocância, garantindo um produto sempre fresco.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Entrega</CardTitle>
            <CardText>
              Atendemos comércios do Vale do Paraíba e Litoral Norte, com
              pedidos mínimos de 15 pacotes, facilitando a reposição no ponto de
              venda.
            </CardText>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
};
