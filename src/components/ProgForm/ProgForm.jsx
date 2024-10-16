import "./ProgForm.css"

function ProgForm({ data, valid, onChange, onAdd }) {
  return (
    <div className="prog-form">
      <input
        type="text"
        placeholder="programmer´s name"
        name="name"
        onChange={onChange}
        value={data.name}
      />

      <label htmlfor="junior"><b>Junior</b></label>
      <input
        id="junior"
        type="radio"
        name="position"
        onChange={onChange}
        value="Junior"
        checked={data.position === "Junior"}
      />

      <label htmlfor="senior"><b>Senior</b></label>
      <input
        id="senior"
        type="radio"
        name="position"
        onChange={onChange}
        value="Senior"
        checked={data.position === "Senior"}
      />

      <button disabled={!valid} onClick={onAdd}>
        Přidat
      </button>
    </div>
  )
}

export default ProgForm
