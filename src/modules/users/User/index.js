import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class User extends React.Component {
  menu = {
    home: '/users',
  }

  render() {
    const { match, location } = this.props
    const id = decodeURIComponent(match.params.id)
    console.log(id)
    this.menu.level2 = {
      text: id,
      to: location.pathname,
    }
    this.menu.subMenu = [
      {
        text: 'Configure Access',
        to: match.url + '/configure',
      },
    ]

    const vars = {
      username: id,
    }
    return <Module title="Configure Access" menu={this.menu} vars={vars} />
  }
}

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default User
