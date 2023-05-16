import { NextPage } from "next";
import { useRouter } from "next/router";

export const RedirectedPage: NextPage = () => {
  const router = useRouter();
  router.prefetch("/redirected");
  console.log("prefetching page");
  return <h1>Redirected from /about</h1>;
};

export default RedirectedPage;
