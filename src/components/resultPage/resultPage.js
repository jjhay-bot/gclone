import React from "react";
import { SearchBar } from "../searchPage/SearchBar";
import { Divider, Stack } from "@mui/material";
import { Results } from "./Results";
import { useNavigate } from "react-router-dom";

export const ResultPage = () => {
  const nagivate = useNavigate();

  return (
    <Stack px={2}>
      <Stack direction="row" p={3}>
        <Stack
          direction="row"
          alignItems="center"
          className="logo"
          pr={6}
          
        >
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            height="32px"
            onClick={() => nagivate('/')}
          />
        </Stack>
        <SearchBar hideBottons />
      </Stack>
      <Divider orientation="horizontal" flexItem />
      <Results />
    </Stack>
  );
};
