import React from "react";
import { Select, Box, Stack, InputLabel, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const CustomInputLabel = styled(InputLabel)({
  fontSize: "0.85rem",
  marginTop: "18.9px",
});

const CustomSelect = ({ labelId, label, ...props }) => (
  <FormControl fullWidth>
    <CustomInputLabel id={labelId} shrink>
      {label}
    </CustomInputLabel>
    <Select labelId={labelId} sx={style.select} {...props} />
  </FormControl>
);

const style = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stack: {
    width: "100%",
    height: "100%",
  },
  select: {
    height: "35px",
  },
};

const Category = () => {
  return (
    <Box sx={style.container}>
      <Stack spacing={2} direction="row" sx={style.stack}>
        <CustomSelect labelId="region-label" label="지역" />
        <CustomSelect labelId="category-label" label="분야" />
        <CustomSelect labelId="type-label" label="스택" />
        <CustomSelect labelId="status-label" label="정렬순" />
      </Stack>
    </Box>
  );
};

export default Category;
