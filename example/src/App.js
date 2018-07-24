import React, { Component } from 'react'
import Table from 'react-bootstrap-gtable'
import data from './users.json'

export default class App extends Component {
  render () {
    const { users } = data
    return (
      <div>
      <h2>Users</h2>
        <Table data={users} defaultStringForObject="-" />
        <h2>User 1</h2>
        <Table data={users[0]} defaultStringForObject="-" />
      </div>
    )
  }
}
