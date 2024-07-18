let targetElement = document.querySelector(".carts");
let addCart = document.querySelector(".add-carts");
let motivate_banner = document.querySelector(".motivational-banner-quotes");
let quotes;
let seperateCheckboxCount = 0;
let taskCompleted = document.querySelector(".completed-value");
let targetToRemove = document.querySelector(".try");
let removeTheacart = document.querySelector(".cart-container img");
let cartsLength = document.querySelectorAll(".cart-container");
let checkbox = document.querySelector(".input-box");
let firstCart = document.querySelector(".blur-this");
let quotes_author = document.querySelector(".author-name");
let main_bar = document.querySelector(".main-bar");
let taskCompletedSpans = document.querySelector(".tasks-completed");
checkbox.disabled = true;
let lineThrough = document.querySelector(".lineThrough");
let popup_cart = document.querySelector('.popup-cart');
let motivate_banner_id;
let closeButton = document.querySelector('.close_button')
let userInput = document.querySelector('.popup-cart input')
let submitButton = document.querySelector('.popup-cart button')
let userValue;
let completedCount = 0;
let countForID = 0;
let quotesNumber = 0;
let valueExisted = false;
taskGetter()
quotesGenerator();
progressbar();
function quotesGenerator() {
  let val;
  let data = fetch("./quotes.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      val = data.map((data) => {
        return data;
      });
      quotes = val;
      return val;
    });

  return val;
}
//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--task creater>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function taskCreater(task, count) {
  let division = document.createElement("div");
  //label
  let labelTag = document.createElement("label");
  labelTag.for = `checkbox-task${count}`;
  labelTag.classList.add("try");
  division.appendChild(labelTag);
  //

  let divisionCartContainer = document.createElement("div");
  divisionCartContainer.classList.add("cart-container");
  labelTag.appendChild(divisionCartContainer);
  //
  let inputTag = document.createElement("input");
  inputTag.type = "checkbox";
  inputTag.classList.add("input-box");
  inputTag.classList.add("accent-color");
 
  if(!valueExisted){
  inputTag.id = `checkbox-task${count}`;
  }
  else{
    inputTag.id =count;
  }
  //
  let spanTag = document.createElement("span");
  spanTag.innerText = `${task}`;
  spanTag.classList.add(`lineThrough`);
  //
  let imgTag = document.createElement("img");
  imgTag.src = "./assets/delete.svg";
  divisionCartContainer.appendChild(inputTag);
  divisionCartContainer.appendChild(spanTag);
  divisionCartContainer.appendChild(imgTag);
  targetElement.append(division);

  //!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--remove the cart>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  imgTag.addEventListener("click", (e) => {
    let removeItemLocalStorage = imgTag.previousElementSibling.previousElementSibling.id;
    localStorage.removeItem(removeItemLocalStorage)
    if (imgTag.previousElementSibling.previousElementSibling.checked == true) {
      completedCount--;
    }

    cartsLength = document.querySelectorAll(".cart-container");
    taskCompleted.innerHTML = `<span class="first_value">${completedCount}</span>/<span class="second_value">${cartsLength.length - 1
      }</span>`;
    let ele = e.target.parentElement.parentElement;
    if (ele.classList.contains("try")) {
      if (
        ele.parentElement.tagName == "DIV" &&
        ele.parentElement.classList == ""
      ) {
        ele.parentElement.remove();
      } else {
        ele.remove();
      }
    }
    progressbar();
  });
  //input tag event listener
  inputTag.addEventListener("change", (e) => {
    inputTag.nextElementSibling.classList.toggle('text-decoration');
    cartsLength = document.querySelectorAll(".cart-container");
    // localStorage.removeItem(inputTag.id);
    if (inputTag.checked) {
      completedCount++;
    } else {
      completedCount--;
    }
    taskCompleted.innerHTML = `<span class="first_value">${completedCount}</span>/<span class="second_value">${cartsLength.length}</span`;
    progressbar();
  });
}

//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-add task>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

addCart.addEventListener("click", (e) => {
  popup_cart.classList.add('popup-alert');
  popup_cart.classList.remove('display_none')
  firstCart.parentElement.remove();
  cartsLength = document.querySelectorAll(".cart-container");
  seperateCheckboxCount++;
  taskCompleted.innerHTML = `<span class="first_value">${completedCount}</span>/<span class="second_value">${cartsLength.length + 1
    }</span>`;
  progressbar();
  // taskCreater("have a great day", seperateCheckboxCount);
});

//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--generating quotes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--updating quotes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let count = 0;
let innerCounter = 0;
let authorCounter = 0;
setInterval(() => {
  if (count >= quotes.length) {
    count = 0;
    quotesNumber = 0;
    motivate_banner.innerText = "";
  } else {
    if (innerCounter >= quotes[count].text.length) {
      quotesNumber++;
      innerCounter = 0;
      authorCounter = 0;
      quotes_author.innerHTML = "";
      authorName();
      motivate_banner.innerText = "";
      count++;
    } else {
      motivate_banner.innerHTML += quotes[count].text[innerCounter];
      innerCounter++;
    }
  }
}, 300);

function authorName() {
  id = setInterval(() => {
    if (authorCounter >= quotes[quotesNumber].author.length) {
      authorCounter = 0;
      quotes_author.innerHTML = "";
    } else {
      quotes_author.innerHTML += quotes[quotesNumber].author[authorCounter];
      authorCounter++;
    }
    if (authorCounter >= quotes[quotesNumber].author.length) {
      clearTimeout(id);
    }
  }, 250);
}

authorName();



function progressbar() {
  let first_value_capture = document.querySelector(".first_value");
  let second_value_capture = document.querySelector(".second_value");
  let first_value = Math.floor(parseInt(first_value_capture.innerHTML));
  let second_value = Math.floor(parseInt(second_value_capture.innerHTML));

  if (first_value == 0) {
    main_bar.style.width = "2%";
    taskCompletedSpans.style.color = "black";
  } else if (first_value == second_value) {
    main_bar.style.width = "100%";
    taskCompletedSpans.style.color = "white";
  } else if (second_value / 2 == first_value) {
    main_bar.style.width = "50%";
    taskCompletedSpans.style.color = "white";
  } else if (second_value / 2 > first_value) {
    main_bar.style.width = "25%";
    taskCompletedSpans.style.color = "black";
  } else if (second_value / 2 < first_value) {
    main_bar.style.width = "75%";
    taskCompletedSpans.style.color = "white";
  }
  lineThrough.style.textDecorationLine = "line-through";
}



closeButton.addEventListener('click', (e) => {
  popup_cart.classList.add('display_none')
  userInput.value = "";
})

submitButton.addEventListener('click', () => {
  userValue = userInput.value;
  if (userValue.length != 0) {
    localStorage.setItem(`checkbox-task${countForID}`, userValue)
    localStorage.setItem('counter',`${countForID}`)
    taskCreater(userValue, countForID)
    
  countForID++;    
    popup_cart.classList.add('display_none')
    userInput.value = ""
  }
  else {
    alert("Enter some value")
  }
})

function taskGetter(){

  valueExisted = true;
if(localStorage.length >1){
  firstCart.parentElement.remove();
  let existedkeys = Object.keys(localStorage);
 for(let i=0;i<existedkeys.length;i++){
  if(existedkeys[i] == 'counter'){
    continue;
  }
  else{
    taskCreater(localStorage.getItem(existedkeys[i]),existedkeys[i]);
   
  }
 }
countForID =parseInt(localStorage.getItem('counter')) + 1;
}
valueExisted=false;
}