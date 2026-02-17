import { Container, Typography } from "@mui/material";

export default function Precios() {
  return (
    <Container sx={{ mt: 15, mb: 10, flex: 1 }}>
      <Typography variant="h2" fontWeight={800} gutterBottom>
        Precios
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Esta página está en construcción. Pronto encontrarás nuestros planes y
        tarifas.
      </Typography>
    </Container>
  );
}
