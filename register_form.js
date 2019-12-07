function f(){
    // getElementByIdはID指定なので、#が必要ない。
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;

    alert(`email: ${email},,,名前${name}`);
}


