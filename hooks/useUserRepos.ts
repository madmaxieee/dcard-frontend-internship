import type { RepoInfo } from "types";

import faker from "@faker-js/faker";

export const useUserRepos = (username: string) => {
  const getRepos: (range: [number, number]) => Promise<RepoInfo[]> = async (
    range: [number, number]
  ) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);

    const data = await res.json();

    const repoInfo: RepoInfo[] = data.map((info: any) => ({
      name: info.name,
      description: info.description,
      stargazers_count: info.stargazers_count,
      html_url: info.html_url,
      visibility: info.visibility,
    }));

    const [begin, end] = range;

    if (begin <= repoInfo.length && end <= repoInfo.length)
      return repoInfo.slice(begin, end);
    else return [];
  };

  return { getRepos };
};
