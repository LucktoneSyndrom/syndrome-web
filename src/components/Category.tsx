import React from "react";
import { Select, Box, Stack, InputLabel, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const CustomInputLabel = styled(InputLabel)({
  fontSize: "0.85rem",
  marginTop: "18.9px",
});

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
        <FormControl fullWidth>
          <CustomInputLabel id="region-label" shrink>
            지역
          </CustomInputLabel>
          <Select labelId="region-label" sx={style.select} />
        </FormControl>
        <FormControl fullWidth>
          <CustomInputLabel id="category-label" shrink>
            분야
          </CustomInputLabel>
          <Select labelId="category-label" sx={style.select} />
        </FormControl>
        <FormControl fullWidth>
          <CustomInputLabel id="type-label" shrink>
            스택
          </CustomInputLabel>
          <Select labelId="type-label" sx={style.select} />
        </FormControl>
        <FormControl fullWidth>
          <CustomInputLabel id="status-label" shrink>
            정렬순
          </CustomInputLabel>
          <Select labelId="status-label" sx={style.select} />
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Category;
