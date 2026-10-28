import { assets } from "../../constants"

const icon1 = assets.icon[0];
const icon2 = assets.icon[1];
const icon3 = assets.icon[2];
const icon4 = assets.icon[3];

export const SERVICES = [
  {
    img: icon2,
    title: "Mobile App Development",
    text: "High-performance Android & iOS apps with elegant UI/UX.",
  },
  {
    img: icon1,
    title: "Website Development",
    text: "Fast, modern, responsive & SEO-optimized websites.",
  },
  {
    img: icon3,
    title: "Ecommerce Development",
    text: "Secure online platforms with product & payment management.",
  },
  {
    img: icon4,
    title: "POS for Restaurant & Bar",
    text: "Simple and efficient POS system for managing daily operations.",
  },
]

export const DEVELOPMENT_PHASES = [
  { phase: "01", title: "Analysis", border: "border-primary", badgeBg: "bg-primary" },
  { phase: "02", title: "Proposal", border: "border-success", badgeBg: "bg-success" },
  { phase: "03", title: "Planning", border: "border-warning", badgeBg: "bg-warning" },
  { phase: "04", title: "Development", border: "border-info", badgeBg: "bg-info" },
  { phase: "05", title: "Testing", border: "border-danger", badgeBg: "bg-danger" },
  { phase: "06", title: "Support", border: "border-secondary", badgeBg: "bg-secondary" },
]