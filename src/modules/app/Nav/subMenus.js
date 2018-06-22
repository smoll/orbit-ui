const subMenus = {
  teams: [
    {
      to: '/teams',
      text: 'Teams',
    },
    {
      to: '/account',
      text: 'Account Settings',
    },
  ],
  team: [
    {
      to: '/deployments',
      text: 'Deployments',
    },
    {
      to: '/users',
      text: 'Users',
    },
    {
      to: '/settings',
      text: 'Team Settings',
    },
  ],
  user: [
    {
      to: '/users',
      text: 'Users',
      back: true,
    },
  ],
}

export default subMenus