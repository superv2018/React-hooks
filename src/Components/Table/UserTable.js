import React from 'react'

const styled = {
  width: '100%'
} 

const theadStyled = {
  border: '1px solid #dddddd',
  
  padding: '8px'
  
}

const deleteButton = {
  backgroundColor: 'red',
  border: 'none',
  padding: '4px 10px',
  margin: '2px'
}

const editButton = {
  backgroundColor: 'green',
  border: 'none',
  padding: '4px 10px',
  margin: '2px'
}

const UserTable = props => (
  <table style={styled}>
    <thead>
      <tr >
        <th style={theadStyled}>Name</th>
        <th style={theadStyled}>Username</th>
        <th style={theadStyled}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td styled={theadStyled}>{user.name}</td>
            <td styled={theadStyled}>{user.username}</td>
            <td styled={theadStyled}>
              <button
                style={editButton}
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
               style={deleteButton}
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable