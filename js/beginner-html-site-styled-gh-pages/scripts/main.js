myHeading = document.querySelector("h1");
myButton = document.querySelector('button')
myHeading.textContent = 'Hello you :)'

myimage = document.querySelector('img')

myimage.addEventListener("click", () => {
    const mySrc = myimage.getAttribute("src");
    console.log('hi')
    if (mySrc === 'images/firefox-icon.png'){
        myimage.setAttribute("src", 'images/cat.jpg')
    }
    else{
        myimage.setAttribute("src", 'images/firefox-icon.png')
    }
})

const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});



function setUsername(){
  const myName = prompt('enter your name');
  if (!myName){
    myName = 'stranger'
  }
  localStorage.setItem('name',myName);
  myHeading.textContent = `Mozilla is fire, ${myName}`;
}


if (!localStorage.getItem("name")){
  setUsername()
}
else{
  const storedName = localStorage.getItem("name")
  myHeading.textContent = `Mozilla is fire and u've been here before, ${storedName}:)`;
}

myButton.addEventListener('click', () => {
  setUsername();
});