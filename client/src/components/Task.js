import React from "react";
import {  MDBDataTable, MDBBtn, MDBInput,MDBContainer,MDBModal, MDBModalBody,MDBModalHeader, MDBModalFooter } from "mdbreact";
// import { ToastProvider, useToasts } from 'react-toast-notifications';
import GlobalSetting from './GlobalSetting';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

class Task extends React.Component {
    closeAfter15 = () => toast("YOLO", { autoClose: 15000 });
    state = {
        columns: [
            {
                field: 'id',
                label: 'No'
            },
            {
                field: 'name',
                label: 'Name'
            },
            {
                field: 'email',
                label: 'Email'
            },
            {
                field: 'edit',
                label: 'Edit'
            },
            {
                field: 'delete',
                label: 'Delete'
            }
        ],
        rows: [],
        input: '',
        modal: false
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {

        let uri = GlobalSetting.url + `userlists/`;
        fetch(uri, {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.usertoken}`}
        })
            .then(res => res.json())
            .then(json => {
                let rows = [];
                json.forEach(item => rows.push({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    delete: <MDBBtn color="info"  onClick={() => this.deleteMovie(item.id)}>X</MDBBtn>,
                    edit: <MDBBtn color="info" onClick={() => this.editMovie(item.id)}>Edit</MDBBtn>,

                }));

                this.setState({ rows });
            })
            .catch(err => console.error(err));
    }

    addMovie = () => {
        fetch("https://man-movies-api.herokuapp.com/movies", {
            method: "POST",
            body: JSON.stringify({
                title: this.state.input
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) this.getMovies();
            })
            .catch(err => console.error(err));
    }

    updateInput = (value) => this.setState({ input: value });

    deleteMovie = (id) => {
       // const { addToast } = useToasts()
        let uri = GlobalSetting.url + `user/delete/`;
        fetch(uri+`${id}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.usertoken}`}
        })
            .then(res => {

                if (res.ok)
                {
                    // const notify = () => toast("Wow so easy !");
                    // toast.success("Success Notification !", {
                    //     position: toast.POSITION.TOP_CENTER
                    // });
                    this.getMovies();
                }

            })
            .catch(err => console.error(err));
    }

    render() {


        return (

            <>
                <MDBBtn onClick={this.toggle} style={{float: 'right', marginTop:'20px'}} color="info">Add Task</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput  icon="user" />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={{ columns: this.state.columns, rows: this.state.rows }}
                />

            </>


        );



    }
};

export default Task;
