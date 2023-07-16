"use strict";

const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");

let amountmon;
let amounttue;
let amountwed;
let amountthu;
let amountfri;
let amountsat;
let amountsun;

const barmon = document.getElementsByClassName("mon");
const bartue = document.getElementsByClassName("tue");
const barwed = document.getElementsByClassName("wed");
const barthu = document.getElementsByClassName("thu");
const barfri = document.getElementsByClassName("fri");
const barsat = document.getElementsByClassName("sat");
const barsun = document.getElementsByClassName("sun");

const valmon = document.getElementById("valmon");
const valtue = document.getElementById("valtue");
const valwed = document.getElementById("valwed");
const valthu = document.getElementById("valthu");
const valfri = document.getElementById("valfri");
const valsat = document.getElementById("valsat");
const valsun = document.getElementById("valsun");

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      for (let prop in data[i]) {
        if (data[i].day == mon.id) {
          amountmon = data[i].amount;
          let submon = 100 - amountmon;
          barmon[0].style.height = amountmon + "%";
          barmon[0].style.top = submon + "%";
          valmon.innerHTML = "$" + amountmon;
          valmon.style.bottom = amountmon + 6 + "%";
          valmon.style.left = -27 + "%";
        }
        if (data[i].day == tue.id) {
          amounttue = data[i].amount;
          let subtue = 100 - amounttue;
          bartue[0].style.height = amounttue + "%";
          bartue[0].style.top = subtue + "%";
          valtue.innerHTML = "$" + amounttue;
          valtue.style.bottom = amounttue + 6 + "%";
          valtue.style.left = -27 + "%";
        }
        if (data[i].day == wed.id) {
          amountwed = data[i].amount;
          let subwed = 100 - amountwed;
          barwed[0].style.height = amountwed + "%";
          barwed[0].style.top = subwed + "%";
          valwed.innerHTML = "$" + amountwed;
          valwed.style.bottom = amountwed + 6 + "%";
          valwed.style.left = -27 + "%";
        }
        if (data[i].day == thu.id) {
          amountthu = data[i].amount;
          let subthu = 100 - amountthu;
          barthu[0].style.height = amountthu + "%";
          barthu[0].style.top = subthu + "%";
          valthu.innerHTML = "$" + amountthu;
          valthu.style.bottom = amountthu + 6 + "%";
          valthu.style.left = -27 + "%";
        }
        if (data[i].day == fri.id) {
          amountfri = data[i].amount;
          let subfri = 100 - amountfri;
          barfri[0].style.height = amountfri + "%";
          barfri[0].style.top = subfri + "%";
          valfri.innerHTML = "$" + amountfri;
          valfri.style.bottom = amountfri + 6 + "%";
          valfri.style.left = -27 + "%";
        }
        if (data[i].day == sat.id) {
          amountsat = data[i].amount;
          let subsat = 100 - amountsat;
          barsat[0].style.height = amountsat + "%";
          barsat[0].style.top = subsat + "%";
          valsat.innerHTML = "$" + amountsat;
          valsat.style.bottom = amountsat + 6 + "%";
          valsat.style.left = -27 + "%";
        }
        if (data[i].day == sun.id) {
          amountsun = data[i].amount;
          let subsun = 100 - amountsun;
          barsun[0].style.height = amountsun + "%";
          barsun[0].style.top = subsun + "%";
          valsun.innerHTML = "$" + amountsun;
          valsun.style.bottom = amountsun + 6 + "%";
          valsun.style.left = -27 + "%";
        }
      }
    }
  });

mon.addEventListener("mouseover", function () {
  valmon.style.display = "block";
  mon.style.cursor = "pointer";
  mon.style.opacity = "0.75";
});

mon.addEventListener("mouseout", function () {
  valmon.style.display = "none";
  mon.style.opacity = "1";
});

tue.addEventListener("mouseover", function () {
  valtue.style.display = "block";
  tue.style.cursor = "pointer";
  tue.style.opacity = "0.75";
});

tue.addEventListener("mouseout", function () {
  valtue.style.display = "none";
  tue.style.opacity = "1";
});

wed.addEventListener("mouseover", function () {
  valwed.style.display = "block";
  wed.style.cursor = "pointer";
  wed.style.opacity = "0.75";
});

wed.addEventListener("mouseout", function () {
  valwed.style.display = "none";
  wed.style.opacity = "1";
});

thu.addEventListener("mouseover", function () {
  valthu.style.display = "block";
  thu.style.cursor = "pointer";
  thu.style.opacity = "0.75";
});

thu.addEventListener("mouseout", function () {
  valthu.style.display = "none";
  thu.style.opacity = "1";
});

fri.addEventListener("mouseover", function () {
  valfri.style.display = "block";
  fri.style.cursor = "pointer";
  fri.style.opacity = "0.75";
});

fri.addEventListener("mouseout", function () {
  valfri.style.display = "none";
  fri.style.opacity = "1";
});

sat.addEventListener("mouseover", function () {
  valsat.style.display = "block";
  sat.style.cursor = "pointer";
  sat.style.opacity = "0.75";
});

sat.addEventListener("mouseout", function () {
  valsat.style.display = "none";
  sat.style.opacity = "1";
});

sun.addEventListener("mouseover", function () {
  valsun.style.display = "block";
  sun.style.cursor = "pointer";
  sun.style.opacity = "0.75";
});

sun.addEventListener("mouseout", function () {
  valsun.style.display = "none";
  sun.style.opacity = "1";
});
