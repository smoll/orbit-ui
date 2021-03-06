import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import { withRouter } from 'react-router-dom'
// add search

class DeploymentLogs extends React.Component {
  timeout = null
  setStart = this.setStart.bind(this)
  state = {
    search: '',
    start: null,
    since: 10,
    type: 'webserver',
  }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Logs',
    call: search => this.setState({ search }),
  }
  componentWillMount() {
    this.getType()

    const date = new Date()
    date.setMinutes(date.getMinutes() - 10)
    this.setState({ start: date })
  }
  getType() {
    const { location } = this.props
    const type = location.hash ? location.hash.slice(1) : 'webserver'
    this.setState({ type })
  }
  setStart(start) {
    let date = new Date()

    if (typeof start === 'number') {
      date.setMinutes(date.getMinutes() - start)
    } else if (start === 'today') date.setHours(0, 0, 0, 0)
    else if (start === 'all') date = null
    this.setState({ start: date, since: start })
  }

  render() {
    const { search, start, since, type } = this.state
    return (
      <List
        search={{
          text: search,
          ...this.search,
        }}
        since={{
          set: this.setStart,
          get: start,
          since,
        }}
        type={type}
      />
    )
  }
}

DeploymentLogs.propTypes = {
  location: PropTypes.object,
}

export default withRouter(DeploymentLogs)
