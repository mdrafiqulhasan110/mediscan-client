import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: tests = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/test");
      return res.data;
    },
  });

  return { tests, loading, refetch };
};

export default useAllTest;
