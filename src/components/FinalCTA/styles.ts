import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

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
  font-size: 2.5rem;
  color: #633a1f;
  margin-bottom: 2rem;
  font-weight: 700;

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
  padding-bottom: 3rem;
`;
export const Mascot = styled.div`
  position: absolute;
  right: -120px;
  bottom: -95px;
  pointer-events: none;

  img {
    width: 120px;
    transform: rotate(-6deg);
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    img {
      width: 90px;
      transform: none;
    }
  }

  @media (max-width: 480px) {
    position: relative;
    margin-top: 2.5rem;
    left: 40px;

    img {
      width: 110px;
    }
  }
`;

export const InstagramBox = styled.div`
  margin-top: 5rem;
  text-align: center;

  @media (max-width: 480px) {
  margin-top: 3rem;
  }
`;

export const InstagramText = styled.p`
  font-size: 1.05rem;
  color: #995a31;
  margin-bottom: 0.6rem;
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  line-height: 1;
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #633a1f;
  text-decoration: none;
  border-bottom: 2px solid #e8ac41;
  padding-bottom: 2px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  font-size: 1.2rem;
`;
