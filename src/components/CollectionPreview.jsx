import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import CollectionItem from "../components/CollectionItem";

function CollectionPreview({ title, items, routeName, history, match }) {
  return (
    <Wrapper>
      <div
        className="collection-title"
        onClick={() => history.push(match.url + "/" + routeName)}
      >
        {title.toUpperCase()}
      </div>
      <div className="collection-preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > .collection-title {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: lighter;
    text-transform: capitalize;
    margin-top: 40px;
    cursor: pointer;
  }
  & > .collection-preview {
    display: grid;
    grid-template-columns: repeat(4, minmax(10px, 1fr));
    gap: 20px;
  }
`;

export default withRouter(CollectionPreview);
