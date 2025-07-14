const time =document.getElementById('time');
const timeFormate =document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded',()=>{
  setInterval(showTime,1000)
})

const showTime=()=>{
  let date=new Date();

  let hr=date.getHours();
  let mins=date.getMinutes();
  let sec=date.getSeconds();

  hr=hr<10?`0${hr}`:hr;
  mins=mins<10?`0${mins}`:mins;
  sec=sec<10?`0${sec}`:sec;

  time.innerHTML=`${ hr}:${mins}:${sec}`;

  timeFormate.innerHTML=hr>12?"AM":"PM";
}