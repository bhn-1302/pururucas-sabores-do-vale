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
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #633a1f;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.15rem;
  color: #995a31;
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 3rem;
`;
