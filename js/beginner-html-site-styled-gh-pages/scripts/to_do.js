mylist = document.getElementById('ItemList')

myButton = document.getElementsByTagName('button')

myVal = document.getElementsByTagName('input')
function addItem(myVal){
    value = myVal.value.trim()
    i = 0
    while (true) {
    
        if ((value !== "") && (value !== null )){
            const new_task = document.createElement('li')
            new_task.textContent = value
            mylist.appendChild(new_task)
            myVal.value = ""
            break
        }
        else{
            flag = false
            if (i == 0){
            value = prompt('please enter a value?')
                if (value !== null) {  
                value = value.trim();
                }
            }
            else if (i == 1){

                value = prompt('seriously?')
                if (value !== null) {  
                value = value.trim();
                }
            }
            else{
                alert('your loss');
                flag = true
            }
            if (flag){
            break
            }
        }
        i += 1;
}
}
myButtonFinal = myButton[0]
myButtonFinal.addEventListener('click', () => {
    console.log('pressed');
    addItem(myVal[0]);
})