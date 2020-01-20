import React, { Component } from 'react';
import { connect } from 'react-redux';

class View extends Component {
    render() {
        return (
            <>
                <h3> Details</h3>
                <p>
                    Name:{this.props.data.first_name} {this.props.data.middle_name} {this.props.data.last_name}
                </p>
                <p>
                    Email : {this.props.data.email}
                </p>
            </>

        );
    }

}

const mapStateToProps = (state) => {
    const { FormReducer } = state;
    return {
        data: FormReducer
    }
}

export default connect(mapStateToProps)(View);