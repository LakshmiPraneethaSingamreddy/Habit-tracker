const tableHeadRow = document.querySelector("#habit-table thead tr");
const TOTAL_DAYS = 30;
const STORAGE_KEY = "habit-tracker-data";
function saveHabits(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(habits));
}

function loadHabits(){
  const data = localStorage.getItem(STORAGE_KEY);
  if(data){
    habits=JSON.parse(data);
  }
}
let habits=[];   //for storing all the habits
// Remove existing dynamic headers if reloaded
while (tableHeadRow.children.length > 1) {
  tableHeadRow.removeChild(tableHeadRow.lastChild);
}
for (let day = 1; day <= 30; day++) {             //loop to create table header for 30 days
  const th = document.createElement("th");
  th.textContent = day;
  tableHeadRow.appendChild(th);
}
// Add Actions column
const actionTh = document.createElement("th");
actionTh.textContent = "Actions";
tableHeadRow.appendChild(actionTh);
function createHabit(name,color){                               // function to create a new habit object
  return{
    id:Date.now(),
    name:name,
    color: color,
    progress: Array(TOTAL_DAYS).fill(false)
  };
}

const tableBody = document.querySelector("#habit-table tbody")               //selects the table body
function renderHabits(){
  tableBody.innerHTML="";                                 //clears the table body(to add/delete the habits dynamically and resend the correct table to frontend)
  habits.forEach(habit=> {                                //for each habit in habits array
    const row = document.createElement("tr");                     //creates a new row for each habit    
    const nameCell = document.createElement("td");                    //creates a new cell for habit name
    nameCell.classList.add("habit-name");                        //adds class to the name cell(for styling when done/not(to add color to cell))
    // nameCell.innerHTML = `<span>${habit.name}</span>    
    // <span>
    // <button class = "color-btn">🎨</button>
    // <button class="btn btn-sm btn-danger">❌</button>
    // </span>`;
    nameCell.textContent=habit.name;

    row.appendChild(nameCell);   //adds the habit name, color change button and delete button to the row
    habit.progress.forEach((done,dayIndex) => {       //for each day in the habit's progress
      const cell = document.createElement("td");          //creates a new cell for each day
      cell.classList.add("cell");                       //adds class to the cell(for styling when done/not(to add color to cell))
      
      if(done) {  //if the habit is done for that day then it's color is changed to that habit's color
        cell.style.backgroundColor = habit.color;
      }
      cell.addEventListener("click",() =>{
        habit.progress[dayIndex] = !habit.progress[dayIndex];
        saveHabits();
        renderHabits();
      })
      row.appendChild(cell);                   //adds the cell to the row
    }); 
    const actionsCell = document.createElement("td");
    // actionsCell.innerHTML = `
    //     <input 
    //     type="color" 
    //     value="${habit.color}"
    //     class="form-control form-control-color mb-1">
    //     <button class="btn btn-sm btn btn-outline-danger w-100">Delete</button>
    // `;

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = habit.color;
    colorInput.classList.add("form-control", "form-control-color", "mb-1");

    colorInput.addEventListener("change",(e) =>{
      habit.color = e.target.value;
      saveHabits();
      renderHabits();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger w-100";

    deleteBtn.addEventListener("click",()=>{
      habits = habits.filter(h=>h.id!==habit.id);
      saveHabits();
      renderHabits();
    });
    actionsCell.appendChild(colorInput);
    actionsCell.appendChild(deleteBtn);
    row.appendChild(actionsCell);
    tableBody.appendChild(row);              //adds the row to the table body for display
  });
}


const habitNameInput = document.getElementById("habit-name");
const habitColorInput = document.getElementById("habit-color");
const addHabitBtn = document.getElementById("add-habit-btn");

addHabitBtn.addEventListener("click",() =>{
  const name = habitNameInput.value.trim();
  const color = habitColorInput.value;
  if(!name){
    alert("Please enter a habit name");
    return;
  }
  habits.push(createHabit(name,color));
  saveHabits();
  habitNameInput.value=""; 
  renderHabits();
})

loadHabits();
renderHabits();

