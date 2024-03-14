import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/products`, {
        params: { limit: 10 },
      });
      return data.products;
    },
  });
}
