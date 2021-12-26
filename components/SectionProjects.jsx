import Container from "@mui/material/Container";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const images = [
  {
  image: "/300x200.png",
  alt: "image1 alt",
  title: "image1 title"
  },
  {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
  },
  {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
    },
    {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
    },
    {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
    },
    {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
    },
    {
    image: "/300x200.png",
    alt: "image1 alt",
    title: "image1 title"
    },
];

const SectionProjects = () => {
  
  return(
    <Container>
      <Carousel
          responsive={responsive}
          
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={''}
          
        >
          {images.map((imgs) => {
            return (
              <Image
                key={imgs.image}
                src={imgs.image}
                alt={imgs.alt}
                layout="responsive"
                width={800}
                height={600}
              />
            );
          })}
        </Carousel>

        </Container>
  );
};

export default SectionProjects