import React from "react";
import {
  StyledCollectionPreview,
  StyledCollectionTitle,
} from "../styled/StyledCollection";
import CollectionItem from "../components/CollectionItem";

export default function CollectionPreview({ title, items }) {
  return (
    <div>
      <StyledCollectionTitle>{title.toUpperCase()}</StyledCollectionTitle>
      <StyledCollectionPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </StyledCollectionPreview>
    </div>
  );
}
