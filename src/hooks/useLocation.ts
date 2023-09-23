import { useState, useEffect } from "react";

type KeyValue = {
  key: string;
  value: string;
};
type useLocationResult = {
  href: string,
  hash: string,
  params: KeyValue[],
  hostname: string,
  port: string,
  pathname: string,
  path: string[],
  protocol: string,
  set: (url: string) => void
}

export const loadURLDetails  = (valid: string[] = []) : useLocationResult => {
  let hash = window.location.hash;
  hash = hash.split("?")[0].replace("#", "");

  const myURL = new URL(window.location.href);
  if (window.location.hash) {
    myURL.search = window.location.hash.substr(
      window.location.hash.indexOf("?")
    );
  }
  const hrefparams: KeyValue[] = [];
  myURL.searchParams.forEach((value, key) => {
    if (!valid || valid.includes(key)) {
      hrefparams.push({ key, value });
    }
  });

  return {
    href: window.location.href,
    hash: hash,
    params: hrefparams,
    hostname: window.location.hostname,
    port: window.location.port,
    pathname: window.location.pathname,
    path: window.location.pathname.split(/\//).filter((x) => x !== ""),
    protocol: window.location.protocol,
    set: (url: string) => { console.log("set", url); }
  };
};

export const useLocation = (valid: string[] = []) => {
  const [details, setDetails] = useState(loadURLDetails(valid));
  const [validParams] = useState(valid);

  const popstate = () => {
    setDetails(loadURLDetails(validParams));
  }
  const locationchange = () => {
    setDetails(loadURLDetails(validParams));
  }

  useEffect(() => {
    window.addEventListener("popstate", popstate);
    window.addEventListener("locationchange", locationchange);
    return () => {
      window.removeEventListener("popstate", popstate);
      window.removeEventListener("locationchange", locationchange);
    }
  }, []);

  const set = (url: string) => {
    window.history.pushState(null, "", url);
    setDetails(loadURLDetails(validParams));
  };

  useEffect(() => {
    setDetails(loadURLDetails(validParams));
  }, [validParams]);

  return { details, set };
};

export default useLocation;
