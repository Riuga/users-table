export function SortButton({ sortKey, columnKey, sortOrder, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === 'desc'
          ? 'sort-button sort-reverse'
          : 'sort-button'
      }`}
    >
      ▲
    </button>
  )
}
