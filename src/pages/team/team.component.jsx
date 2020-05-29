import React from "react";

import MusicLogo from "../../assets/sounddrip.svg";

import { useStyles, HomepageNavbar, NavbarLinks } from "./team.styles";

import { Grid, Typography, Container } from "@material-ui/core";

// import MobileNav from "../../components/navigation-bar/mobile-nav/mobile-nav.component";
import Footer from "../../components/footer/footer.component";

import { teamInfo } from "./teamInfo";
import TeamCard from "../../components/team-card/team-card.component";

const Team = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="mobileNavWrap">{/* <MobileNav position /> */}</div>
      <HomepageNavbar>
        <a href="/">
          <img src={MusicLogo} alt="Sound Drip Logo" />
        </a>
        <NavbarLinks href="/about">How it works?</NavbarLinks>
        <NavbarLinks href="/team">Team</NavbarLinks>
        <NavbarLinks href="https://github.com/Lambda-School-Labs/Music-Meteorologist-fe">
          Github
        </NavbarLinks>
      </HomepageNavbar>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid className="teamContainer" item xs={12} sm={4}>
            <Typography className={classes.heading}>Our Team</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.paragraph}>
              We're a team comprised of developers, designers and data
              scientist. Connect with us below, we're all open to job
              opportunities
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ padding: "80px 0" }} container spacing={5}>
          {teamInfo.map(({ image, name, position, linkedIn }, i) => (
            <TeamCard 
              key={i}
              image={image}
              name={name}
              position={position}
              linkedIn={linkedIn}
              classes={classes}
            ></TeamCard>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Team;
