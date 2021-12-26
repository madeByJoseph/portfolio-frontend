import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import DownloadingIcon from '@mui/icons-material/Downloading';
import Fab from "@mui/material/Fab";



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
          mb: 5,
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
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            sx={{
              color: "secondary.main",
              fontWeight: 250,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="h3"
            gutterBottom
            color="common.white"
            sx={{
              mt:5,
            }}
          >
            {subtitle}
          </Typography>
        </Grid>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Fab
              justify="center"
              aria-label="scroll down"
              sx={{
                position: "static",
                bottom: 50,
                mb: 10,
              }}
              style={{backgroundColor: "transparent"}}
            >
               <DownloadingIcon fontSize="large" color="secondary" />
            </Fab>
        </Grid>
       
            

      </Grid>

      
    </Grid>
  );
}

export default Hero;