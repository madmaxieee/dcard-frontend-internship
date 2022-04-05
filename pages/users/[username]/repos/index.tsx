import type { NextPage } from "next";

import { useRouter } from "next/router";
import { Header } from "components";


const UserReposPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Header />
      <p>username: {username}</p>
    </>
  );
};

export default UserReposPage;
