import React from "react";
import { Grid, Typography, Button, CardMedia } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const TeamCard = ({ image, name, position, linkedIn, classes }) => {
  return (
    <Grid item xs={6} sm={3}>
      <CardMedia component="img" image={image} />
      <Grid style={{ marginTop: "3px" }} container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.position}>{position}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            className={classes.buttonArrow}
            variant="contained"
            color="secondary"
            href={linkedIn}
          >
            <span className={classes.buttonText}>Contact</span>
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamCard;
