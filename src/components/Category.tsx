import React from "react";
import { useRouter } from "next/navigation";
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
    <Select
      labelId={labelId}
      sx={{
        height: "35px",
        borderRadius: "10px",
        cursor: "pointer",
        "& .MuiSelect-select": {
          pointerEvents: "none",
        },
      }}
      {...props}
    />
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
    borderRadius: "10px",
  },
};

const Category = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/category`);
  };
  return (
    <Box sx={style.container}>
      <Stack spacing={2} direction="row" sx={style.stack}>
        <CustomSelect
          labelId="region-label"
          label="지역"
          onClick={handleClick}
        />
        <CustomSelect
          labelId="category-label"
          label="분야"
          onClick={handleClick}
        />
        <CustomSelect labelId="type-label" label="스택" onClick={handleClick} />
        <CustomSelect
          labelId="status-label"
          label="정렬순"
          onClick={handleClick}
        />
      </Stack>
    </Box>
  );
};

export default Category;
