const readline = require("readline-sync");

let tasklist = [
  { id: 1, name: "Lavar Ropa", isComplete: true },
  { id: 2, name: "Asear mi cuarto", isComplete: false },
];


const addTask = () => {
    return new Promise((resolve, reject) => {
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
  resolve("Task added successfully.");
});
};

 const deleteTask=()=>{
    return new Promise((resolve, reject) => {
    console.log("Delete Task")
    const taskId = readline.question("Enter your task Id: ");
    const newTaskList=tasklist.filter((task)=>task.id!=taskId)
   
    if (newTaskList!="")
    {
        tasklist=newTaskList
        resolve("Your task has been deleted");
        console.clear();
        mainProgram();
    }
    else{
        reject("Your task has not been found");
    }
});
    

 }

 const updateTask=()=>{
    return new Promise((resolve, reject) => {
    console.log("Update Task")
    const taskId = readline.question("Enter your task Id: ");
    const index=tasklist.findIndex((task)=>task.id==taskId);

    if (index!=-1)
    {
        tasklist[index].isComplete=! tasklist[index].isComplete
        
        resolve("Your task has been updated");
        console.clear();
        mainProgram();
    }
    else{
        reject("Your task has not been found");
    }
});
 }

 const mainProgram = async () => {
    
 console.log("Welcome to my TaskList");
 console.log(tasklist);

 console.log("1. Add a new task");
 console.log("2. Delete a task");
 console.log("3. Update a task");
 const optionTask = readline.question("Choose an option ");
 try {
 if(optionTask==1)
 {
    await addTask().then((result) => console.log(result));
 }
 else if(optionTask==2){
    await  deleteTask().then((result) => console.log(result));;
 }
 else if(optionTask==3){
   await updateTask().then((result) => console.log(result));;
 }
 else {
    console.log("Wrong option")
    console.clear();
    mainProgram();
 }
} catch (error) {
    console.log(error);
  } finally {
    console.clear();
    await mainProgram();
  }

}
mainProgram();