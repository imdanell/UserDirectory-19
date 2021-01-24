import './App.css';
import {useEffect, useState} from 'react';

function App() {

const [employees, setEmployees] = useState([]);
const [inputs, setInputs] = useState({});
const [filteredEmployees, setFilteredEmployees] = useState([]);

useEffect(() => {
  fetch('https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob')
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    setEmployees(data.results)
    setFilteredEmployees(data.results)
  })
}, [])

const handleInputs = (event) => {
  const {name,value} = event.target;
  var filteredEmployees = (employees.filter(
  (each => each.name.first.includes(value) || 
  (each.name.last.includes(value)) || 
  (each.phone.includes(value)) || 
  (each.email.includes(value)) ||
  (each.dob.date.includes(value)))))
console.log(filteredEmployees);
setFilteredEmployees(filteredEmployees);

}



  return (
    <>
    <header>
    <h1>Employee Directory</h1>
    <h5>Click on carrots to sort by heading or use Search box to narrow your results</h5>
    </header>

    <input name="searchTerm" onChange={handleInputs} placeholder="Search"></input>
    <div className="employees-grid">
    <div>
        Image
          </div>
          <div>
          Name 
          </div>
          <div>
         Phone
          </div>
          <div>
         Email
          </div>
          <div>
          DOB
          </div>

    </div>
    {filteredEmployees.map((each,index) => {
      return(
        
        <div key={index} className="employees-grid">
          <div>
          <img src={each.picture.thumbnail} alt={index}/>
          </div>
          <div>
          {each.name.first} {each.name.last}
          </div>
          <div>
          {each.phone}
          </div>
          <div>
          {each.email}
          </div>
          <div>
          {each.dob.date}
          </div>
        </div>
      )
    })
    }
    </>
  );
}

export default App;
