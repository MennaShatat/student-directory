function StudentCard({ id, name, age, grade, email, img, onDelete, onSelect, student }) {
  return (
    <div className="card" onClick={() => onSelect(student)}>
      <img className="card-photo" src={img} alt={name} />
      <div className="card-name">{name}</div>
      <div className="card-info">
        <span>{age} years old</span>
        <span className={`badge badge-${grade.toLowerCase()}`}>{grade}</span>
      </div>
      <div className="card-email">{email}</div>
      <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(id) }}>
        Delete
      </button>
    </div>
  )
}

export default StudentCard