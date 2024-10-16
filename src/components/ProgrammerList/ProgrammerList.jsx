import "./ProgrammerList.css"

function ProgrammerList({ data, onDelete }) {
  return (
    <div className="list">
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span>
              {item.name} - {item.position}
            </span>
            <button className="btn-delete" onClick={() => onDelete(item.id)}>
              X
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ProgrammerList
