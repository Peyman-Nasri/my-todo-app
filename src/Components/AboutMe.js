import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        I am a self-motivated, collaborative and decisive front-end developer
        with a passion for programming, I am enthusiastic to learn new
        technologies and enjoy taking apart and reassembling just about
        anything.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const AboutMe = () => {
  return (
    <Box sx={{ width: "50%", margin: "5em 23em" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default AboutMe;
