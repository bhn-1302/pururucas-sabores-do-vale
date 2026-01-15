import pururucaUm from "../../assets/images/pururuca-um.jpeg";
import pururucaDois from "../../assets/images/pururuca-dois.jpeg";
import pururucaTres from "../../assets/images/pururuca-tres.jpeg";
import pururucaQuatro from "../../assets/images/pururuca-quatro.jpeg";
import pururucaCinco from "../../assets/images/pururuca-cinco.jpeg";

import {
  Section,
  Container,
  Title,
  Subtitle,
  ProductsGrid,
  ProductCard,
  ProductTitle,
  ProductText,
  Gallery,
  GalleryImage,
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

        <Gallery>
          <GalleryImage src={pururucaUm} alt="Processo de produção artesanal" />
          <GalleryImage src={pururucaDois} alt="Pururucas em preparo" />
          <GalleryImage src={pururucaTres} alt="Pururucas prontas" />
          <GalleryImage src={pururucaQuatro} alt="Detalhe da crocância" />
          <GalleryImage src={pururucaCinco} alt="Produto no ponto de venda" />
        </Gallery>
      </Container>
    </Section>
  );
};
