import { FC, useEffect } from "react";
import { CartItem } from "./CartItem";
import { ICartItem, IProduct } from "../model/types";
import { observer } from "mobx-react-lite";
import { useStores } from "../lib/context/root-store-context";
import { Grid, Stack } from "@mui/material";

type CartProps = { products: IProduct[] };

export const CartList: FC<CartProps> = observer(({ products }) => {
  const { cart } = useStores();

  useEffect(() => {
    cart.setProduct(products);
  }, []);

  return (
    <Grid container spacing={2} columns={4}>
      <Grid item xs={3}>
        <Stack spacing={2}>
          {cart.products.map((product: ICartItem, index: number) => (
            <CartItem product={product} index={index} key={product.id} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={1}>
        Итого:{cart.totalResult} руб.
      </Grid>
    </Grid>
  );
});
