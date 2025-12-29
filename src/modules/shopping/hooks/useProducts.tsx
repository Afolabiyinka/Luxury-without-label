import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/request";
export const useProducts = () => {
  const {
    isLoading: loading,
    data: products,
    error,
    refetch,
  } = useQuery({
    queryFn: () => getProducts(),
    queryKey: ["products"],
  });
  return { loading, error, products: products ?? [], refetch };
};
