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
let quotesNumber = 0;
quotesGenerator();
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

  inputTag.id = `checkbox-task${count}`;
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
    if (imgTag.previousElementSibling.previousElementSibling.checked == true) {
      completedCount--;
    }

    cartsLength = document.querySelectorAll(".cart-container");
    taskCompleted.innerHTML = `<span class="first_value">${completedCount}</span>/<span class="second_value">${
      cartsLength.length - 1
    }</span`;
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
    lineThrough = inputTag.nextElementSibling;
    cartsLength = document.querySelectorAll(".cart-container");
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
  taskCompleted.innerHTML = `<span class="first_value">${completedCount}</span>/<span class="second_value">${
    cartsLength.length + 1
  }</span>`;
  progressbar();
  // taskCreater("have a great day", seperateCheckboxCount);
});

//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--generating quotes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
//!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--updating quotes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let count = 0;
let innerCounter = 0;
let authorCounter = 0;
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


  motivate_banner_id = setInterval(() => {
    if (count >= quotes.length) {
      count = 0;
      quotesNumber = 0;
      motivate_banner.innerText = "";
    } else {
      if (innerCounter >= quotes[count].text.length) {
        quotesNumber++;
        // clearInterval(motivate_banner_id);
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

// motivate_banner_invoker();
// setInterval(motivate_banner_invoker,8000)

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
progressbar();


closeButton.addEventListener('click',(e)=>[
  popup_cart.classList.add('display_none') 
])

submitButton.addEventListener('click',()=>
{

userValue = userInput.value;
console.log(userValue )
if(userValue.length != 0){
taskCreater(userValue,count)
count++;
popup_cart.classList.add('display_none') 
userInput.value=""
}
else{
  alert("Enter some value")
}
})