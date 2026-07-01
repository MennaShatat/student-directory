import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    grade: "A",
    email: "",
    img: ""
  })

  function handleChange(e) {
    const { name, value } = e.target
    setNewStudent({ ...newStudent, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!newStudent.name || !newStudent.age || !newStudent.email) return

    onAddStudent({
      ...newStudent,
      id: Date.now(),
      age: Number(newStudent.age),
      img: newStudent.img || "https://i.pravatar.cc/200"
    })

    setNewStudent({ name: "", age: "", grade: "A", email: "", img: "" })
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Student name"
        value={newStudent.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={newStudent.age}
        onChange={handleChange}
      />
      <select name="grade" value={newStudent.grade} onChange={handleChange}>
        <option value="A">Grade A</option>
        <option value="B">Grade B</option>
        <option value="C">Grade C</option>
      </select>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newStudent.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL (optional)"
        value={newStudent.img}
        onChange={handleChange}
      />
      <button type="submit">Add Student</button>
    </form>
  )
}

export default AddStudentForm