import React from 'react'
import { Table,  Button } from "react-bootstrap"


const UserTable = props => (
  <Table responsive  bordered hover size="sm">
    <thead>
      <tr>
        <th style={{textAlign: 'center'}}>Name</th>
        <th style={{textAlign: 'center'}}>Username</th>
        <th style={{textAlign: 'center'}}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td style={{textAlign: 'right'}}>
              {/* <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
                style={{marginRight: '8px'}}
              >
                Edit
              </button> */}
              <Button  onClick={() => {props.editRow(user)}} >Edit</Button>{' '}
              <Button  onClick={() => props.deleteUser(user.id)} style={{backgroundColor: '#dc3545', borderColor: '#dc3545', color: '#fff' }}>Delete</Button>
              {/* <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button> */}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default UserTable
