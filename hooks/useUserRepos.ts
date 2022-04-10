import { useRouter } from "hooks";

import { notification } from "utils";

import type { RepoInfo } from "types";

export const useUserRepos = (username: string) => {
  const { navigate } = useRouter();

  const getRepos: (range: [number, number]) => Promise<RepoInfo[]> = async (
    range: [number, number]
  ) => {
    let res: Response;
    try {
      res = await fetch(`https://api.github.com/users/${username}/repos`);
    } catch (err) {
      notification.error("network error");
      navigate("/");
      return [];
    }

    if (!res.ok) {
      notification.error(`Error ${res.status}`);
      navigate("/");
      return [];
    }

    const data = await res.json();

    if (data.length === 0) {
      notification.error(`user "${username}" not found`);
      navigate("/");
      return [];
    }

    const repoInfo: RepoInfo[] = data.map((info: any) => ({
      name: info.name,
      description: info.description,
      stargazers_count: info.stargazers_count,
      html_url: info.html_url,
      visibility: info.visibility,
    }));

    const [begin, end] = range;

    if (begin <= repoInfo.length && end <= repoInfo.length) {
      return repoInfo.slice(begin, end);
    } else {
      return [];
    }
  };

  return { getRepos };
};
