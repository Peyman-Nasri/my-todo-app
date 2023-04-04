import { CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <Container>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Container>
    </>
  );
};

export default Homepage;
