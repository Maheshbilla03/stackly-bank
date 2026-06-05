function openMenu(){
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
}

/* loader */
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("stackly-loader").classList.add("hide");
  },1200);
});

/* typing animation */
const words = ["Digital Payments", "Smart Savings", "Instant Loans", "Secure Credit Cards", "24/7 AI Support"];
let i = 0;
let j = 0;
let typing = document.getElementById("typing");

function typeText(){
  if(j < words[i].length){
    typing.textContent += words[i][j];
    j++;
    setTimeout(typeText,80);
  }else{
    setTimeout(eraseText,1200);
  }
}

function eraseText(){
  if(j > 0){
    typing.textContent = words[i].substring(0, j - 1);
    j--;
    setTimeout(eraseText,40);
  }else{
    i = (i + 1) % words.length;
    setTimeout(typeText,300);
  }
}

typeText();

/* tabs */
const categories = document.querySelectorAll(".category");
const panels = document.querySelectorAll(".panel");

categories.forEach(cat=>{
  cat.addEventListener("click",()=>{
    categories.forEach(c=>c.classList.remove("active"));
    panels.forEach(p=>p.classList.remove("active"));

    cat.classList.add("active");
    document.getElementById(cat.dataset.target).classList.add("active");
  });
});

/* chat */
function openChat(){
  document.getElementById("chatbox").style.display = "flex";
}

function closeChat(){
  document.getElementById("chatbox").style.display = "none";
}

document.getElementById("sendBtn").addEventListener("click",sendMessage);

document.getElementById("userInput").addEventListener("keydown",function(e){
  if(e.key === "Enter") sendMessage();
});

function sendMessage(){
  let input = document.getElementById("userInput");
  let text = input.value.trim();

  if(text === "") return;

  addMessage(text,"user");
  input.value = "";

  setTimeout(()=>{
    addMessage(getReply(text),"bot");
  },500);
}

function addMessage(text,type){
  let msg = document.createElement("div");
  msg.className = "msg " + type;
  msg.innerText = text;

  let box = document.getElementById("messages");
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function getReply(question){
  let q = question.toLowerCase();

  if(q.includes("account")) return "You can open a savings account online with Aadhaar and PAN card.";
  if(q.includes("loan")) return "We offer personal, home, car and business loans.";
  if(q.includes("card")) return "You can apply for debit and credit cards online.";
  if(q.includes("login")) return "Use forgot password option to reset your login password.";
  if(q.includes("branch")) return "Our branch timing is 10 AM to 4 PM, Monday to Saturday.";

  return "Please ask about account, loan, card, login or branch.";
}

/* scroll top */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click",()=>{
  window.scrollTo({top:0, behavior:"smooth"});
});
// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){
      alert("Please fill all fields");
      return;
    }

    if(phone.length !== 10){
      alert("Please enter valid 10 digit phone number");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}