import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={() => browserHistory.push('/public') }>Public</button>
                        </td>
                        <td>
                            <button onClick={() => browserHistory.push('/private') }>Private</button>
                        </td>
                        <td>
                            <button>Login</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Header;