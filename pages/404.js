import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/page/404");
  }, [router]);

  return null;
};

export default NotFound;