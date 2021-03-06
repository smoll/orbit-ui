'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TextButton, B } from 'instruments'

const MenuList = ({ button, children, label, className }) => {
  const b = button && (
    <TextButton {...button} className={s.button}>
      {button.text}
    </TextButton>
  )
  return (
    <ul className={classnames(s.list, className)}>
      {button && button.start && b}
      {label && <B className={s.label}>{label}</B>}
      {label && <hr className={s.border} />}
      {children}
      {button && !button.start && b}
    </ul>
  )
}

MenuList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  label: PropTypes.string,
  horizontal: PropTypes.bool,
  button: PropTypes.object,
}

export default MenuList
