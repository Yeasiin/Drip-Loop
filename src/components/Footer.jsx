import styled from "styled-components";

function Footer() {
  return <Wrapper>Copyright 2022 &copy; All Rights Reserved</Wrapper>;
}

const Wrapper = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  padding: 15px 0;
  margin-top: 20px;
  font-size: 16px;
`;

export default Footer;
