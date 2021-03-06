import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tabs, Tab, Table } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import users from '../../data/userTableListData.json'
import { FaArrowLeft, FaIdCard, FaPhoneAlt, FaBirthdayCake, FaTransgender, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

/**
 * Component for showing details of the user
 */
const UserDetils = ({ match }) => {
    let history = useHistory()
    let ourData = users
    const [items, setItems] = useState({
        employment: {},
        address: {},
        subscription: {}
    })
    // SET ITEM 
    useEffect(() => {
        let OurSetData = ourData.find((item) => {
            let ourRowID = parseInt(match.params.id)
            return item.id === ourRowID
        })
        setItems(OurSetData)
    }, [ourData, match])

    // HANDEL GO BACK
    const goBack = () => {
        history.goBack()
    }

    return (
        <div className="rm-body user_detils">
            <Container fluid style={{ padding: '0 30px', }}>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="backt_restorant m-0 p-0">
                        <Link to={''} onClick={goBack}> <FaArrowLeft /> Back to User</Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '0 30px' }}>
                <Row className="user_profile_row">

                    <Col lg={4} md={4}>
                        <div className="rm-detils-profile">
                            <div className="profile_pic">
                                <img src={items.avatar} alt={items.avatar || "Profile Photo"} />
                            </div>
                            <div className="user_name">
                                <h4>{items.first_name || "First Name"} {items.last_name || "Last Name"}</h4>
                                <ul>
                                    <li><FaIdCard /> Employee ID: <strong>{items.id || "Employee ID"}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="rm-detils-profile">
                            <div className="user_name">
                                <ul>
                                    <li><FaPhoneAlt /> Phone Number: <strong>{items.phone_number}</strong></li>
                                    <li><FaBirthdayCake /> Date of Birth: <strong>{items.date_of_birth}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>

                    </Col>
                </Row>
                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 rm_use_detils_tab">
                    <Tab eventKey="about" title="About">
                        <Row>
                            <Col lg={4} md={4} sm={4} className="left col-md-4 col-md-4">
                                <div className="personal_detils">
                                    <h5>Personal Information</h5>
                                    <ul>
                                        <li>
                                            <FaBirthdayCake />
                                            <h6>Date of Birth</h6>
                                            <strong>{items.date_of_birth}</strong>
                                        </li>
                                        <li>
                                            <FaTransgender />
                                            <h6>Gender</h6>
                                            <strong>{items.gender}</strong>
                                        </li>
                                        <li>
                                            <FaPhoneAlt />
                                            <h6>Phone Number</h6>
                                            <strong>{items.phone_number}</strong>
                                        </li>
                                        <li>
                                            <FaEnvelope />
                                            <h6>Email Id</h6>
                                            <strong>{items.email}</strong>
                                        </li>
                                        <li>
                                            <FaMapMarkerAlt />
                                            <h6>Communication Location</h6>
                                            <strong>{items.address.city},
                                                {items.address.street_name},
                                                {items.address.street_address},
                                                {items.address.country},
                                                {items.address.zip_code}
                                            </strong>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                            <Col lg={8} md={8} sm={8} className="right col-md-4">
                                <div className="personal_detils">
                                    <Table style={{ boxShadow: 'none' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ border: 0, padding: 0, verticalAlign: 'middle' }}><span style={{ fontSize: '1.25rem', display: 'block', fontWeight: 500 }}>Usage Subscription</span></th>
                                                <th style={{ border: 0, textAlign: 'right', padding: 0 }}>
                                                    {(items.subscription.status === "Idle") ? <button className="btn " style={{ color: 'blue', borderColor: "blue" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Blocked") ? <button className="btn" style={{ color: 'red', borderColor: "red" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Active") ? <button className="btn" style={{ color: 'green', borderColor: "Green" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Pending") ? <button className="btn" style={{ color: 'orange', borderColor: "orange" }}>{items.subscription.status}</button> : null}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </Table>

                                    <p><strong>What is Lorem Ipsum?</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Why do we use it?
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </Col>
                        </Row>


                    </Tab>
                    <Tab eventKey="application" title="Application">
                        No Data !
                    </Tab>
                    <Tab eventKey="teams" title="Teams">
                        No Data !
                    </Tab>
                    <Tab eventKey="connection" title="Connection">
                        No Data !
                    </Tab>
                </Tabs>
            </Container>

        </div>
    )
}

export default UserDetils
