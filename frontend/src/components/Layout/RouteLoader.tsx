"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

import NProgress from "nprogress";

const progress = NProgress.configure({ showSpinner: false });

function RouteLoader() {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => progress.start());
    router.events.on("routeChangeComplete", () => progress.done());
    router.events.on("routeChangeError", () => progress.done());
  }, []);
  return <></>;
}

export default RouteLoader;
