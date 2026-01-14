import styled from "styled-components";

export const Section = styled.section`
  background: #633a1f;
  padding: 5rem 0;
  cursor: default;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
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
  border-radius: 14px;
`;

export const CardTitle = styled.h3`
  color: #e8ac41;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: #ffffff;
  line-height: 1.6;
`;
