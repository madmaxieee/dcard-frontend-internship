import type { NextPage } from "next";

import { useRouter } from "next/router";
import { Header } from "components";

const RepoPage: NextPage = () => {
  const router = useRouter();
  const { username, repo } = router.query;

  return (
    <>
      <Header />
      <p>username: {username}</p>
      <p>repo: {repo}</p>
    </>
  );
};

export default RepoPage;
