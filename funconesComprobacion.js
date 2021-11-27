/*Funcionoes Básicas de comprobación de inputs*/

/*Función para comprobar lel nombre de usuario*/
function checkUser() {

    if(checkNotEmpty("txtUsuario")){
        validacionOK("txtUsuario", "errorFormatoUser")
        return true;
    }else{
        validacionKO("txtUsuario", "errorFormatoUser");	
        return false;
    }
}

/*FUnción para comprobar la contraseña*/
function checkPass() {

    if(checkNotEmpty("txtPassword")){
        validacionOK("txtPassword", "errorFormatoPass")
        return true;
    }else{
        validacionKO("txtPassword", "errorFormatoPass");	
        return false;
    }
}
/*Función para comprobar el nombre*/
function checkName() {

    if(checkNotEmpty("txtNombre")){
        validacionOK("txtNombre", "errorFormatoName")
        return true;
    }else{
        validacionKO("txtNombre", "errorFormatoName");	
        return false;
    }
}
/*Función para comprobar el apellidos*/
function checkSurname() {

    if(checkNotEmpty("txtApellidos")){
        validacionOK("txtApellidos", "errorFormatoApell")
        return true;
    }else{
        validacionKO("txtApellidos", "errorFormatoApell");	
        return false;
    }
}
/*Función para comprobar el dni*/
function checkDni() {

    if(checkNotEmpty("txtDni")){
        validacionOK("txtDni", "errorFormatoDni")
        return true;
    }else{
        validacionKO("txtDni", "errorFormatoDni");	
        return false;
    }
}
/*Función para comprobar la direccion*/
function checkDirre() {

    if(checkNotEmpty("txtDireccion")){
        validacionOK("txtDireccion", "errorFormatoDirr")
        return true;
    }else{
        validacionKO("txtDireccion", "errorFormatoDirr");	
        return false;
    }
}
/*Función para comprobar el telefóno*/
function checkPhone() {

    if(checkNotEmpty("txtTelefono")){
        validacionOK("txtTelefono", "errorFormatoPhone")
        return true;
    }else{
        validacionKO("txtTelefono", "errorFormatoPhone");	
        return false;
    }
}
/*Función para comprobar el email*/
function checkEmail() {

    if(checkNotEmpty("txtEmail")){
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
function checkFormat(idElement, sizeMax, sizeMin, idElementError,campo) {
    
    var valor = document.getElementById(idElement).value;
    var longitud = document.getElementById(idElement).value.length;
    if((longitud > sizeMax) || (longitud < sizeMin)){
        return false;
    }else{
        return true
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
