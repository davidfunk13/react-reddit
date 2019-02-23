import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core/';
import { Menu as MenuIcon, Lock as LockIcon, Save as SaveIcon, AccountBox as ProfileIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`

export default class Header extends Component {
    render() {
        const { classNames, classes, open, logout, auth, toggle } = this.props.store;
        return (
            <Fragment>
                <AppBar position={"fixed"} className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
                    <Toolbar>
                        {auth.isAuthenticated() ?
                            <div>
                                <IconButton onClick={() => toggle()} color="inherit" aria-label="Menu">
                                    <MenuIcon className={classes.MenuIcon} />
                                </IconButton>
                            </div>
                            :
                            <div>
                                <IconButton href={authorize}>
                                    <LockIcon />
                                </IconButton>
                            </div>
                        }
                        <Typography variant={'h6'} color="inherit">React + RedditApi</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="persistent" anchor="left" open={open} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
                    <div>
                        <IconButton onClick={() => toggle()}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => toggle()} component={Link} to={'/'} >
                            <SaveIcon />
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        {/* <ListItem button onClick={() => toggle()} component={Link} to={'/frontpage'} >
                            <SaveIcon />
                            <ListItemText primary={'Front Page'} />
                        </ListItem> */}
                        <ListItem button onClick={() => toggle()} component={Link} to={'/profile'} >
                            <ProfileIcon />
                            <ListItemText primary={'Profile'} />
                        </ListItem>
                        <ListItem button onClick={() => toggle()} component={Link} to={'/saved'} >
                            <SaveIcon />
                            <ListItemText primary={'Saved'} />
                        </ListItem>
                        <Divider />
                        <ListItem button >
                            <LockIcon />
                            <ListItemText onClick={() => { logout() }} primary={'Logout'} />
                        </ListItem>
                        <Divider />
                    </List>
                </Drawer>
            </Fragment>
        )
    }
};
