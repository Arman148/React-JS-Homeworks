const $ = (id) => {
    return document.getElementById(id)
}

const keyName = $('key');
const val = $('value');
const get = $('get');
const set = $('set');
const remove = $('remove');

function SetFunctional (get, set, remove) {
    get.onclick = GetStorage;
    set.onclick = SetNewData;
    remove.onclick = Remove;
}
SetFunctional(get, set, remove)


function GetStorage () {
    for(i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`)
    }
}

function SetNewData () { 
    const name = keyName.value;
    const value = val.value;
    localStorage.setItem(`${name}`, value)
}

function Remove () {
    localStorage.clear();
}

