import React from "react";
import Rating from "@mui/material/Rating";

export default function RatingComponent() {
  const [value, setValue] = React.useState(1);

  const [disableRating, setRating] = React.useState(false);

  return (
    <Rating
      style={{
        margin: "0.4rem",
      }}
      name="simple-controlled"
      value={value}
      disabled={disableRating}
      onChange={(event, newValue) => {
        setValue(newValue);
        setRating(true);
      }}
    />
  );
}
