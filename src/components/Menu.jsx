import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function Menu({ title, imageUrl, linkUrl, size, history }) {
  return (
    <Wrapper className={size} onClick={() => history.push(linkUrl)}>
      <div className="menu-content">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
      <BackgroundImage imageUrl={imageUrl} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  height: 400px;
  border-radius: 4px;
  overflow: hidden;
  transform: scale(1);
  cursor: pointer;
  &.large {
    height: 400px;
  }
  &:hover {
    cursor: pointer;
    & > div {
      opacity: 0.9;
    }
    & > div ~ div {
      transform: scale(1.11);
    }
  }
  & > .menu-content {
    display: flex;
    padding: 15px 50px;
    background-color: #fffffff6;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    & > h2 {
      margin: 0;
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }
    & > p {
      margin: 0;
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  background-image: url(${(props) => props.imageUrl});
  left: 0;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export default withRouter(Menu);
