function save_form(){
    var n = document.getElementById("name").value;
    var a = document.getElementById("age").value;
    var e = document.getElementById("email").value;
    var g = document.getElementsByName("gender");
    var c = document.getElementById("dropdown");
    var rad_val = get_rad_val(g);
    var d_d = c.options[c.selectedIndex].text;
    console.log(n,a,rad_val,e,d_d);
    var li = [n,a,rad_val,d_d,e]
    var table2 = document.getElementById("tab2")
    var row = document.createElement("tr")
    for (const i of li){
        var col = document.createElement("td")
        col.textContent = i
        row.append(col)
    }
    var last_col = document.createElement("td");
    var last_btn = document.createElement("button");
    last_btn.textContent = "delete"
    last_btn.onclick = function(event){
        dele(event)
    }
    last_col.append(last_btn);
    row.append(last_col);
    row.style.textAlign = "center";
    table2.append(row);

    
}
function get_rad_val(radio){
    let sel_val = null;
    for (const i of radio){
        if(i.checked){
            sel_val = i.value;
            break;
        }
    }
    return sel_val
}
function dele(event){
    var e = event.target.parentElement
    e.parentElement.remove()
}