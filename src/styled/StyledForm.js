import styled from "styled-components";

export const FormWarper = styled.div`
  width: 100%;
    & > h2{
        margin: 10px 0;
        font-size: 36px;
        font-weight: lighter;
    }
    & > span {
        font-size: 110%;
    }
`;
export const RegisterWarper = styled.div`
  display: flex;
  margin: 20px 100px;
  gap: 200px;
  overflow: hidden;
  justify-content: space-between;
`;
