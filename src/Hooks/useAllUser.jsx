import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      console.log(res);
      return res.data;
    },
  });

  return { users, loading, refetch };
};

export default useAllUser;
