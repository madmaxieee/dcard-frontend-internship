import { useEffect, useState } from "react";
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

  const fetchData: () => Promise<any> = async () => {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${reponame}`
    );

    const data = await res.json();

    setRepoInfo({
      full_name: data.full_name,
      description: data?.description ?? "this repository has no description",
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
