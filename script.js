var selectedRow = null;

// alert
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}

// hapus semua
function clearFields(){
    document.querySelector("#namadepan").value = "";
    document.querySelector("#namabelakang").value = "";
    document.querySelector("#nomor").value = "";
}

// tambah Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const namadepan = document.querySelector("#namadepan").value;
    const namabelakang = document.querySelector("#namabelakang").value;
    const nomor = document.querySelector("#nomor").value;

    if(namadepan == "" || namabelakang == "" || nomor == ""){
        showAlert("tolong isi");
    } else {
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${namadepan}</td>
            <td>${namabelakang}</td>
            <td>${nomor}</td>
            <td>
            <a href="#" class="btn btn-success btn-sm edit" >Edit</a>
            <a href="#" class="btn btn-danger btn-sm hapus" >Hapus</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Nama Ditambahkan", "success")
        }
        else{
            selectedRow.children[0].textContent = namadepan;
            selectedRow.children[1].textContent = namabelakang;
            selectedRow.children[2].textContent = nomor;
            selectedRow = null;
            showAlert("info Edited", "info");
        }

        clearFields();
    }
});

// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#namadepan").value = selectedRow.children[0].textContent;
        document.querySelector("#namabelakang").value = selectedRow.children[1].textContent;
        document.querySelector("#nomor").value = selectedRow.children[2].textContent;
    }
})

// Delete

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("hapus")){
        target.parentElement.parentElement.remove();
        showAlert("Data Dihapus", "danger"); 
    }
})