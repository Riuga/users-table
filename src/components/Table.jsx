import { useEffect, useState } from 'react'
import Modal from './Modal'
import { SearchBar } from './SearchBar'
import './Table.scss'
import { TableRow } from './TableRow'

export default function Table() {
  const [users, setUsers] = useState([])
  const [key, setKey] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(console.log(err)))
  }, [])

  const search = (value) => {
    console.log(value)
  }

  const selectKey = (key) => {
    setKey(key)
  }

  const selectUser = (user) => {
    setSelectedUser(user)
    console.log(user)
  }

  const closeModal = () => {
    setSelectedUser(null)
  }

  return (
    <div className='table'>
      <h1>Users table</h1>
      <SearchBar selectKey={selectKey} search={search} />
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} selectUser={selectUser} />
          ))}
        </tbody>
      </table>
      {selectedUser && <Modal user={selectedUser} close={closeModal} />}
    </div>
  )
}
