import React, { useState, useRef } from 'react'
import UserDataTable from './UserDataTable'
import PaginationItem from '../ResturantGridList/PaginationItem'
import { Col, Container, Row, Table } from 'react-bootstrap'
import userData from '../../data/userTableListData.json'
import { FaSearch } from "react-icons/fa"

/**
 * Component for showing details of the user table
 * @returns 
 */
const UserTable = () => {
    let ourData = userData
    const [table, setTable] = useState(ourData)
    const [curentPage, setCurentPage] = useState(1)
    const searchInpur = useRef(null)
    const pageSize = 5
    // useEffect(() => {
    //     setInterval(() => {
    //         setTable(ourData)
    //     }, 0)
    // }, [])

    // GET CURENT PAGE
    const indexOfLastPage = curentPage * pageSize
    const indexOfFirstPage = indexOfLastPage - pageSize
    const curentPosts = table.slice(indexOfFirstPage, indexOfLastPage)
    let ourKeYID = indexOfFirstPage

    // PAGINATE 
    const paginate = (number) => {
        setCurentPage(number)
    }
    // SEARCH HANDEL
    const onSearchHandel = (event) => {
        const serchValue = searchInpur.current.value
        let ourActualdat = ourData.filter((itms) => {
            let fName = itms.first_name
            return (fName).toLowerCase().includes(serchValue.toLowerCase())
        })
        setTable(ourActualdat)
        setCurentPage(1)
    }

    return (
        <div className="rm-body rm-profile-table">
            <Container fluid >
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', marginBottom: 0, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h4 className="rm_global_heading">Table List</h4>
                        </div>
                        <div className="search_bar">
                            <input type="text"
                                ref={searchInpur}
                                placeholder="Search By Name"
                                className="form-control"
                                style={{ width: 300 }}
                                onChange={onSearchHandel}
                            />
                            <FaSearch />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Table striped bordered hover size="sm">
                            <thead style={{ backgroundColor: '#c1c1c1' }}>
                                <tr>

                                    <th rowSpan="2" style={{ width: 300 }}>Full Name</th>
                                    <th rowSpan="2" style={{ width: 100 }}>Gender</th>
                                    <th rowSpan="2" style={{ width: 100 }}>DOB</th>
                                    <th colSpan="4" style={{ width: 200, textAlign: 'center' }}>Address</th>
                                    <th colSpan="2" style={{ width: 160, textAlign: 'center' }}>Subscription </th>
                                    <th rowSpan="2" style={{ textAlign: 'center', width: 100 }}>Action</th>
                                </tr>
                                <tr>
                                    <th style={{ width: 110 }}>City</th>
                                    <th style={{ width: 130 }}>Street</th>
                                    <th style={{ width: 120 }}>State</th>
                                    <th style={{ width: 140 }}>Country</th>
                                    <th style={{ textAlign: 'center', width: 100 }}>Plan</th>
                                    <th style={{ textAlign: 'center', width: 100 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    curentPosts.length > 0 ? curentPosts.map((items, id) => {
                                        ourKeYID++;
                                        return (
                                            <UserDataTable items={items} key={id} ourKeYID={ourKeYID} />
                                        )
                                    }) : <tr><td colSpan="10" style={{ textAlign: 'center', padding: '15px', fontWeight: 700 }}>....No Data! <span style={{ color: 'red' }}>{searchInpur.current.value}</span></td></tr>
                                }
                            </tbody>
                        </Table>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                Page <strong>{curentPage}</strong> - <strong>{Math.ceil(table.length / pageSize)}</strong> of <strong>{table.length}</strong> Result
                            </div>
                            <div lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', marginBottom: 0, justifyContent: 'flex-end' }}>
                                <PaginationItem
                                    pageSize={pageSize}
                                    totalPost={table.length}
                                    paginate={paginate}
                                    data={table}
                                    curentPage={curentPage}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserTable
