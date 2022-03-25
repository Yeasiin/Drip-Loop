import Directory from "../components/Directory";
import HeroArea from "../components/HeroArea";
import Newsletter from "../components/Newsletter";
import { Container } from "./../styled/Container";

function HomePage() {
  return (
    <>
      <HeroArea />
      <Container>
        <Directory />
        <Newsletter />
      </Container>
    </>
  );
}

export default HomePage;
