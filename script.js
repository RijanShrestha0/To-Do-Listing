const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

const newtask = document.createElement("div");
newtask.setAttribute("id", "newtask");
container.appendChild(newtask);

const input = document.createElement("input");
input.setAttribute("placeholder", "Task-to-be-done...");
newtask.appendChild(input);

const button = document.createElement("button");
button.setAttribute("id", "push");
button.textContent=`Add`
newtask.appendChild(button);

const tasks = document.createElement("div");
tasks.setAttribute("id", "tasks");
container.appendChild(tasks);
const h2 = document.createElement("h2")
h2.textContent=`To-Do-List`
tasks.appendChild(h2)

// ideas

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }else if(document.querySelector('#newtask input')){
        const task = document.createElement("div");
        task.setAttribute("class", "task");
        tasks.appendChild(task);
        const taskname = document.createElement("span");
        taskname.textContent=`${document.querySelector('#newtask input').value}`
        task.appendChild(taskname);
        const del = document.createElement("button");
        del.setAttribute("class", "del");
        del.textContent=`Remove`
        task.appendChild(del);
        var taskin = document.querySelectorAll('.del');
        for(i=0; i<taskin.length; i++){
            taskin[i].onclick = function(){
                this.parentElement.remove();
            }
        }
        const edit = document.createElement("button");
        edit.setAttribute("class", "edit");
        edit.textContent=`Edit`
        task.appendChild(edit);
    }
}