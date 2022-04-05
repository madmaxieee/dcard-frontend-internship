import type { NextPage } from "next";

import Head from "next/head";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Header } from "components";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github Repo Viewer</title>
      </Head>
      <Paper sx={{ maxWidth: "100vw", height: "100vh" }} square>
        <Stack gap="1em">
          <Header username={""} />
        </Stack>
      </Paper>
    </>
  );
};

export default HomePage;
