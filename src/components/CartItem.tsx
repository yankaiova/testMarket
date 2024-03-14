import { FC } from "react";
import { ICartItem } from "../model/types";
import { observer } from "mobx-react-lite";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStores } from "../lib/context/root-store-context";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

type ProductItem = {
  product: ICartItem;
  index: number;
};

export const CartItem: FC<ProductItem> = observer(({ product, index }) => {
  const { cart } = useStores();

  return (
    <Card>
      <Stack direction="row" alignItems="start" justifyContent="space-between">
        <CardMedia
          component="img"
          sx={{ height: 150, width: 150 }}
          image={product.thumbnail}
        />
        <CardContent>
          <Typography variant="h6" component="div" textAlign="center">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => cart.incrementQuantity(index)}
            disabled={product.quantity === 10}
          >
            +
          </Button>
          <span>{product.quantity}</span>
          <Button
            variant="outlined"
            disabled={product.quantity === 1}
            onClick={() => cart.decrementQuantity(index)}
          >
            -
          </Button>
        </CardActions>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <CardActions>
          {" "}
          <Button onClick={() => cart.removeProduct(product.id, index)}>
            {" "}
            <DeleteIcon />
          </Button>
        </CardActions>
        <CardContent>
          <Typography variant="body2" textAlign="end">
            {product.price * product.quantity} руб.
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
});
