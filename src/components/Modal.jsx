function Modal({ student, onClose }) {
  if (!student) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img className="modal-photo" src={student.img} alt={student.name} />
        <h2>{student.name}</h2>
        <p>{student.age} years old</p>
        <p><span className={`badge badge-${student.grade.toLowerCase()}`}>{student.grade}</span></p>
        <p>{student.email}</p>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal