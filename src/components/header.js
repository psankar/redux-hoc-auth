import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ChangeAuth} from '../actions/index';

class Header extends Component {

    authButton() {
        if (this.props.authenticated) {
            return <button onClick={() => this.props.ChangeAuth(false)}>Logout</button>;
        }
        return <button onClick={() => this.props.ChangeAuth(true)}>LogIn</button>;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={() => browserHistory.push('/public')}>Public</button>
                            </td>
                            <td>
                                <button onClick={() => browserHistory.push('/private')}>Private</button>
                            </td>
                            <td>
                                {this.authButton()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ChangeAuth: ChangeAuth}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);