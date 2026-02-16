import { Box } from "@mui/material";
import { IndustrySlider } from "@/sections/industries/IndustrySlider";
import { IndustryCards } from "@/sections/industries/IndustryCards";
import { IndustryTitle } from "@/sections/industries/IndustryTitle";
import { IndustryFooter } from "@/sections/industries/IndustryFooter";

export default function Industrias() {
  return (
    <Box component="main">
      <IndustryTitle />
      <IndustrySlider />
      <IndustryCards />
      <IndustryFooter />
    </Box>
  );
}
