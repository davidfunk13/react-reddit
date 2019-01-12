import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, LeftNav, MenuItem, Drawer  } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../../../utils/materialUI';
let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`

class Header extends Component {
    state = {
        open: false
    };

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <Fragment>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant={'h6'} color="inherit">Poop</Typography>
                        {this.props.auth.isAuthenticated() ?
                            <Button style={styles.header.buttons} variant={"contained"} color={"secondary"} size={"large"} onClick={() => this.props.auth.logout()}>
                                Logout
                        </Button>
                            :
                            <Button style={styles.header.buttons} variant="contained" color={'default'} href={authorize}>Authorize Reddit</Button>
                        }
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent">
                        <p>POOP</p>
                </Drawer>
            </Fragment>
        )
    }

};

export default Header;
