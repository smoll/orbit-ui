import React from 'react'
import PropTypes from 'prop-types'
import { GetData, Header } from 'instruments'
import Data from '../../workspaces/Data'
import Self from '../../self/Data'
import subMenus from './subMenus'

import { getProfile } from 'modules/users/Data/helpers'

const Nav = ({ getData, workspaces, self, menu }) => {
  const workspaceId = getData.workspaceId
  if (!workspaces) return null
  const workspace = workspaces.find(workspace => workspace.id === workspaceId)

  const profile = {
    ...getProfile(self.user),
    platform: self.isAdmin,
  }

  const level1 = {
    selected: {
      to: menu.home, //default?
      id: workspaceId,
      text: workspace ? workspace.label : profile.name,
    },
    list: workspaces,
    addNew: {
      to: '/workspaces/new',
      text: 'New Workspace',
    },
  }
  let subMenu = menu.subMenu || subMenus[menu.nav]
  if (!self.isAdmin && subMenu)
    subMenu = subMenu.filter(m => !m.permissions || !m.permissions.isAdmin)

  return (
    <Header
      level1={level1}
      level2={menu.level2}
      subMenu={subMenu}
      profile={profile}
    />
  )
}

Nav.propTypes = {
  getData: PropTypes.object,
  workspaces: PropTypes.array,
  self: PropTypes.object,
  menu: PropTypes.object,
}

export default GetData(Self(Data(Nav)), { workspaceId: true })
