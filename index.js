let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    },i * 80);
  });

    nextWord.style.opacity ="1";
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(() => {
        letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex? 0 : currentWordIndex + 1;

};

changeText();
setInterval(changeText,3000);



// active menu 


let menuli = document.querySelectorAll("header ul li a");
let section =document.querySelectorAll("section");

function activeMenu() {
  let len=section.length;
  while (--len && window.scrollY + 97 <section[len].offsetTop) {}
  menuli.forEach(sec => sec.classList.remove("active"));
  menuli[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll",activeMenu);

// sticky navar 

const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 50);
  
})

// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");  
let navList = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
}

//parallax////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show-items");
      }else{
        entry.target.classList.remove("show-items");
      }
    })
})


const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


function message() {
  confirm("request send successfully!!🤗")
}

//hire me 

function hire() {
  alert(`contact on "7795405756"`)
}


//contact 
// JavaScript for contact form validation and submission
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const form = document.querySelector("form");
  const nameInput = form.querySelector("input[placeholder='your Name']");
  const emailInput = form.querySelector("input[placeholder='your Gmail']");
  const addressInput = form.querySelector("input[placeholder='your Address']");
  const numberInput = form.querySelector("input[placeholder='your Number']");
  const messageInput = form.querySelector("textarea");

  // Add click event listener for the submit button
  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    if (validateForm()) {
      // Show success message
      alert("Thank you, " + nameInput.value + "! Your message has been sent successfully.");
      
      // Reset the form fields
      form.reset();
    }
  });

  function validateForm() {
    // Basic validation check for required fields
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }

    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return false;
    }

    if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    if (addressInput.value.trim() === "") {
      alert("Please enter your address.");
      addressInput.focus();
      return false;
    }

    if (numberInput.value.trim() === "") {
      alert("Please enter your number.");
      numberInput.focus();
      return false;
    }

    if (!/^\d+$/.test(numberInput.value)) {
      alert("Please enter a valid phone number.");
      numberInput.focus();
      return false;
    }

    if (messageInput.value.trim() === "") {
      alert("Please enter a message.");
      messageInput.focus();
      return false;
    }

    return true; // All fields are valid
  }

  function isValidEmail(email) {
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

