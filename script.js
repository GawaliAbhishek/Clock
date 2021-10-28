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
}

setInterval(currentTime, 1000);
