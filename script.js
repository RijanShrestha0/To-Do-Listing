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

const time = document.createElement("div");
time.setAttribute("class", "time");
newtask.appendChild(time);
const time_hour = document.createElement("div")
time_hour.setAttribute("style", "display: inline-block")
time_hour.setAttribute("id", "hour")
time.appendChild(time_hour)

const dots = document.createElement("a")
dots.setAttribute("style", "font-weight:bolder;")
time.appendChild(dots)

const time_minutes = document.createElement("div")
time_minutes.setAttribute("id", "minutes")
time_minutes.setAttribute("style", "display: inline-block")
time.appendChild(time_minutes)

const time_second = document.createElement("div")
time_second.setAttribute("id", "second")
time_second.setAttribute("style", "display: inline-block")
time.appendChild(time_second)


setInterval(() => {
    
    let currenttime = new Date();
    time_hour.innerHTML = (currenttime.getHours() <=9? "0":"") + currenttime.getHours() + ':'
    time_minutes.innerHTML = (currenttime.getMinutes() <=9? "0":"") + currenttime.getMinutes() + ':' 
    time_second.innerHTML = (currenttime.getSeconds() <10?"0":"") + currenttime.getSeconds(); + ':'
}, 10);   


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

