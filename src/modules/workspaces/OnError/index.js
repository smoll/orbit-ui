import React from 'react'
import PropTypes from 'prop-types'
import { SetData, Redirect } from 'instruments'

const OnError = ({ setData }) => {
  setData.workspaceId(null)
  return <Redirect to="/" />
}

OnError.propTypes = {
  setData: PropTypes.object,
}

export default SetData(OnError, { workspaceId: true })
