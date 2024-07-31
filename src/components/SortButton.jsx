export function SortButton({ onChange, sortKey }) {
  const handleChange = (e) => {
    onChange(sortKey, e.target.value)
  }
  return (
    <select name='sort' onChange={handleChange}>
      <option value='none'>None</option>
      <option value='ascending'>Ascending</option>
      <option value='descending'>Descending</option>
    </select>
  )
}
