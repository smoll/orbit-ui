'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Avatar, MenuList, Item, Dropdown } from 'instruments'
import s from './styles.scss'

const ProfileMenu = ({ name, avatar, platform, className }) => {
  return (
    <Dropdown
      className={classnames(s.menu, className)}
      right
      selector={<Avatar url={avatar} title={name} className={s.profile} />}>
      <MenuList label={name}>
        <Item to="/profile">Personal Settings</Item>
        {platform && <Item to="/platform">Platform Settings</Item>}
        <Item to="/logout">Logout</Item>
      </MenuList>
    </Dropdown>
  )
}

ProfileMenu.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  platform: PropTypes.bool,
  className: PropTypes.string,
}

export default ProfileMenu
