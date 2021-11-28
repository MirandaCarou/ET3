/*Funcionoes Básicas de comprobación de inputs*/

/*Función para comprobar lel nombre de usuario*/
function checkUser() {

    if(checkNotEmpty("txtUsuario") && checkSize("txtUsuario", 45, 3) && checkFormat("txtUsuario", "usuario")){
        validacionOK("txtUsuario", "errorFormatoUser");
        return true;
    }else{
        validacionKO("txtUsuario", "errorFormatoUser");	
        return false;
    }
}

/*FUnción para comprobar la contraseña*/
function checkPass() {

    if(checkNotEmpty("txtPassword")&& checkSize("txtPassword", 45, 3) && checkFormat("txtPassword", "password")){
        validacionOK("txtPassword", "errorFormatoPass")
        return true;
    }else{
        validacionKO("txtPassword", "errorFormatoPass");	
        return false;
    }
}
/*Función para comprobar el nombre*/
function checkName() {

    if(checkNotEmpty("txtNombre") && checkSize("txtNombre", 45, 3) && checkFormat("txtNombre", "name")){
        validacionOK("txtNombre", "errorFormatoName")
        return true;
    }else{
        validacionKO("txtNombre", "errorFormatoName");	
        return false;
    }
}
/*Función para comprobar el apellidos*/
function checkSurname() {

    if(checkNotEmpty("txtApellidos") && checkSize("txtApellidos", 100, 3) && checkFormat("txtApellidos", "surname")){
        validacionOK("txtApellidos", "errorFormatoApell")
        return true;
    }else{
        validacionKO("txtApellidos", "errorFormatoApell");	
        return false;
    }
}
/*Función para comprobar el dni*/
function checkDni() {

    if(checkNotEmpty("txtDni") && checkSize("txtDni", 9, 9) && checkFormat("txtDni", "dni")){
        validacionOK("txtDni", "errorFormatoDni")
        return true;
    }else{
        validacionKO("txtDni", "errorFormatoDni");	
        return false;
    }
}
/*Función para comprobar la direccion*/
function checkDirre() {

    if(checkNotEmpty("txtDireccion") && checkSize("txtDireccion", 200, 3) && checkFormat("txtDireccion", "address")){
        validacionOK("txtDireccion", "errorFormatoDirr")
        return true;
    }else{
        validacionKO("txtDireccion", "errorFormatoDirr");	
        return false;
    }
}
/*Función para comprobar el telefóno*/
function checkPhone() {

    if(checkNotEmpty("txtTelefono") && checkSize("txtTelefono", 9, 9) && checkFormat("txtTelefono", "phone")){
        validacionOK("txtTelefono", "errorFormatoPhone")
        return true;
    }else{
        validacionKO("txtTelefono", "errorFormatoPhone");	
        return false;
    }
}
/*Función para comprobar el email*/
function checkEmail() {

    if(checkNotEmpty("txtEmail") && checkSize("txtEmail", 45, 11) && checkFormat("txtEmail", "email")){
        validacionOK("txtEmail", "errorFormatoEmail")
        return true;
    }else{
        validacionKO("txtEmail", "errorFormatoEmail");	
        return false;
    }
}
/*FUncion que mira si el campo es vacío*/
function checkNotEmpty(idElement){
    
    var valor = document.getElementById(idElement).value;
    var longitud = document.getElementById(idElement).value.length;

    if((valor == null) || (longitud == 0)){
        return false;
    }else{
        return true;
    }
}
/*FUnción para comprobar que el formato es correcto*/
function checkSize(idElement, sizeMax, sizeMin) {
    
    var longitud = document.getElementById(idElement).value.length;

    if((longitud > sizeMax) || (longitud < sizeMin)){
        return false;
    }else{
        return true;
    }
}
function checkFormat(idElement, campo) {
    var exprUserPass = /^[a-zA-Z0-9\u00f1\u00d1]+$/;
    var exprTelf =  /^[0-9]+$/; 
    var exprNameSurname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    var exprAddress = /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]+$/;
    var exprEmail = /\w+@\w+\.+[a-z]+$/;
    var exprDni =  /^[0-9]{8}[a-zA-Z]{1}/;
    var valor = document.getElementById(idElement).value;

    if(campo == "usuario"){
        
        if(exprUserPass.test(valor)){
            return true;
        }else{
            return false;
        }
    }else if(campo == "password"){
        
        if(exprUserPass.test(valor)){
            return true;
        }else{
            return false;
        }

    }else if(campo == "phone"){
       
        if(exprTelf.test(valor)){
            return true;
        }else{
            return false;
        }
    }else if(campo == "name"){
       
        if(exprNameSurname.test(valor)){
            return true;
        }else{
            return false;
        }

    }else if(campo == "surname"){
       
        if(exprNameSurname.test(valor)){
            return true;
        }else{
            return false;
        }
    }else if(campo == "email"){
       
        if(exprEmail.test(valor)){
            return true;
        }else{
            return false;
        }
    }else if(campo == "dni"){
       
        if(exprDni.test(valor)){
            return true;
        }else{
            return false;
        }
    }
    else if(campo == "address"){
       
        if(exprAddress.test(valor)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


 /**Función que no muestra mensaje de error y colorea el borde del input del formulario de verde*/
function validacionOK(idElement, idElementError) {

    document.getElementById(idElementError).style.display = "none";
    document.getElementById(idElement).style.borderColor = "#00e600";
}

/**Función que muestra el mensaje de error y colorea el borde del input del formulario de rojo*/
function validacionKO(idElement, idElementError) { 
    document.getElementById(idElement).style.borderColor = "#ff0000";
    document.getElementById(idElementError).setAttribute('style', "");
	
}
