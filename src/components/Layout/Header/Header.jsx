import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import styles from '../../../utils/materialUI';
let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`

class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position={"static"}>
                    <Toolbar>
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
            </Fragment>
        )
    }

};

export default Header;
