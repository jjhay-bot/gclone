import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function SearchBar({hideBottons}) {
  const nagivate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput("");
    console.log(searchInput);
    nagivate("/result");
  };

  return (
    <form>
      <Paper
        elevation={searchFocus ? 2 : 0}
        className="search_bar"
        onMouseEnter={() => setSearchFocus(true)}
        onMouseLeave={() => setSearchFocus(false)}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className="search_bar_input"
        >
          <SearchRoundedIcon />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <MicRoundedIcon />
        </Stack>
      </Paper>

      {!hideBottons && <Stack
        direction="row"
        spacing={1.5}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 3 }}
        className="search_buttons"
      >
        <Button
          color="inherit"
          variant="outlined"
          type="submit"
          onClick={handleSubmit}
        >
          Google Search
        </Button>
        <Button color="inherit" variant="outlined">
          I'm Feeling Lucky
        </Button>
      </Stack>}
    </form>
  );
}
