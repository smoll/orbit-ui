import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import s from './styles.scss'

const Flex = ({
  children,
  className,
  passRef,
  justify,
  align,
  wrap,
  auto,
  flow,
  full,
  onClick,
  id,
}) => {
  return (
    <div
      id={id}
      ref={passRef}
      className={classnames(
        s.flex,
        flow === 'row' ? s.row : s.box,
        s[justify],
        align ? s['align-' + align] : null,
        wrap ? s.wrap : null,
        auto ? s.auto : null,
        full ? s.full : null,
        className
      )}
      onClick={onClick}>
      {children}
    </div>
  )
}

Flex.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  passRef: PropTypes.func,
  justify: PropTypes.string,
  align: PropTypes.string,
  flow: PropTypes.string,
  wrap: PropTypes.bool,
  auto: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Flex
