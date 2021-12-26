
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";


const Hero = ({ imgSrc, imgAlt, title, subtitle } ) => {
  return (
    <Grid
        component="section"
        container
        sx={{
          position: `relative`,
          height: "100vh",
          width: `100vw`,
          overflow: `hidden`,
          zIndex: -100,
          mb: 15,
          }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
        }}
      >
        <Grid
          container
          alignItems="center"
          
          

        ><Grid item xs="8">
            <Typography
              variant="h3"
              align="right"
              
              sx={{
                color: "common.white",
                fontWeight: 250,

              }}
            >
              {title}
            </Typography>
            </Grid>
            <Grid item xs="4">
            <Typography
            component="p"
            variant="h5"
    color='common.white'
    sx={{
      ml: 2,
      mr: 10,
    }}
  >
    {subtitle}
  </Typography>
  </Grid>
    <Grid item xs="12">
          <Typography
            component="p"
            variant="h5"
            gutterBottom
            color='common.white'
  
  >
    {subtitle}
  </Typography>
  </Grid>
  </Grid>
      </Grid>
      </Grid>
      


    


    
  );
}

export default Hero;