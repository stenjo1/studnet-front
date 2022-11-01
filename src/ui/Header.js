import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import logo from "../assets/logos/LogoSample_ByTailorBrands.jpg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "4.5em",
    },
  },
  logo: {
    height: "8em",
    width: "14em",
    objectFit: "cover",
  },
  logoContainer: {
    padding: 0,
    marginLeft: "6em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2rem",
    },
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    paddingBottom: 0,
    alignItems: "flex-end",
  },
  logoutButton: {
    ...theme.typography.logout,
    marginRight: "6em",
    marginLeft: "6em",
    height: "45px",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.white,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.black,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.common.green,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: "center",
    marginTop: "0.4em",
    marginLeft: "2em",
  },
  menuItem: {
    ...theme.typography.tab,
    textTransform: "uppercase",
    textAlign: "center",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.common.green,
      opacity: 1,
    },
  },
  expansion: {
    backgroundColor: theme.palette.common.white,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": { margin: 0, borderBottom: 0 },
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.secondary.light,
  },
  expansionSummary: {
    padding: "0 24px 0 16px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { activeTab, setActiveTab, option, setOption } = props;

  const changeHandler = (event, value) => {
    setActiveTab(value);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const mouseOverHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const clickOptionHandler = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setOption(index);
  };

  const routes = [
    { name: "Home", link: "/", index: 0 },
    { name: "Profile", link: "/profile", index: 1 },
    {
      name: "Studies",
      link: "/studies",
      index: 2,
      ariaOwns: anchorEl ? "studies-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => mouseOverHandler(event),
    },
    { name: "Finances", link: "/finances", index: 3 },
    { name: "Support", link: "/support", index: 4 },
  ];

  const options = [
    { name: "Studies", link: "/studies", optionIndex: 0, index: 2 },
    { name: "Exams", link: "/exams", optionIndex: 1, index: 2 },
    { name: "Subjects", link: "/subjects", optionIndex: 2, index: 2 },
  ];

  useEffect(() => {
    [...options, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (activeTab !== route.index) {
            setActiveTab(route.index);
            if (route.optionIndex && route.optionIndex !== option) {
              setOption(route.optionIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [activeTab, option, options, routes, setActiveTab, setOption]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={activeTab}
        onChange={changeHandler}
        className={classes.tabs}
        indicatorColor="secondary"
      >
        {routes.map((route) => (
          <Tab
            key={`${route}${route.index}`}
            component={Link}
            to={route.link}
            label={route.name}
            className={classes.tab}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button variant="contained" className={classes.logoutButton}>
        Logout
      </Button>
      <Menu
        id="studies-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={closeMenuHandler}
        MenuListProps={{ onMouseLeave: closeMenuHandler }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
        getContentAnchorEl={null}
      >
        {options.map((opt, optIndex) => (
          <MenuItem
            key={`${opt}${optIndex}`}
            component={Link}
            to={opt.link}
            onClick={(event) => {
              clickOptionHandler(event, optIndex);
              setActiveTab(2);
              closeMenuHandler();
            }}
            selected={optIndex === option && activeTab === 2}
            classes={{
              root: classes.menuItem,
            }}
          >
            {opt.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        open={openDrawer}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) =>
            route.name === "Studies" ? (
              <ExpansionPanel
                key={route.name}
                classes={{ root: classes.expansion }}
                elevation={0}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  classes={{ root: classes.expansionSummary }}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    onClick={() => {
                      setOpenDrawer(false);
                      setActiveTab(route.index);
                    }}
                  >
                    <NavLink
                      to={route.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {route.name}
                    </NavLink>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  classes={{ root: classes.expansionDetails }}
                >
                  <Grid container direction="column">
                    {options.map((opt) =>
                      opt.name !== "Studies" ? (
                        <ListItem
                          key={`${opt.name}${opt.optionIndex}`}
                          divider
                          button
                          component={Link}
                          to={opt.link}
                          onClick={() => {
                            setOpenDrawer(false);
                            setOption(opt.optionIndex);
                          }}
                          selected={
                            option === opt.optionIndex &&
                            activeTab === 2 &&
                            window.location.pathname !== "/studies"
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                            style={{ paddingLeft: "20px" }}
                          >
                            {opt.name}
                          </ListItemText>
                        </ListItem>
                      ) : undefined
                    )}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                divider
                button
                key={`${route}${route.index}`}
                component={Link}
                to={route.link}
                onClick={() => {
                  setOpenDrawer(false);
                  setActiveTab(route.index);
                }}
                selected={activeTab === route.index}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => {
          setOpenDrawer((prevState) => !prevState);
        }}
      >
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setActiveTab(0)}
              className={classes.logoContainer}
              color="secondary"
              disableRipple
            >
              <img src={logo} alt="app logo" className={classes.logo} />
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
