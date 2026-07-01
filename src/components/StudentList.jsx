import StudentCard from './StudentCard'

function StudentList({ students, onDelete, onSelect }) {
  return (
    <div className="grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          grade={student.grade}
          email={student.email}
          img={student.img}
          student={student}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default StudentList