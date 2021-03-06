'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'
import { handleError } from './helpers'
const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment updated successfully."
        track="Deployment Updated"
        voidError
        back>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, ...payload } = vars
              console.log(payload)
              const variables = {
                id,
                payload,
              }
              mutate({
                variables,
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
