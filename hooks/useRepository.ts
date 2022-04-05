import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { notification } from "utils";

import { RepoInfo } from "types";

export const useRepository = (username: string, reponame: string) => {
  const [repoInfo, setRepoInfo] = useState<RepoInfo>({
    name: "",
    full_name: "",
    description: "",
    stargazers_count: 0,
    html_url: "",
    visibility: "",
  });

  const router = useRouter();

  const fetchData: () => Promise<any> = async () => {
    let res: Response;
    try {
      res = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
    } catch (err) {
      notification.error("network error");
      router.push("/");
      return;
    }

    if (!res.ok) {
      notification.error(`Error ${res.status}`);
      router.push("/");
      return;
    }

    const data = await res.json();

    if (data.message === "Not Found") {
      notification.error(`repo "${username}/${reponame}" not found`);
      router.push("/");
      return;
    }

    setRepoInfo({
      full_name: data.full_name,
      description: data?.description ?? "(this repository has no description)",
      stargazers_count: data.stargazers_count,
      html_url: data.html_url,
      visibility: data.visibility,
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { repoInfo };
};
