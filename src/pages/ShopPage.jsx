import React, { useState } from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "./../services/ShopData";

export default function ShopPage({ match }) {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}
