import styled from "styled-components";

export const StyledCollectionItem = styled.div`
  height: 340px;
  cursor: pointer;
  position: relative;

  &:hover {
    .CollectionImage {
      opacity: 0.8;
    }
    .inverter {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
  }

  & > .CollectionImage {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 90%;
  }

  & > .CollectionFooter {
    display: flex;
    font-size: 18px;
    margin-top: 8px;
    justify-content: space-between;
  }

  & > .inverter {
    position: absolute;
    top: 225px;
    width: 80%;
    opacity: 0.7;
    margin: 0 10%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(30px);
  }
`;
