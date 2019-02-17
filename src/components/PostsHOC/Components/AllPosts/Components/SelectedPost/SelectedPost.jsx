import React, { Component } from 'react';
import thumb from '../../../../assets/img/thumb.png'
import { Reddit } from '../../../../../../utils/Reddit';

export default class SelectedPost extends Component {
  componentDidMount(){
      console.log(this.props)
  }
    render() {
        const { classes } = this.props.store;
        return (
            <div>
                <div className={classes.modalText}>
                {/* {Reddit.postModalConversion(this.props.postData.post)} */}
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}