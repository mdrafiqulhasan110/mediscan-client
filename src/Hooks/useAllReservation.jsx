import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllReservation = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: reservations = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reservations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reservation");
      return res.data;
    },
  });

  return { reservations, loading, refetch };
};

export default useAllReservation;
