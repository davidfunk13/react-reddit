import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Self extends Component {    
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                        <Typography>
                            Self goes here
                        </Typography>
                    <Grid item>
                        <Typography gutterBottom alt={''} align={"center"} >
                            Title
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}