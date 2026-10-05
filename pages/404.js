import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/page/404");
  }, [router]);

  return null;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default NotFound;
