import {
  StyledCollectionItem,
  StyledCollectionImage,
  StyledCollectionFooter,
} from "./../styled/StyledCollection";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <StyledCollectionItem>
      <StyledCollectionImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <StyledCollectionFooter>
        <span>{name}</span>
        <span>${price}</span>
      </StyledCollectionFooter>
    </StyledCollectionItem>
  );
}
