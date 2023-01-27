import React from 'react'
import { connect } from 'react-redux'

export const Foods = (props) => {
    return (
        <div>Foods</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Foods)