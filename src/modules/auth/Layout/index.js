import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Row } from 'instruments'
import Module from '../Module'
import AuthServices from '../AuthServices'

import s from './styles.scss'

const Layout = ({ title, children, className }) => {
  return (
    <Module metaTitle={title}>
      <Row
        justify="space-around"
        className={classnames(s.wrapper, className)}
        wrap>
        <div className={s.content}>{children}</div>
        <div className={s.card}>
          <AuthServices login={title === 'Login'} />
        </div>
      </Row>
    </Module>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Layout
