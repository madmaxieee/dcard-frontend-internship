import type { NextPage } from "next";

import { useRouter } from "next/router";
import Head from "next/head";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Header, RepoList } from "components";

const UserReposPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Head>
        <title>GitHub: {username}</title>
      </Head>
      <Paper sx={{ maxWidth: "100vw", height: "100vh" }} square>
        <Stack gap="1em">
          <Header username={username as string} />
          <Box sx={{ width: "50vw", mx: "auto", mt: "2em" }}>
            <RepoList username={(username as string) ?? ""} />
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default UserReposPage;
