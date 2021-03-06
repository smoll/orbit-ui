import gql from 'graphql-tag'
// import { permissions } from './permissions'

export const user = gql`
  fragment user on User {
    id: uuid
    emails {
      address
      verified
      primary
    }
    fullName
    profile {
      key
      value
      category
    }
    username
    status
    createdAt
    updatedAt
  }
`

export const group = gql`
  fragment group on Group {
    id: uuid
    label
    description
    custom
    active
    createdAt
    updatedAt
  }
`

export const workspace = gql`
  fragment workspace on Workspace {
    id: uuid
    label
    description
    active
    createdAt
    updatedAt
    deploymentCount
  }
`

export const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    description
    type
    releaseName
    version
    workspace {
      id: uuid
    }
    urls {
      type
      url
    }
    createdAt
    updatedAt
    config
    deployInfo {
      latest
      next
    }
  }
`
export const invite = gql`
  fragment invite on Invite {
    id: uuid
    email
    assignments
    createdAt
    updatedAt
  }
`

export const workspaceUsers = gql`
  fragment workspaceUsers on Workspace {
    id: uuid
    users {
      ...user
    }
    groups {
      ...group
    }
    invites {
      ...invite
    }
  }
  ${invite}
  ${user}
  ${group}
`

export const token = gql`
  fragment token on Token {
    value
    payload {
      id: uuid
      iat
      exp
    }
  }
`

export const authUser = gql`
  fragment authUser on AuthUser {
    user {
      ...user
    }
    token {
      ...token
    }
    # isAdmin
  }
  ${token}
  ${user}
`

export const deploymentConfig = gql`
  fragment deploymentConfig on DeploymentConfig {
    defaults
    limits
    presets
  }
`

export const serviceAccount = gql`
  fragment serviceAccount on ServiceAccount {
    id: uuid
    label
    apiKey
    entityType
    entityId: entityUuid
    category
    active
    lastUsedAt
    createdAt
    updatedAt
  }
`
