import React from "react";
import { withRouter } from "react-router";
import {
  MenuContent,
  MenuItem,
  BackgroundImage,
} from "../styled/DirectoryMenu";

function Menu({ title, imageUrl, linkUrl, size, history }) {
  return (
    <MenuItem style={ size ? {height:"340px"}: {height:"240px"} } onClick={() => history.push(linkUrl)}>
      <MenuContent size="hello">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </MenuContent>
      <BackgroundImage imageUrl={imageUrl} />
    </MenuItem>
  );
}

export default withRouter(Menu);
