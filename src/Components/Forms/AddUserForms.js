import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label style={styled}>Name</label>
			<input style={styled} type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label style={styled}>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button style={addNewUser}>Add new user</button>
		</form>
	)
}

const styled={
	marginRight: '5px' 
}
const addNewUser ={
	backgroundColor: 'green',
	border: 'none',
	padding: '3px 10px'
}
export default AddUserForm;