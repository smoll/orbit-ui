'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row } from 'instruments'
import Menu from './Menu'
import s from './styles.scss'

class CardMenu extends React.Component {
  pos = 0
  scroll = this.scroll.bind(this)
  scrollTo = this.scrollTo.bind(this)
  disable = null
  menu = []
  state = {
    focus: this.props.menu[0].id,
    sticky: null,
  }
  componentDidMount() {
    if (window.innerWidth <= 850) this.disable = true
    if (!this.disable) window.addEventListener('scroll', this.scroll)
  }
  componentWillUnmount() {
    if (!this.disable) window.removeEventListener('scroll', this.scroll)
  }

  scroll() {
    if (this.disable) return
    const { menu } = this.props
    const scroll = window.scrollY
    const scroll0 = this.state.scroll

    this.pos = scroll
    const diff = scroll - scroll0
    if (Math.abs(diff) < 5) return
    const menu2 = diff > 0 ? menu.reverse() : menu
    const mid = window.innerHeight * 0.55
    const focus = menu2.some(m => this.getFocus(m.id, mid))
    // test for menu sticky scroll position
    const sticky = this.sticky()

    const set = {}
    if (!focus) set.focus = null
    if (sticky !== this.state.sticky) set.sticky = sticky
    if (Object.keys(set).length) this.setState(set)
  }

  getFocus(id, mid) {
    const el = document.getElementById(id)
    if (!el) return
    const rect = el.getBoundingClientRect()

    if (rect.y + rect.height / 2 > 0 && rect.y < mid) {
      this.setState({ focus: id })
      return true
    }
  }
  sticky() {
    const { id } = this.props
    const el = document.getElementById(id)
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.y <= 16) return true
  }
  scrollTo(id) {
    const el = document.getElementById(id)
    el.scrollIntoView()
  }

  render() {
    const { children, id, title, menu, className } = this.props
    const { focus, sticky } = this.state
    return (
      <Row align="flex-start" className={classnames(s.row, className)}>
        <Menu
          id={id}
          menu={menu}
          title={title}
          active={focus}
          scrollTo={this.scrollTo}
          className={classnames(sticky && s.sticky)}
        />

        <div className={s.cards}>{children}</div>
      </Row>
    )
  }
}

CardMenu.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  menu: PropTypes.array,
}

CardMenu.defaultProps = {
  id: 'cardMenu',
}

export default CardMenu
