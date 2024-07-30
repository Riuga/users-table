export function SearchBar({ selectKey, search }) {
  const handleSearch = (e) => {
    search(e.target.value)
  }

  const handleKeySelect = (e) => {
    selectKey(e.target.value)
  }

  return (
    <div className='search-bar'>
      <label htmlFor='keys'>Choose a key to search by:</label>

      <select name='keys' id='keys' onChange={handleKeySelect}>
        <option value='firstName'>First Name</option>
        <option value='lastName'>Last Name</option>
        <option value='maidenName'>Maiden Name</option>
        <option value='age'>Age</option>
        <option value='gender'>Gender</option>
        <option value='phone'>Phone</option>
        <option value='address.city'>City</option>
        <option value='address.address'>Address</option>
      </select>
      <input type='text' placeholder='Search...' onChange={handleSearch} />
    </div>
  )
}
