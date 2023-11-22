import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSec = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSec.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
