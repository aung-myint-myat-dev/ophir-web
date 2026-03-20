import * as home from "./components";

import "./styles/home.page.css";

export default function HomePage() {
  return (
    <>
      <home.HomeSlider />
      <home.About />
      <home.Service />
      <home.Product />
      <home.Pricing />
      <home.Contact />
    </>
  );
}
