import Hero from '@components/Hero'

import Container from "@mui/material/Container";

const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/hero-dark-code.jpg"
        imgAlt="out of focus and blurry text on a dark background"
        title="Hello"
        subtitle=" my name is Joseph"
        body="I'm an enthusiast developer &amp; underemployed individual"
      />
    </>

  );
};

export default Homepage;