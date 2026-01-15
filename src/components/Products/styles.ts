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
  font-size: 2.5rem;
  color: #633a1f;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #995a31;
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 3rem;
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

export const Gallery = styled.div`
margin-top: 4rem;
display: flex;
gap: 1.5rem;
overflow-x: auto;
padding:-bottom: 1rem;

scroll-snap-type: x mandatory;

&::-webkit-scrollbar {
display: none;
}

@media (min-width: 1024px) {
justify-content: center;
overflow-x: visible;
flex-wrap: wrap;
}
`;

export const GalleryImage = styled.img`
  flex: 0 0 auto;
  width: 280px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  scroll-snap-align: center;
  box--shadow: 0 8px 20px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;
