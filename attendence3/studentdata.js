function uploads(){
    document.write("")
}
function deleting(){
    document.write("<html><button><a href='studentdata.html'>home</a></button><style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><form method='post' action='http://localhost/attendence3/studentdata.php'><label for='yearr'>Enter year:</label><input type='text' name='yearr'/><br><label for='branch'>Enter Branch:</label><input type='text' name='branch'/><input type='submit' name='delete' value='delete'></form></html>")
    
}
function deleterec(){
    document.write("<html><button><a href='studentdata.html'>home</a></button><style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><form method='post' action='http://localhost/attendence3/studentdata.php'><label for='yearr'>Enter year:</label><input type='text' name='yearr'/><br><label for='branch'>Enter Branch:</label><input type='text' name='branch'/><input type='submit' name='drops' value='delete'></form></html>")
    
}

function modifys(){
    document.write("<html><button><a href='studentdata.html'>home</a></button><style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><label for='change'>choose which you want to change:</label><button onclick='newname()' >Name</button><button onclick='newphno()'>Phone number</button>")
}
function newname(){
    document.write("<html><button><a href='studentdata.html'>home</a></button><style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><form method='post' action='http://localhost/attendence3/studentdata.php'><label for='name'>Enter new name:</label><input type=text name='name'/><label for='yearr'>Enter year:</label><input type='text' name='yearr'/><br><label for='branch'>Enter Branch:</label><input type='text' name='branch'/><label for='id'>enter regno:</label><input type='text' value='' name='id' /><input type='submit' name='modify' value='modify'></form></html>");
}
function newphno(){
        document.write("<html><button><a href='studentdata.html'>home</a></button><style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><form method='post' action='http://localhost/attendence3/studentdata.php'><label for='phnoo'>Enter new number:</label><input type=text name='phnoo'/><label for='yearr'>Enter year:</label><input type='text' name='yearr'/><br><label for='branch'>Enter Branch:</label><input type='text' name='branch'/><label for='id'>enter regno:</label><input type='text' value='' name='id' /><input type='submit' name='modify1' value='modify1'></form></html>");
        
}