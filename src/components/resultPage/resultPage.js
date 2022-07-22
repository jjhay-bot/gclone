import React from "react";
import { SearchBar } from "../searchPage/SearchBar";
import { Stack } from "@mui/material";

export const ResultPage = () => {
  return (
    <Stack direction="row" p={3}>
      <Stack direction="row" alignItems="center" className="header" pr={6}>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
          height="32px"
        />
      </Stack>
      <SearchBar hideBottons />
    </Stack>
  );
};
