import { CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <Container>
        <CardContent>
          <Typography variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am a self-motivated, collaborative and decisive front-end
            developer with a passion for programming, I am enthusiastic to learn
            new technologies and enjoy taking apart and reassembling just about
            anything.
          </Typography>
        </CardContent>
      </Container>
    </>
  );
};

export default Homepage;
