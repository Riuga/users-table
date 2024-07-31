import './Modal.scss'

const Modal = ({ user, close }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h3>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</h3>
        <p>Age: {user.age}</p>
        <p>Address: {`${user.address.address}, ${user.address.city}`}</p>
        <p>Height: {user.height}</p>
        <p>Weight: {user.weight}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Modal
