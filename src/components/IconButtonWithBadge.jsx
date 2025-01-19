import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge({ numberOfItems }) {
  return (
    <IconButton>
      <ShoppingCartIcon color={"info"} fontSize="small" />
      <CartBadge
        badgeContent={numberOfItems}
        color="primary"
        overlap="circular"
      />
    </IconButton>
  );
}
