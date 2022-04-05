import type { NextPage } from "next";

import { useRouter } from "next/router";

import { Header } from "components";

const UserReposPage: NextPage = () => {
  const router = useRouter();
  const { username: queriedUsername } = router.query;

  return (
    <>
      <Header />
      <p>username: {queriedUsername}</p>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  const config = require("../../../../config/index.ts");
  return {
    paths: [{ params: { username: config.username } }],
    fallback: false,
  };
};

export default UserReposPage;
