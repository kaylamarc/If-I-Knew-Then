function doLogout() {
    window.location.href = "index.html";
}

function showCreateModal() {
    var modal = document.getElementById("create-modal");
    modal.style.display = "flex";

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    document.getElementById("addPostButton").onclick = function () {
        addPost();
    }
}

function hideCreateModal() {
    var modal = document.getElementById("create-modal");
    modal.style.display = "none";
}

function addPost() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    var tableBody = document.querySelector("#t-body");

    var row = document.createElement("tr");
    
    var td = document.createElement("td");
    
    td.innerHTML = `
<div class="thread-stuff">
    <div class="thread-header">
        <h1 class="thread-name">${title}</h1>
        <div class="arrows-div">
            <button class="arrow"><i class="fas fa-arrow-up"></i></button>
            <button class="arrow"><i class="fas fa-arrow-down"></i></button>
        </div>
    </div> 
    <span class="thumb-text">${content}</span>
</div>`;
    
    row.appendChild(td);
    
    tableBody.appendChild(row);
    row.classList.add("row");

    hideCreateModal();
}