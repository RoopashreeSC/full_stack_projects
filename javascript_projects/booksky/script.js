var popupoverlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
function add(){
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
}
function closepopup(){
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
}
var overallcontainer = document.querySelector(".container")
var addabook = document.getElementById("addthisbook")
var booktitle = document.getElementById("booktitleinput")
var bookauthor = document.getElementById("bookauthorinput")
var bookdescription = document.getElementById("bookdescriptioninput")
addabook.addEventListener("click", function(){
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2><h5>${bookauthor.value}</h5><p>${bookdescription.value}</p><button onclick="deletebook(event)">delete</button>`
    overallcontainer.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()

}