export type RepoInfo = {
  name?: string;
  full_name?: string;
  description: string;
  stargazers_count: number;
  html_url: URL;
  visibility: "public" | "private" | "";
};

export type URL = string;
