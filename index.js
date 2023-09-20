const readline = require("readline-sync");

let tasklist = [
  { id: 1, name: "Lavar Ropa", isComplete: true },
  { id: 2, name: "Asear mi cuarto", isComplete: false },
];


const addTask = () => {
    const taskId = readline.question("Enter your task Id: ");
  const taskName = readline.question("Enter your task name: ");

  const newTask = {
    id: parseInt(taskId),
    name: taskName,
    isComplete: false,
  };
  tasklist.push(newTask);
  console.clear();
  mainProgram();
};

 const deleteTask=()=>{
    console.log("Delete Task")
    const taskId = readline.question("Enter your task Id: ");
    const newTaskList=tasklist.filter((task)=>task.id!=taskId)
   
    if (newTaskList!="")
    {
        tasklist=newTaskList
        console.log("Your task has been deleted");
        console.clear();
        mainProgram();
    }
    else{
        console.log("Your task has not been found");
    }
    

 }

 const updateTask=()=>{
    console.log("Update Task")
    const taskId = readline.question("Enter your task Id: ");
    const index=tasklist.findIndex((task)=>task.id==taskId);

    if (index!=-1)
    {
        tasklist[index].isComplete=! tasklist[index].isComplete
        
        console.log("Your task has been updated");
        console.clear();
        mainProgram();
    }
    else{
        console.log("Your task has not been found");
    }
  
    

 }

 const mainProgram=()=>{
 console.log("Welcome to my TaskList");
 console.log(tasklist);

 console.log("1. Add a new task");
 console.log("2. Delete a task");
 console.log("3. Update a task");
 const optionTask = readline.question("Choose an option ");

 if(optionTask==1)
 {
    addTask();
 }
 else if(optionTask==2){
    deleteTask();
 }
 else if(optionTask==3){
    updateTask();
 }
 else {
    console.log("Wrong option")
    console.clear();
    mainProgram();
 }

}
mainProgram();