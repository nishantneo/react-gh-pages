import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import GlobalSetting from './GlobalSetting';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();
        let uri = GlobalSetting.url + `/api/userlists/`;
        // axios.delete(uri);
        browserHistory.push('/profile');
    }
    render() {
        return (
            <tr>
                <td>
                    {/*{this.props.obj.id}*/}
                </td>
                <td>
                    {/*{this.props.obj.title}*/}
                </td>
                <td>
                    {/*{this.props.obj.body}*/}
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <Link className="btn btn-primary">Edit</Link>
                        <input type="submit" value="Delete" className="btn btn-danger"/>
                    </form>
                </td>
            </tr>
        );
    }
}


export default TableRow;
