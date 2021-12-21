import Hero from '@components/Hero'

import Container from "@mui/material/Container";

const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/hero-dark-code.jpg"
        imgAlt="out of focus and blurry text on a dark background"
        title="Hello,"
        subtitle="My name is Joseph Hall"
        body="I'm an enthusiast developer with varying interests"
      />
    </>

  );
};

export default Homepage;