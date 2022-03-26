import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styled/Container";

function HeroArea() {
  return (
    <Wrapper>
      <Container>
        <div className="hero__card">
          {/* <h1>Luxury, For the Woman Who Deserves It</h1> */}
          <h1> Clothes that you will feel too. </h1>
          <p>
            Embrace fashion in full color with head-turning hues, striking
            silhouettes and vibrant accessories
          </p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url("https://i.ibb.co/4pbbLdZ/hero1.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;

  & .hero__card {
    background-color: #fff;
    border: 3px solid #223e3f;
    display: inline-block;
    max-width: 45ch;
    padding: 30px 40px;

    & > h1 {
      margin: 0;
      color: #223e3f;
      font-size: 32px;
    }
    & > p {
      font-size: 18px;
      margin: 15px 0 20px;
      color: #223e3f;
    }
  }
`;

export default HeroArea;
