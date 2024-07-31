export function SortButton({ onChange, sortKey }) {
  const handleChange = (e) => {
    onChange(sortKey, e.target.value)
  }
  return (
    <select name='sort' onChange={handleChange}>
      <option value='none'>-</option>
      <option value='ascending'>↑</option>
      <option value='descending'>↓</option>
    </select>
  )
}
