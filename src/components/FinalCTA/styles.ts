import styled from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  padding: 6rem 0;
  cursor: default;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  color: #633a1f;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #995a31;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
`;

export const Button = styled.a`
  display: inline-block;
  background: #e8ac41;
  color: #633a1f;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Mascot = styled.div`
  position: absolute;
  right: -120px;
  bottom: -95px;

  img {
    width: 110px;
    transform: rotate(-6deg);
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 1.5rem;

    img {
      width: 80px;
      transform: none;
    }
  }

  @media (max-width: 480px) {
    position: absolute;
    right: -10px;
    bottom: -45px;

    img {
      width: 95px;
    }
  }
`;
