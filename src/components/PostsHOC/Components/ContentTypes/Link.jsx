import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class Link extends Component {
    render() {
        return (
            <div>
                <Paper style={{padding: '1rem'}} elevation={4}>
                <Typography align={'center'} gutterBottom>
                    {this.props.title}
                </Typography>
                </Paper>
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                    <Grid item>
                        <Typography align={'center'}>
                            External Link Will Open in New Tab:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={'center'}>
                        <Button variant={'contained'} color={"default"}>
                            <a href={this.props.url} target="_blank" rel="noopener noreferrer">Click Here</a>
                        </Button>
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