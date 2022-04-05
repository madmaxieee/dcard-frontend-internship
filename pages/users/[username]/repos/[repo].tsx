import type { NextPage } from "next";

import { useRouter } from "next/router";

import { Paper, Stack, Box } from "@mui/material";
import { Header, RepoPageContent } from "components";

const RepoPage: NextPage = () => {
  const router = useRouter();
  const { username, repo } = router.query;

  return (
    <Paper sx={{ maxWidth: "100vw", height: "100vh" }} square>
      <Stack gap="1em">
        <Header username={username as string} repoName={repo as string} />
        <Box sx={{ width: "50vw", margin: "auto" }}>
          <RepoPageContent
            username={username as string}
            repoName={repo as string}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default RepoPage;
