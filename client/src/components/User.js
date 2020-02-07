import React, { Component } from 'react';

import { MDBBtn,MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';

import axios from 'axios';
import GlobalSetting from './GlobalSetting';
// const url = 'http://10.0.28.126:90/api/userlists';
// const baseUrl = 'http://jsonplaceholder.typicode.com/posts';

const url=GlobalSetting.url + `userlists/`;


class User extends Component {

    constructor(props) {

        super(props);

        this.state= {

            users: [],

            isLoading:true,

            tableRows: [],

        };

    }




    componentWillMount=async() => {

        await axios.get(url, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })

            .then(response => response.data)

            .then(data => {

              //  console.log(data);

                // if (err) throw err;

                this.setState({ users: data })

            })

            .then(async() => {

                this.setState({ tableRows:this.assembleUsers(), isLoading:false })

                console.log(this.state.tableRows);

            });

    }




    assembleUsers= () => {

        let users =this.state.users.map((user) => {

            return (

                {

                    number: user.id,

                    name: user.name,

                    email: user.email,


                }

            )

        });

        return users;

    }





    render() {

        const data = {

            columns: [

                {

                    label:'No.',

                    field:'number',

                },

                {

                    label:'Name',

                    field:'name',

                },

                {

                    label:'Email',

                    field:'email',

                },
                {

                    label:'Action',

                    field:<MDBBtn color="purple" size="sm">Button</MDBBtn>,

                },



            ],

            rows:this.state.tableRows,

        }




        return (

            <Row className= "mb-4">

                <Col md="12">

                    <Card>

                        <CardBody>

                            <MDBDataTable

                                striped

                                bordered

                                hover

                                data={data}

                            />

                        </CardBody>

                    </Card>

                </Col>

            </Row>

        )

    }

}




export default User;
