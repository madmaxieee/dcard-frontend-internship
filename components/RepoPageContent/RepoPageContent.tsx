import type { FC } from "react";

import { Typography, Stack, Paper } from "@mui/material";

import { useRepository } from "hooks";

export const RepoPageContent: FC<{ username: string; repoName: string }> = ({
  username,
  repoName,
}) => {
  const { repoInfo } = useRepository(username, repoName);

  return (
    <Stack gap="1em">
      <Stack direction="row" gap="2em" alignItems="center">
        <Typography variant="h4">{repoInfo.full_name}</Typography>
        <Typography variant="h6">⭐ {repoInfo.stargazers_count}</Typography>
      </Stack>
      <Paper elevation={6}>
        <Typography>{repoInfo.description}</Typography>
      </Paper>
    </Stack>
  );
};
