import { useRouter } from "next/router";

import { notification } from "utils";

import type { RepoInfo } from "types";

export const useUserRepos = (username: string) => {
  const router = useRouter();

  const getRepos: (range: [number, number]) => Promise<RepoInfo[]> = async (
    range: [number, number]
  ) => {
    let res: Response;
    try {
      res = await fetch(`https://api.github.com/users/${username}/repos`);
      console.log("🚀 ~ file: useUserRepos.ts ~ line 16 ~ useUserRepos ~ username", username)
    } catch (err) {
      notification.error("network error");
      router.push("/");
      return [];
    }

    if (!res.ok) {
      notification.error(`Error ${res.status}`);
      router.push("/");
      return [];
    }

    const data = await res.json();
    console.log("🚀 ~ file: useUserRepos.ts ~ line 29 ~ useUserRepos ~ data", data)
    
    if (data.length === 0) {
      notification.error(`user "${username}" not found`);
      router.push("/");
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
