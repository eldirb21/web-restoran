import React from 'react'
import { connect } from 'react-redux'

export const Orders = (props) => {
    return (
        <div>Orders</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)