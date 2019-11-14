import React, {useState,useEffect} from 'react';
import './App.css';
import data from './data'
import AddForm from './components/AddForm'
import Form from './components/Form'

function App() {

  const [members, setMembers] = useState([])

  useEffect(()=>{
    setMembers(data)
  }, [])

  const addTeamMate = mate=>{
      const newMate = setMembers([...members, mate ])
  }

  return (
    <div className="App">
      <Form addTeamMate={addTeamMate}/>
      {members.map(member=>{
        return <AddForm key={member.id} info={member} />
      })}
    </div>
  );
}

export default App;