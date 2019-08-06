document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(event){
      event.preventDefault()

      const newtask = document.createElement("li")
      const list = document.getElementById("tasks")
      const userInput = document.getElementById("new-task-description")

      newtask.textContent = userInput.value
      list.appendChild(newtask)


  
     
     
  });
});
