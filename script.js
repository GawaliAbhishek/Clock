const timeEl=document.getElementById("Time-el");
const todate=document.getElementById("Date-el");


function currentTime(){
    const date=new Date();

    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  let  time=` ${hours} : ${minutes} : ${seconds} ${am_pm}`
   timeEl.innerText=time;
   todate.innerText=today.toDateString();

   // Event Triger Code
   let cTime=`${hours}:${minutes}:${seconds}`;
   for(let i=0;i<arr.length;i++){
       if(arr[i].time === cTime){
           alert(arr[i].name+" Is Started.....");
           arr.splice(i,1);
           console.log(arr);
       }
   }
}

setInterval(currentTime, 1000);

// modal js
//grt modal element
var modal = document.getElementById("simplemodal");
//get open modal button
var modelBtn = document.getElementById("modal-btn");
//get close button
var closeBtn = document.getElementsByClassName("closebtn")[0];

//listen for a openclick 
modelBtn.addEventListener('click',openModal);
//listem for close click
closeBtn.addEventListener('click',closeModal);
//listen for outside click
window.addEventListener('click',clickOut);

//funtion to open modal
function openModal(){
    modal.style.display = 'block';
}

//funtion to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close the modal by clicking outside the modal

function clickOut(e){
    if(e.target == modal)
        modal.style.display = 'none';
}


// Event feature and submit button script
const submitBtn = document.getElementById("submit-btn");
const eventNameEl = document.getElementById("EventNameInput");
const eventTimeEl = document.getElementById("Time-Input");
let arr=[];

// Event Listner of Submit Button
submitBtn.addEventListener("click",function(){
    let data =new Data(eventNameEl.value,eventTimeEl.value);
    arr.push(data);
    closeModal();
});




// Class to store the Event data in Object Format
class Data{
    constructor(name, time){
        this.name=name;
        this.time=time;
    }
}