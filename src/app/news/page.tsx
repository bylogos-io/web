import { Container, Typography } from "@mui/material";

export default function News() {
  return (
    <Container sx={{ mt: 15, mb: 10, flex: 1 }}>
      <Typography variant="h2" fontWeight={800} gutterBottom>
        News
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Esta página está en construcción. Pronto encontrarás las últimas
        noticias y actualizaciones.
      </Typography>
    </Container>
  );
}
