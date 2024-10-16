import "./App.css"
import { useState } from "react"
import PageContainer from "./components/PageContainer/PageContainer"
import Toggler from "./components/Toggler/Toggler"
import rawData from "./data.json"
import ProgrammerList from "./components/ProgrammerList/ProgrammerList"
import ProgForm from "./components/ProgForm/ProgForm"
import WorkForm from "./components/WorkForm/WorkForm"

function App() {
  const [listOfProgrammers, setListOfProgrammers] = useState(
    rawData.programmers
  )

  const [valid, setValid] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  const [newProgrammer, setNewProgrammer] = useState({
    id:
      listOfProgrammers.length > 0
        ? Math.max(...listOfProgrammers.map((prog) => prog.id)) + 1
        : 1,
    name: "",
    position: "",
  })

  const handleChange = (e) => {
    const source = e.target.name
    const val = e.target.value
    let updatedProgrammer
    switch (source) {
      case "name": {
        updatedProgrammer = { ...newProgrammer, name: val }
        break
      }
      case "position": {
        updatedProgrammer = { ...newProgrammer, position: val }
        break
      }

      default:
        break
    }
    setNewProgrammer(updatedProgrammer)
    validateData(updatedProgrammer)
  }

  const validateData = (prog) => {
    if (prog.name.trim().length === 0 || prog.position.trim().length === 0) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const handleAdd = () => {
    setListOfProgrammers((listOfProgrammers) => {
      return [...listOfProgrammers, newProgrammer]
    })
    const updatedProgrammer = {
      id: newProgrammer.id + 1,
      name: "",
      position: "",
    }
    setNewProgrammer(updatedProgrammer)
    validateData(updatedProgrammer)
  }

  const handleDelete = (idToDel) => {
    const temp = listOfProgrammers.filter((prog) => prog.id !== idToDel)
    setListOfProgrammers(temp)
  }

  const handleChoose = (name) => {
    switch (name) {
      case "list-of-progs": {
        setActiveTab(1)
        break
      }
      case "Tasks": {
        setActiveTab(2)
        break
      }
      default:
        break
    }
  }

  return (
    <PageContainer>
      <h1 id="h1">Your app for handling projects</h1>
      <br></br>
      <h2>Toggle view</h2>

        <Toggler onChoose={handleChoose} active={activeTab} />
          
        {activeTab === 1 && (
          <div id="d1">
            <h2 id="h2"><b> Your team</b></h2>
            <ProgrammerList data={listOfProgrammers} onDelete={handleDelete} />

            <h2 id="h3"><b> Add a new programmer</b></h2>

            <ProgForm
              valid={valid}
              onChange={handleChange}
              onAdd={handleAdd}
              data={newProgrammer}
            />
          </div>
        )}

        {activeTab === 2 && (
          <div id="d2">
            <h2 id="h4">Your Task</h2>

            <WorkForm programmers={listOfProgrammers}></WorkForm>
          </div>
        )}

    </PageContainer>
  )
}

export default App
