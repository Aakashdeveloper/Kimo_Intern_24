const validateFname = () => {
    console.log("test")
    let fname = document.getElementById('fname').value;
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv');
    if(fname.trim().length == 0 ){
        fout.innerText = "Please Enter FirstName";
        fdiv.classList.add('has-error')
    }else{
        fout.innerText = "";
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

const validateEmail = () => {
    let email = document.getElementById('mail').value;
    let eout = document.getElementById('eout');
    let ediv = document.getElementById('ediv');
    if(email.trim().length == 0 ){
        eout.innerText = "Please Enter Email";
        ediv.classList.add('has-error')
    }else{
        if(email.match("^([a-zA-Z0-9]+)@gmail\.([a-zA-Z]{2,5})$")==null){
            eout.innerText = "Enter Valid Email";
            ediv.classList.add('has-error')
        }else{
            eout.innerText = "";
            ediv.classList.remove('has-error')
            ediv.classList.add('has-success')
        }
       
    }
}