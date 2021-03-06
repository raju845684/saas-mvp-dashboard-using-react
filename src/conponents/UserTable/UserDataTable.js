import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa"
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} status - get Status color
 * @returns Switch case
 */
const getStatusColor = (status) => {
    switch (status) {
        case 'Idle': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Idle</Badge></div>
        }
        case 'Pending': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark">Pending</Badge></div>
        }
        case 'Blocked': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="danger">Blocked</Badge></div>
        }
        case 'Active': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="white">Active</Badge></div>
        }
        default: {
            return <></>
        }
    }
}

/**
 * 
 * @param {string} items - Returns Name, Gender, city, street, state, country,  
 * @returns (
 *  <Table>
 *  </Table>
 * )
 */
const UserDataTable = ({ items }) => {
    return (
        <tr key={items.id}>
            <td style={{ fontWeight: 700 }}><img src={items.avatar} alt="" /> {items.first_name} {items.last_name}</td>
            <td>{items.first_name}</td>
            <td>{items.gender}</td>
            <td>{items.address.city}</td>
            <td>{items.address.street_name}</td>
            <td>{items.address.state}</td>
            <td>{items.address.country}</td>
            <td style={{ textAlign: 'center' }}>{items.subscription.plan}</td>
            <td style={{ textAlign: 'center' }}>
                {getStatusColor(items.subscription.status)}
            </td>
            <td style={{ textAlign: 'center' }}>
                <Link className="view_detils"
                    to={`/user-table/${items.id}`} style={{ color: '#41179d' }}><FaEye style={{ fontSize: 18 }} /></Link>
            </td>
        </tr >
    )
}

UserDataTable.propTypes = {
    /**
     *  An object taking on a particular shape
     */
    items: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        gender: PropTypes.string,

        address: PropTypes.shape({
            city: PropTypes.string,
            street_name: PropTypes.string,
            state: PropTypes.string,
            country: PropTypes.string,
        }),
        subscription: PropTypes.shape({
            plan: PropTypes.any,
            status: PropTypes.oneOf(["Idle", "Blocked", "Active", "Pending",]),
        })
    })
}
export default UserDataTable

