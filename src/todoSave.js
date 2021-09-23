function todoSave(name, data) {
    if(!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify([]));
    };

    if(!(data instanceof Array)) {
        return JSON.parse(localStorage.getItem(name));
    }else{
        localStorage.setItem(name, JSON.stringify(data))
        return JSON.parse(localStorage.getItem(name)); 
    }   
}

export default todoSave
