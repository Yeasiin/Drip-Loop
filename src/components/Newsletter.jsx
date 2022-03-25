import styled from "styled-components";

function Newsletter() {
  return (
    <Wrapper>
      <h2>Get 10% Off By Joining Mailing List</h2>
      <p>
        Get 10% off your first purchase by joining our mailing list, and receive
        some of the best deals possible.
      </p>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Subscribe" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  margin-bottom: 120px;
  color: #223e3f;
  text-align: center;
  max-width: 55ch;
  & > h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 400;
  }
  & > p {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  & > form {
    display: flex;
    justify-content: center;

    & > input[type="email"] {
      padding: 4px 20px;
      border-radius: 4px 0 0 4px;
      border: 2px solid #3f3f3f;
      font-family: inherit;
      font-size: 18px;
      color: #8a8a8a;
    }

    & > input[type="submit"] {
      border: 0;
      background-color: #223e3f;
      color: #fff;
      font-size: 18px;
      padding: 10px 30px;
      font-family: inherit;
      border-radius: 0 4px 4px 0;
      margin-left: -3px;
    }
  }
`;

export default Newsletter;
