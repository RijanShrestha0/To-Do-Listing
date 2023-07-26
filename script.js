const body = document.querySelector("body");


const outer = document.createElement("div");
outer.setAttribute("class", "outer");
const day =document.createElement("div");
outer.append(day);
const time_day = document.createElement("a");
day.appendChild(time_day);

let todaysday = new Date();
let baar = todaysday.getDay();

switch (baar) {
    case 0:
        baar = "Sunday";
        break;

    case 1:
        baar = "Monday";
        break;
    case 2:
       baar = "Tuesday";
        break;
    case 3:
        baar = "Wednesday";
        break;
        case 4:
            baar = "Thursday";
            break;
            case 5:
                baar = "Friday";
                break;
                case 6:
        baar = "Saturday";
    }
    
    time_day.innerHTML = baar;
    
const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);
const h2 = document.createElement("h2");
h2.textContent=`To-Do-List`
container.appendChild(h2);
container.appendChild(outer)
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

// ideas

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task");
    }else if(document.querySelector('#newtask input')){
        const task = document.createElement("div");
        task.setAttribute("class", "task");
        tasks.appendChild(task);
        const taskname = document.createElement("span");
        taskname.textContent=`${document.querySelector('#newtask input').value}`
        task.appendChild(taskname);

        const box = document.createElement("a");
        task.appendChild(box);
        const edit = document.createElement("button");
        edit.setAttribute("class", "edit");
        edit.textContent=`Edit`
        task.appendChild(edit);
        var tasked = document.querySelectorAll('.edit');
        for(i=0; i<tasked.length; i++){
            tasked[i].onclick = function(){
                edit.parentElement.remove()
            }
        }
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
    };    
};    

