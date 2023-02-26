import React from 'react'
import { connect } from 'react-redux'
import AdminSidebar from '../../../layout/admin-sidebar'

export const Dashboard = (props) => {
    return (
        <div>
            {/* <AdminSidebar/> */}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)