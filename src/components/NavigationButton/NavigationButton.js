import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import './NavigationButton.css'

export function NavigationButton() {
  const history = useHistory()
  return (
    <Button type="primary" onClick={() => history.push('/success')}>
      To Success
    </Button>
  )
}
