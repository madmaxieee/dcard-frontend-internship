import type { NextPage } from "next";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Header } from "components";

const HomePage: NextPage = () => {
  return (
    <Paper sx={{ maxWidth: "100vw", height: "100vh" }} square>
      <Stack gap="1em">
        <Header username={""} />
      </Stack>
    </Paper>
  );
};

export default HomePage;
