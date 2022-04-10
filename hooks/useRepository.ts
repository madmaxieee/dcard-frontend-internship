import { useEffect, useState } from "react";
import { useRouter } from "hooks";

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

  const { navigate } = useRouter();

  const fetchData: () => Promise<any> = async () => {
    let res: Response;
    try {
      res = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
    } catch (err) {
      notification.error("network error");
      navigate("/");
      return;
    }

    if (!res.ok) {
      notification.error(`Error ${res.status}`);
      navigate("/");
      return;
    }

    const data = await res.json();

    if (data.message === "Not Found") {
      notification.error(`repo "${username}/${reponame}" not found`);
      navigate("/");
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
