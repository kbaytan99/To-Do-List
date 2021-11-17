// Javascript DOM
var plusButton = document.getElementById('buttonAddList');
// Functin to add new item to your To Do App
function addItemToYourList(){
    if(document.querySelector('#newTaskId').value !== ''){
        let trList = document.createElement('tr');
        let thList = document.createElement('td');
        let text = document.createTextNode(document.querySelector('#newTaskId').value);
        thList.appendChild(text);
        document.getElementById('listTBody').appendChild(trList).appendChild(thList); 
        localStorage.setItem(localStorage.length, document.querySelector('#newTaskId').value);
    }else{
        document.getElementById('newTaskId').style.borderColor="Red";
        document.getElementById('newTaskId').placeholder="You need to fill here!!!";
    }
}

// Load all storaged data to the table
function loadStorageFromLocal(){
        for(let i = 0; i < localStorage.length; i++){
            let trList = document.createElement('tr');
            let thList = document.createElement('td');
            var text = document.createTextNode(i + ': ' + localStorage.getItem(localStorage.key(i)));
            thList.appendChild(text);
            document.getElementById('listTBody').appendChild(trList).appendChild(thList); 
            }
}

// When you write change the color to Grey
function changeColorYourType(){
    document.getElementById('newTaskId').style.borderColor="grey";
}

// Function for delete all the local Storage in one click 
function deleteLocalStorageOnClick(){
    try{
        localStorage.clear();
        location.reload();
    }catch{
        console.error('ERROR:deleteLocalStorageOnClick');
    }
}