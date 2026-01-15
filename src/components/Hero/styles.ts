import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #ffffff;
  overflow: visible;
  cursor: default;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const LogoArea = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(99, 58, 31, 0.12);

  img {
   max-width: 190px;
  }
  }
`;

export const TextArea = styled.div``;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: #633a1f;
  margin-bottom: 1rem;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  color: #995a31;
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;
`;

export const MascotWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    max-width: 300px;
    width: 100%;
    heigth: auto;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;

    img {
      max-width: 220px;
    }
  }
`;

export const SpeechBubble = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  position: absolute;
  right: calc(100% - 8%);
  top: 30%;
  margin-right: 0;

  background: #ffffff;
  color: #633a1f;
  padding: 0.8rem 1.2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  border: 2px solid #633a1f;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #633a1f;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


