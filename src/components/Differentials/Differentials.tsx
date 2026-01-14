import {
  Section,
  Container,
  Title,
  Cards,
  Card,
  CardTitle,
  CardText,
} from "./styles";

export const Differentials = () => {
  return (
    <Section>
      <Container>
        <Title>Por que revender Pururucas Sabores do Vale?</Title>

        <Cards>
          <Card>
            <CardTitle>Produto artesanal</CardTitle>
            <CardText>
              Produção artesanal, com cuidado em cada etapa para garantir sabor, crocância e
qualidade em todos os pacotes.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Boa aceitação no ponto de venda</CardTitle>
            <CardText>
              Produto com excelente aceitação pelos clientes e ótima saída, facilitando a
recompra e o giro no comércio.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Parceria direta</CardTitle>
            <CardText>
              Contato direto com a distribuidora, oferecendo proximidade, confiança e
flexibilidade no atendimento.
            </CardText>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
};
