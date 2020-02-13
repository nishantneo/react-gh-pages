import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer  } from 'mdbreact';

const Shop = () => {
    return (
        <MDBContainer>
        <h1>React Shop</h1>

        <MDBCol>
            <MDBCard style={{ width: "12rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text .
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol>
            <MDBCard style={{ width: "12rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text .
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBContainer>
    )
}

export default Shop;
