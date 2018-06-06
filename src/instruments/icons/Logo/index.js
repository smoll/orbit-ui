'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from '../../../instruments'

import s from './styles.scss'

const Logo = ({ darkBg, noStars, full, className }) => {
  let path = full ? 'Astro_' : 'A_'
  path += noStars ? '' : 'stars_'
  path += darkBg ? 'darkBg' : 'lightBg'

  const src = require(`./${path}.svg`)
  return (
    <Link to="/">
      <img
        src={src}
        className={classnames(
          s.logo,
          full && s.full,
          !noStars && s.stars,
          className
        )}
        title="Astronomer"
      />
    </Link>
  )
}

Logo.propTypes = {
  darkBg: PropTypes.bool,
  full: PropTypes.bool,
  noStars: PropTypes.bool,
  className: PropTypes.string,
}

export default Logo