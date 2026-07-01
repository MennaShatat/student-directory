function Filter({ activeGrade, onGradeChange }) {
  const grades = ["all", "A", "B", "C"]

  return (
    <div className="filter-group">
      {grades.map((grade) => (
        <button
          key={grade}
          className={`filter-btn ${activeGrade === grade ? "active" : ""}`}
          onClick={() => onGradeChange(grade)}
        >
          {grade === "all" ? "All" : `Grade ${grade}`}
        </button>
      ))}
    </div>
  )
}

export default Filter