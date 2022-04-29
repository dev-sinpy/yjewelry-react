import { Box, Button, Container, Drawer, List, Stack, Toolbar, Typography } from '@mui/material';
import useGlobalConfig from 'hooks/useGlobalConfig';

const CartDrawer = () => {
  const { isCartOpen: openCart, toggleCart } = useGlobalConfig();
  return (
    <Drawer
      anchor="right"
      open={openCart}
      // sx={{ width: '300px' }}
      onClose={() => {
        toggleCart(!openCart);
      }}
      PaperProps={{
        sx: { background: '#fcf4f0' },
      }}
    >
      <Toolbar />
      <Container className="h-full mt-8">
        <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
          <Typography variant="belweLight" className="text-4xl">
            your cart is empty
          </Typography>

          <img className="w-96 h-72" alt="Empty Cart" src="https://files.y.jewelry/assets/img/emptyCart.webp"></img>

          <Button className="w-2/4" disableElevation variant="contained" color="secondary">
            <Typography variant="apercu" align="center">
              Go Shopping
            </Typography>
          </Button>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default CartDrawer;
