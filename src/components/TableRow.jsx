export function TableRow({ user, selectUser }) {
  return (
    <tr
      key={user.id}
      onClick={() => {
        selectUser(user)
      }}
    >
      <td>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
      <td>{`${user.address.city}, ${user.address.address}`}</td>
    </tr>
  )
}
