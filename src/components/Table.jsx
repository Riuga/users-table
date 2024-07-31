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
  const [sortKey, setSortKey] = useState('firstName')
  const [sortOrder, setSortOrder] = useState('ascending')

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(console.log(err)))
  }, [])

  const sortData = useCallback(() => {
    const sortedData = users.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))

    if (sortOrder === 'descending') {
      sortedData.reverse()
    }

    return sortedData
  }, [users, sortKey, sortOrder])

  const changeSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending')
    } else {
      setSortKey(key)
      setSortOrder('ascending')
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
            <th>
              Full Name{' '}
              <SortButton
                onClick={() => changeSort('firstName')}
                sortOrder={sortOrder}
                sortKey={sortKey}
                columnKey={'firstName'}
              />
            </th>
            <th>
              Age{' '}
              <SortButton
                onClick={() => changeSort('age')}
                sortOrder={sortOrder}
                sortKey={sortKey}
                columnKey={'age'}
              />
            </th>
            <th>
              Gender{' '}
              <SortButton
                onClick={() => changeSort('gender')}
                sortOrder={sortOrder}
                sortKey={sortKey}
                columnKey={'gender'}
              />
            </th>
            <th>
              Phone{' '}
              <SortButton
                onClick={() => changeSort('phone')}
                sortOrder={sortOrder}
                sortKey={sortKey}
                columnKey={'phone'}
              />
            </th>
            <th>
              Address{' '}
              <SortButton
                onClick={() => changeSort('address.address')}
                sortOrder={sortOrder}
                sortKey={sortKey}
                columnKey={'address.address'}
              />
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
