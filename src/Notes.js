import React from "react";
import {
  Container,
  Box,
  Grid,
  Paper,
  Stack,
  Divider,
  Link,
} from "@mui/material";

export const Notes = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Box className="green">
        <div>Box : inherit width</div>
        <div>Box is like a normal "div"</div>
      </Box>

      <Container className="green" maxWidth="lg">
        Container: default
        <div> maxwidth='lg' </div>
        <div> margin: 'auto' (center)</div>
        <Box className="blue">Box : inherit width</Box>
      </Container>
      <Grid container spacing={2} className="green">
        <Grid item className="red" xs={12}>
          .<div>Grid: width = chunk into 12 </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          className="red"
        >
          <Paper>
            xs={12}, sm={10}, md={8}, lg={6}, xl={4}
          </Paper>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          className="red"
        >
          <Paper>
            xs={12}, sm={10}, md={8}, lg={6}, xl={4}
          </Paper>{" "}
        </Grid>{" "}
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          className="red"
        >
          <Paper>
            xs={12}, sm={10}, md={8}, lg={6}, xl={4}
          </Paper>{" "}
        </Grid>
      </Grid>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        className="green"
      >
        <Paper className="red">
          <Link
            target="_blank"
            href="https://mui.com/material-ui/react-stack/#interactive"
          >
            direction="row"
          </Link>
        </Paper>
        <Paper className="red">Item 1</Paper>
        <Paper className="red">Item 2</Paper>
        <Paper className="red">Item 3</Paper>
      </Stack>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        className="green"
      >
        <Paper className="red"> direction="column"</Paper>
        <Paper className="red">Item 1</Paper>
        <Paper className="red">Item 2</Paper>
        <Paper className="red">Item 3</Paper>
      </Stack>
    </Stack>
  );
};
