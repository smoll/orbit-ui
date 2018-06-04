'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Mutation as Apollo } from 'react-apollo'
import { Loading } from '../../../instruments'

const Mutation = ({ gql, vars, children, onSuccess }) => {
  return (
    <Apollo
      mutation={gql}
      variables={vars}
      onCompleted={onSuccess}
      // TODO: get document back from mutations and update cache manually
      // update={(cache, data) => {
      //   if (!query) return
      //   // use first key to auto grab Document name
      //   const result = data.data[Object.keys(data.data)[0]]
      //   const results = cache.readQuery({ query: query.gql })
      //   cache.writeQuery({
      //     query: query.name,
      //     data: { [query.result]: results[query.result].concat([result]) },
      //   })
      // }}
    >
      {(mutate, { loading, error }) => {
        if (loading) return <Loading />

        // TODO: Error handling
        if (error) {
          console.log(`Error! ${error.message}`)
          return null
        }
        return children({ mutate }) || null
      }}
    </Apollo>
  )
}

Mutation.propTypes = {
  gql: PropTypes.object,
  children: PropTypes.func.isRequired,
  vars: PropTypes.object,
  //  query: PropTypes.object,
  onSuccess: PropTypes.func,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Mutation
