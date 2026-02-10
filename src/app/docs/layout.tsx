import { DocsSidebar } from "@/sections/docs/DocsSidebar";
import { docs } from "@/velite";
import { Box } from "@mui/material";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* Sidebar */}
      <DocsSidebar docs={docs} />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, overflowY: "auto" }}>
          <Box sx={{ maxWidth: 800, mx: "auto" }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
