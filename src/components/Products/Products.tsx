import {
  Section,
  Container,
  Title,
  Subtitle,
  ProductsGrid,
  ProductCard,
  ProductTitle,
  ProductText,
} from "./styles";

export const Products = () => {
  return (
    <Section>
      <Container>
        <Title>Nosso produto</Title>
        <Subtitle>
          Pururucas artesanais com excelente aceitação no ponto de venda
        </Subtitle>

        <ProductsGrid>
          <ProductCard>
            <ProductTitle>
              Pururuca Artesanal Sabor Bacon Tradicional
            </ProductTitle>
            <ProductText>
              Pururuca produzida de forma artesanal, com foco em sabor marcante
              e crocância. Um produto simples, feito com cuidado e qualidade em
              cada etapa do processo.
            </ProductText>

            <ProductText>
              Produto com ótima saída no ponto de venda e excelente aceitação
              pelos clientes.
            </ProductText>
          </ProductCard>
        </ProductsGrid>
      </Container>
    </Section>
  );
};
