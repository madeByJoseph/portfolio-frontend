import { Container, Grid } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const SectionAbout = () => {
  return (
    <>
      <Grid container spacing={10}>
        <Grid 
          item
          xs={12}
          sm={5}
          sx={{
            
          }}
        >
          <Image
            src="/about-home.jpg"
            alt="A Developer developing"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid 
          item
          xs={12}
          sm={7}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            mt:10
          }}

        >
        <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
          A part-time developer
        </Typography>
        <Typography textAlign="center">
            {`I am a hobbyist developer with a broad range of interests. 
            Pretty much anything python related is always cool. I also dabble in 
             2D game development and recently nodejs, with other projects popping up occasionally as things catch my attention.
             Check out the about page for more!`}
          </Typography>
          <Grid
            item
            
            sx={{
              mt:5
            }}
          >
          <MuiNextLink href="/about">
            <Button variant="outlined" size="large">
              About
            </Button>
          </MuiNextLink>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionAbout;
