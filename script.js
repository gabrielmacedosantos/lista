class Todo {
    constructor() {
      this.totaltasks = document.querySelectorAll(".task").length
    }

    addTask(taskText) {
        //clona template
        let template = document.querySelector(".task").cloneNode(true)
        //remove a classe hide
        template.classList.remove("hide")
        //Manipular texto
        let templateText = template.querySelector(".task-title")
        templateText.textContent = taskText

        let list = document.querySelector("#tasks-container")
        
        //inserir na lista
        list.appendChild(template)

        //Adiciona evento as task
        this.addEvents()

        this.checkTasks("add")

    }

    removeTask(task) {

       //Achar o elemento pai
       let parentEl = task.parentElement

       //Remover da lista
       parentEl.remove()

       this.checkTasks("remove")
    }

    completeTask(task) {

        //Adiciona a classe de done 
        task.classList.add("done") 
        
    }

    addEvents() {

        let removeBtns = document.querySelectorAll(".bi-trash")
        let removeBtn = removeBtns[removeBtns.length - 1]

        let doneBtns = document.querySelectorAll(".bi-check-lg")
        let doneBtn = doneBtns[doneBtns.length - 1]

        //Adicionando evento de remover

        removeBtn.addEventListener("click", function(){
            todo.removeTask(this)
        })

        //Adicionar evento de completar tarefa
        doneBtn.addEventListener("click", function(){
            todo.completeTask(this)
        })

    }

    checkTasks(command) {

        let msg = document.querySelector("#empty-tasks")

        //Lógica de adicionar ou remover tasks

        if(command === "add") {
            this.totaltasks += 1
        } else if (command === "remove") {
            this.totaltasks -= 1
        }

        //checa se tem mais de uma task e adicionar ou remove a classe
        if(this.totaltasks == 1) {
            msg.classList.remove("hide")
        } else {
            msg.classList.add("hide")
        }

    }

}

let todo = new Todo()

let addBtn = document.querySelector("#add")

addBtn.addEventListener("click", function(e) {

    e.preventDefault()

    let taskText = document.querySelector("#task")

    //Não adicionar a lista se estiver vazia
    if(taskText.value != '') {
        todo.addTask(taskText.value)
    }

    //Limpa campo de texto
    taskText.value = ''

})
