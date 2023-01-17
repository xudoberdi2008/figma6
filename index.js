$(document).ready(function () {
  drawPic(data);
})

// for fildird
let floName;

for (let i = 0; i < document.querySelectorAll(".forBtn").length; i++) {
  document.querySelectorAll(".forBtn")[i].addEventListener("click", function () {
    floName = this.innerHTML;
    nameFilter(floName);
  })
}

function nameFilter() {
  let floNamePro = data.filter((elem) => {
    if (floName === elem.for) {
      return true;
    }
  })
  drawPic(floNamePro)
}

// коллекции filtir 
function коллекцииFilter() {
  let коллекцииName = document.getElementById("коллекцииBtn").innerHTML
  let коллекцииNamePro = data.filter((elem) => {
    if (коллекцииName === elem.collection) {
      return true;
    }
  })
  drawPic(коллекцииNamePro)
}

// бренд filtir

let брендName;
for (let i = 0; i < document.querySelectorAll(".бренд").length; i++) {
  document.querySelectorAll(".бренд")[i].addEventListener("click", function () {
    брендName = this.innerHTML;
    брендFilter(брендName);
  })
}

function брендFilter() {
  let брендNamePro = data.filter((elem) => {
    if (брендName === elem.brand) {
      return true;
    }
  })
  drawPic(брендNamePro)
}


// price fitir 
let priceNema;
for (let i = 0; i < document.querySelectorAll('.bare').length; i++) {
  document.querySelectorAll(".bare")[i].addEventListener('click', function () {
    priceNema = this.innerHTML;
    pricefilter(priceNema)
  })
};

function pricefilter() {
  let praicePro = data.filter((elem) => {
    if (priceNema === "0$-10$") {
      if (elem.price >= 0 && elem.price <= 10) {
        return true
      } else {
        return false
      }

    } else if (priceNema === "10$-20$") {
      if (elem.price >= 10 && elem.price <= 20) {
        return true
      } else {
        return false
      }
    } else if (priceNema === "20$-30$") {
      if (elem.price >= 20 && elem.price <= 30) {
        return true
      } else {
        return false
      }
    } else if (priceNema === "30$-40$") {
      if (elem.price >= 30 && elem.price <= 40) {
        return true
      } else {
        return false
      }
    } else if (priceNema === "40$-50$") {
      if (elem.price >= 40 && elem.price <= 50) {
        return true
      } else {
        return false
      }
    } else if (priceNema === "50$-60$") {
      if (elem.price >= 50 && elem.price <= 60) {
        return true
      } else {
        return false
      }
    } else if (priceNema === "60$-70$") {
      if (elem.price >= 60 && elem.price <= 70) {
        return true
      } else {
        return false
      }
    }
  })
  drawPic(praicePro)
}


// длякого filter
let длякогоName;
for (let i = 0; i < document.querySelectorAll(".длякого").length; i++) {
  document.querySelectorAll(".длякого")[i].addEventListener("click", function () {
    длякогоName = this.innerHTML;
    длякогоFilter(длякогоName);
  })
}

function длякогоFilter() {
  let длякогоNamePro = data.filter((elem) => {
    if (длякогоName === elem.for) {
      return true;
    }
  })
  drawPic(длякогоNamePro)
}

// коллекция filter 
let коллекцияName;
for (let i = 0; i < document.querySelectorAll(".коллекция").length; i++) {
  document.querySelectorAll(".коллекция")[i].addEventListener("click", function () {
    коллекцияName = this.innerHTML;
    коллекцияFilter(коллекцияName);
  })
}

function коллекцияFilter() {
  let коллекцияNamePro = data.filter((elem) => {
    if (коллекцияName === elem.collection) {
      return true;
    }
  })
  drawPic(коллекцияNamePro)
}

// cезон filtir 
let cезонName;
for (let i = 0; i < document.querySelectorAll(".cезон").length; i++) {
  document.querySelectorAll(".cезон")[i].addEventListener("click", function () {
    cезонName = this.innerHTML;
    cезонFilter(cезонName);
  })
}

function cезонFilter() {
  let cезонNamePro = data.filter((elem) => {
    if (cезонName === elem.season) {
      return true;
    }
  })
  drawPic(cезонNamePro)
}

// событие filtir 
let событиеName;
for (let i = 0; i < document.querySelectorAll(".событие").length; i++) {
  document.querySelectorAll(".событие")[i].addEventListener("click", function () {
    событиеName = this.innerHTML;
    событиeFilter(событиеName);
  })
}

function событиeFilter() {
  let событиеNamePro = data.filter((elem) => {
    if (событиеName === elem.developments) {
      return true;
    }
  })
  drawPic(событиеNamePro)
}



// highToLow 
function highToLowFilter() {
  let filterPrice = data.sort((a, b) => {
    return a.rarity - b.rarity
  })
  drawPic(filterPrice)
}


function drawPic(arr) {
  let formatted = '';


  arr.forEach(function (item, index) {
    formatted += `
    <div class="card mt-5" style="width: 15rem;">
    <img src=${item.img} class="card-img-top" alt="...">
    
  </div>
        `
    $('#flowers').empty();
    $('#flowers').append(formatted);
  })
}


