import styled from "styled-components";

export const StyledCollectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: lighter;
  text-transform: capitalize;
  margin-top: 40px;
  cursor: pointer;
`;
export const StyledCollectionPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10px, 1fr));
  gap: 20px;
`;
export const StyledCollection = styled.div`
  text-align: center;
  & > .Collection-Title {
    text-transform: capitalize;
    font-size: 30px;
  }
`;
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
