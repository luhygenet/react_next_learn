const myImage = document.querySelector('img')
console.log(typeof('hi'));
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firfox2.jpg')
    }
    else{
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

const myButton = document.querySelector('button')
const myH1 = document.querySelector('h1')

function setUsername(){
    let myName = prompt('please enter your name')
    localStorage.setItem('name', myName)
    myH1.textContent = `Mozilla is cool, ${myName}`
}

if (!localStorage.getItem('name')){
    setUsername()
}
else{
    const storedName = localStorage.getItem('name')
    myH1.textContent = `Mozilla is cool, ${storedName}`
}
myButton.onclick =() => {
    setUsername();
}
