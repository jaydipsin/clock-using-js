let clockDiv = document.querySelector(".clock");

const clock = () => {
  let clockdis = new Date();
  let h = clockdis.getHours();
  let m = clockdis.getMinutes();
  let s = clockdis.getSeconds();
  let session = "AM"
  if(h == 0){
      h = 12;
    }
  else if(h>12){
    h = h-12
    session = "PM"
  }

  h = (h<10) ? "0" + h :h;
  m = (m<10) ? "0" + m :m;
  s = (s<10) ? "0" + s :s;
  clockDiv.textContent = `${h} : ${m} : ${s}  ${session} `;
};

setInterval(clock,1000);