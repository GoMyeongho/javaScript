const lastDate = new Date(2025,2,24);
const nowDate = new Date();

const remainTime = parseInt((lastDate-nowDate)/(1000*60*60*24));
document.getElementById("remain-time").innerHTML = ""+remainTime;