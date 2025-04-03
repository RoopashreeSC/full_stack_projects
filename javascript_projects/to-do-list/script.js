function addd(){
    var a = document.getElementById("inputbox")
    var b = document.getElementById("list_container")
    var listitem = document.createElement("li")
    var del = document.createElement("button")
    listitem.textContent=a.value
    del.textContent = "delete"
    del.onclick = dele
    listitem.append(del)
    b.append(listitem)
    
}
function dele(event){
    event.target.parentElement.remove()
}