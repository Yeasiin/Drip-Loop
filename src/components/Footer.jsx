import styled from "styled-components";
import { Container } from "../styled/Container";

function Footer() {
  return (
    <Wrapper>
      <Container>
        <div className="footer-top">
          <div className="footer-left">
            <h2>Get In Touch</h2>
            <hr />
            <div className="d-flex">
              <p>📧 example@drip.com</p>
              <p> @ driploop </p>
              <p>📞 +108434534</p>
              <p>🔗 Others link</p>
            </div>
          </div>
          <div className="footer-right">
            <h2>Stores</h2>
            <hr />
            <div className="footer-location">
              <div>
                <p>Greenwood Village</p>
                <p>
                  1857 Scheuvront Drive,
                  <br />
                  Greenwood Village,
                  <br />
                  Colorado,80111
                </p>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <p>El Campo</p>
                <p>
                  1133 Adams Drive,
                  <br />
                  El Campo,
                  <br />
                  Texas,77437
                </p>
                <p>(979) 476-3341</p>
              </div>
              <div>
                <p>San Diego</p>
                <p>
                  2041 Pike Street,
                  <br />
                  San Diego,
                  <br />
                  California,92111
                </p>
                <p>(858) 493-2241</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyright">Copyright 2022 &copy; All Rights Reserved</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > .copyright {
    text-align: center;
    background-color: #f5f5f5;
    padding: 15px 0;
    margin-top: 20px;
    font-size: 16px;
  }

  & .footer-top {
    display: flex;
    gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;

    @media (max-width: 940px) {
      flex-direction: column;
    }

    & > .footer-left {
      flex-basis: 40%;
      & > .d-flex {
        display: flex;
        flex-wrap: wrap;

        & > p {
          flex-basis: 50%;
          margin: 8px 0;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
    & > .footer-right {
      flex-basis: 60%;

      & > .footer-location {
        display: flex;
        font-size: 18px;

        @media (max-width: 1015px) {
          font-size: 14px;
        }

        & > * {
          flex-basis: 33%;
        }
        p {
          margin: 10px 0;
        }
      }
    }

    h2 {
      font-weight: 400;
    }
  }
`;

export default Footer;
