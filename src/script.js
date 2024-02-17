let tokyoElement = document.querySelector("#tokyo");
let tokyoDate = tokyoElement.querySelector(".date");
let tokyoTime = tokyoElement.querySelector(".time");
let currentTime = moment().tz("Asia/Tokyo");

tokyoDate.innerHTM = currentTime.format("MMMM Do ,YYYY");
tokyoTime.innerHTML = currentTime.format("HH:MM:SS [<small>]A[</small>]");
