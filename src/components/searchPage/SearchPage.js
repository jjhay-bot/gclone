import "./SearchPage.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar, Box, Stack, Link, IconButton } from "@mui/material";
import { Container } from "@mui/material";
import { SearchBar } from "./SearchBar";

export default function SearchPage() {

  return (
    <>
      <Box sx={{ py: 1, px: 2 }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          className="header"
        >
          <Link href="https://mail.google.com/mail/&ogbl">Gmail</Link>
          <Link href="https://www.google.com.ph/imghp?hl=en&ogbl">
            Images
          </Link>
          <Stack direction="row" spacing={1} pl={2}>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton size="small">
              <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      <Container sx={{ pt: "20vh", pb: 4, width: "fit-content" }}>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
          height="92px"
        />
      </Container>

      <SearchBar />
    </>
  );
}

