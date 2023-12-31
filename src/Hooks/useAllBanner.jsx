import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBanner = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: banners = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner");
      console.log(res);
      return res.data;
    },
  });

  return { banners, loading, refetch };
};

export default useAllBanner;
