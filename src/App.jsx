import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import StudentList from './components/StudentList'
import AddStudentForm from './components/AddStudentForm'
import Modal from './components/Modal'
import studentsData from './studentsData'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState(() => {
    const saved = localStorage.getItem("searchText")
    return saved || ""
  })

  const [activeGrade, setActiveGrade] = useState("all")

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students")
    return saved ? JSON.parse(saved) : studentsData
  })

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem("searchText", searchText)
  }, [searchText])

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students))
  }, [students])

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent])
  }

  function handleDeleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id))
  }

  const filteredStudents = students.filter((student) => {
    const nameMatch = student.name.toLowerCase().includes(searchText.toLowerCase())
    const gradeMatch = activeGrade === "all" || student.grade === activeGrade
    return nameMatch && gradeMatch
  })

  return (
  <div className={isDarkMode ? "App dark" : "App"}>
   <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />
    <div className="controls">
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />
      <Filter activeGrade={activeGrade} onGradeChange={setActiveGrade} />
    </div>
    <AddStudentForm onAddStudent={handleAddStudent} />
    <div className="content">
      <StudentList
        students={filteredStudents}
        onDelete={handleDeleteStudent}
        onSelect={setSelectedStudent}
      />
    </div>
    <Modal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
  </div>
)
}

export default App