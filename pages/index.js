import Hero from '@components/Hero';
import SectionAbout from "@components/SectionAbout";
import SectionProjects from "@components/SectionProjects";


const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/hero-dark-code.jpg"
        imgAlt="out of focus and blurry text on a dark background"
        title="#homeDeveloped"
        subtitle="Hobbyist | Developer | Underemployed"
      />
      <SectionAbout />
      <SectionProjects />
    </>

  );
};

export default Homepage;