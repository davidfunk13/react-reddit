import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core/';
import { Menu as MenuIcon, Lock as LockIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons/';
import {headerStyles} from '../../../utils/materialUIStyles/index';
import classNames from "classnames";
let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`


class Header extends Component {

    state = {
        open: false
    };
    componentDidMount(){
        console.log(this.props)
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    logout = () => {
        if (this.state.open === true) {
            this.setState({ open: false })
            this.props.auth.logout()
        }
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (

            <Fragment>
                <AppBar position={"fixed"} className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
                    <Toolbar>
                        {this.props.auth.isAuthenticated() ?
                            <IconButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                                <MenuIcon className={classes.MenuIcon} />
                            </IconButton>
                            :
                            <IconButton href={authorize}>
                                <LockIcon />
                            </IconButton>
                        }
                        <Typography variant={'h6'} color="inherit">React + RedditApi</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div >
                        <IconButton onClick={this.toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button >
                            {/* <ListItemIcon> */}
                            <LockIcon />
                            {/* </ListItemIcon> */}
                            <ListItemText onClick={() => this.logout()} primary={'Logout'} />
                        </ListItem>
                    </List>
                </Drawer>
            </Fragment>
        )
    }

};

export default withStyles(headerStyles)(Header);
