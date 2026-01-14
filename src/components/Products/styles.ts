import styled from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  padding: 5rem 0;
  cursor: default;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  fonts-size: 2.5rem;
  color: #633a1f;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: #995a31;
  margin-bottom: 3rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  /* Quando houver mais produtos */
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export const ProductCard = styled.div`
  padding: 2.5rem;
  border: 2px solid #995a31;
  border-radius: 14px;
`;

export const ProductTitle = styled.h3`
  color: #633a1f;
  margin-bottom: 1rem;
`;

export const ProductText = styled.p`
  color: #995a31;
  line-height: 1.6;
  margin-bottom: 1rem;
`;
