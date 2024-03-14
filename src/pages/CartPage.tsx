import { FC } from "react";
import { CartList } from "../components/CartList";
import { Container } from "@mui/material";
import { useProducts } from "../lib/useQueryProducts";

export const CartPage: FC = () => {
  const { data, isSuccess, isLoading, isError, error } = useProducts();
  return (
    <Container>
      {isLoading && <div>Loading..</div>}
      {isSuccess && <CartList products={data} />}
      {isError && <div>{error.message}</div>}
    </Container>
  );
};
