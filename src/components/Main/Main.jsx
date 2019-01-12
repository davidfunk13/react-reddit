
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Tabs, Tab, TabContainer, Typography, Button, Paper } from '@material-ui/core/';
import { Profile, Saved } from '../index';



export default class Main extends Component {
    // state = {
    //     value: 'one',
    // };
    // handleChange = (event, value) => {
    //     this.setState({ value });
    //   };
    render() {
        // const { value } = this.state;
        return (
            <div style={{marginTop: '20rem'}}>
                <p>HERRO</p>
                {/* <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab value="one" label="Profile" />
                    <Tab value="two" label="Saved" />
                </Tabs>
                {value === 'one' && <Profile user={this.props.user} />}
                {value === 'two' && <Saved user={this.props.user} />} */}
                {/* <Button component={Link} to={"/profile"}  variant="contained" color={'default'}  >Profile</Button> */}
                {/* <Button component={Link} to={"/saved"} variant="contained" color={'default'} >Saved</Button> */}
            </div>
        );
    }
}
