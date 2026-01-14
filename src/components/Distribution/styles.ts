import styled from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  padding: 5rem 0;
  cursor: default;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #633a1f;
  margin-bottom: 3rem;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 2rem;
  border: 2px solid #e8ac41;
  border-radius: 12px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  color: #633a1f;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: #995a31;
  line-height: 1.6;
`;
