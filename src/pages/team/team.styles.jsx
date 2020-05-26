import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  margin-bottom: 2%;
  height: 60px;
  width: 550px;
  color: #9da4af;
  font-size: 19px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavbarLinks = styled.a`
  text-decoration: none;
  color: #9da4af;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // margin: "50px 0"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontWeight: "bold",
    fontSize: "52px",
    color: "#fff"
  },
  paragraph: {
    color: "#fff",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  imageBackground: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: theme.spacing(20),
    background: "#2E3138"
  },
  name: {
    color: "#fff"
  },
  position: {
    color: "#2E3138"
  },
  buttonArrow: {
    width: "42px",
    minWidth: "42px",
    float: "right",
    marginTop: "5px;",
    [theme.breakpoints.up("xs")]: {
      float: "unset",
      marginTop: "0px",
      width: "100%"
    }
  },
  buttonText: {
    paddingRight: "7px",
    [theme.breakpoints.down("xs")]: {
      display: "inline !important"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
}));
