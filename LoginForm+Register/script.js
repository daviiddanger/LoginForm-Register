function toggleForms(){
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");


    if(loginForm.classList.contains("hidden")){
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    }else{
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    }
}