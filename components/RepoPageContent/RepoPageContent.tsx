import type { FC } from "react";

import { Typography, Stack, Paper, Link } from "@mui/material";

import { useRepository } from "hooks";
import { parseStarCount } from "utils";

export const RepoPageContent: FC<{ username: string; repoName: string }> = ({
  username,
  repoName,
}) => {
  const {
    repoInfo: { full_name, stargazers_count, description, html_url },
  } = useRepository(username, repoName);

  return (
    <Stack gap="1em">
      <Stack direction="row" gap="2em" alignItems="center">
        <Typography variant="h4">
          <Link href={html_url} target="_blank">{full_name}</Link>
        </Typography>
        <Typography variant="h6">{parseStarCount(stargazers_count)}</Typography>
      </Stack>
      <Paper elevation={3} sx={{ p: "1em", width: "80%", mx: "auto" }}>
        <Typography>{description}</Typography>
      </Paper>
    </Stack>
  );
};
