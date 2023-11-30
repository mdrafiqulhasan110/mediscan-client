import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: userinfo = {},
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["userinfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      console.log(res);
      return res.data;
    },
  });

  return { userinfo, loading, refetch };
};

export default useUserInfo;
