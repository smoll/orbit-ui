'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, TextField, Password, Form, Row, Mini, Button } from 'instruments'

import Create from '../Data/Create'
import s from './styles.scss'

const EmailPw = ({ form, login }) => {
  const email = form.field('email')
  const pw = form.field('password')
  return (
    <React.Fragment>
      <TextField
        type="email"
        placeholder="you@yourcompany.com"
        label="Email"
        required
        {...email}
        focus
      />
      <Password {...pw} />
      {login && (
        <Row justify="flex-end" className={s.extras}>
          <Mini>
            <Link to="/forgot-password" className={s.forgotPassword}>
              Forgot Password?
            </Link>
          </Mini>
        </Row>
      )}
      <Button
        disabled={!form.save}
        className={classnames(s.button, s.emailButton)}
        submit>
        {login ? 'Login' : 'Sign Up'}
      </Button>
    </React.Fragment>
  )
}

EmailPw.propTypes = {
  form: PropTypes.object,
  login: PropTypes.bool,
  remember: PropTypes.bool, // default value
}

export default Create(Form(EmailPw))
