import { useCallback, useEffect, useState } from 'react'
import Modal from './Modal'
import { SearchBar } from './SearchBar'
import { SortButton } from './SortButton'
import './Table.scss'
import { TableRow } from './TableRow'

export default function Table() {
  const [users, setUsers] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [sortKey, setSortKey] = useState('id')
  const [sortOrder, setSortOrder] = useState('ascending')

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error(err))
  }, [])

  const sortData = useCallback(() => {
    const sortedData =
      sortKey === 'address'
        ? users.sort((a, b) => (a.address.city > b.address.city ? 1 : -1))
        : users.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))

    if (sortOrder === 'descending') {
      sortedData.reverse()
    }

    return sortedData
  }, [users, sortKey, sortOrder])

  const changeSort = (key, order) => {
    if (order === 'none') {
      setSortKey('id')
      setSortOrder('ascending')
    } else {
      setSortKey(key)
      setSortOrder(order)
    }
  }

  const search = (value) => {
    console.log(value)
  }

  const selectKey = (key) => {
    setSearchKey(key)
  }

  const selectUser = (user) => {
    setSelectedUser(user)
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
            <th>
              <p>Full Name</p>
              <SortButton onChange={changeSort} sortKey='firstName' />
            </th>
            <th>
              <p>Age</p>
              <SortButton onChange={changeSort} sortKey='age' />
            </th>
            <th>
              <p>Gender</p>
              <SortButton onChange={changeSort} sortKey='gender' />
            </th>
            <th>Phone</th>
            <th>
              <p>Address</p>
              <SortButton onChange={changeSort} sortKey='address' />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortData().map((user) => (
            <TableRow key={user.id} user={user} selectUser={selectUser} />
          ))}
        </tbody>
      </table>
      {selectedUser && <Modal user={selectedUser} close={closeModal} />}
    </div>
  )
}
