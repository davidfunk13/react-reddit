import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class Link extends Component {
    render() {
        return (
            <div>
                <Typography style={{marginBottom: '1rem'}} variant={'h6'} align={'center'}>
                    External Link Will Open in New Tab:
                </Typography>
                <Paper style={{ padding: '1rem' }} elevation={4}>
                    <Typography align={'center'} gutterBottom>
                        {this.props.title}
                    </Typography>
                </Paper>
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                    <Grid item>
                            <Button style={{margin:'1rem 0 1rem 0'}} variant={'contained'} color={"default"}>
                                <a href={this.props.url} style={{textDecoration:'none', color: 'black'}} target="_blank" rel="noopener noreferrer">Click Here</a>
                            </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}