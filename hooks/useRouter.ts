import type { URL } from "types";

import getConfig from "next/config";
import { useRouter as useNextRouter } from "next/router";

export const useRouter = () => {
  const router = useNextRouter();
  const { publicRuntimeConfig } = getConfig();

  const navigate = (href: URL) => {
    router.push(`${publicRuntimeConfig.baseURL || ""}${href}`);
  };
  return { navigate, router };
};
