<!DOCTYPE html>
<html>
    <head>
        <title>
            studentdata
        </title>
        <style>
body {
    font-family: Arial, sans-serif;
}

nav {
    background-color: #333;
    overflow: hidden;
}

nav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

nav a:hover {
    background-color: rgb(255, 177, 61);
}
        </style>
        <script type="text/javascript" src="studentdata.js"></script>
    </head>
        <title>
            delete list
        </title>
        <link rel="stylesheet" type="text/css" href="studentdata.css">
        <script type="text/javascript" src="studentdata.js"></script>
    </head>
    <body>
        <nav>
            <a href="studentdata.html">home</a> 
            <a href="attendence.html">attendance</a> 
            <a method="post" href="http://localhost/attendence3/studentlist.php" >insert record</a> | 
            <a method="post" href="http://localhost/attendence3/studentdata1.php">upload new student list</a> 
            <a method="post" href="http://localhost/attendence3/studentdata2.php"name='deleting1'>delete list</a> 
            <a method="post" href="http://localhost/attendence3/studentdata3.php"name='deleterec1'>delete all records</a> 
            <a method="post" href="http://localhost/attendence3/studentdata4.php"name='modifys1'>modify content</a>
            <a method="post" href="http://localhost/attendence3/show.php">show details</a>
        </nav>
        <style>a{ text-decoration:none;}body {font-family: Arial, sans-serif;background-color: #f5f5f5;    }    form {        text-align: center;        width: 300px;        height: auto;        background-color: rgba(234, 15, 51, 0.141);        box-shadow: 5px 10px 18px rgba(255, 255, 0, 0.5);        padding: 20px;        margin: 100px auto;        border-radius: 10px;        border: 2px solid blue;    }     input[type='text'],    input[type='password'] {        width: 100%;        padding: 10px;        margin: 5px 0 15px;        border: none;        background: #f1f1f1;    }   input[type='submit'] {        background-color: blue;        color: white;        padding: 10px 20px;        border: none;        cursor: pointer;        width: 100%;        margin-top: 10px;} input[type='submit']:hover {background-color: darkblue;}.message {color: red;font-size: 12px;margin-top: 10px;}</style><form method='post' action='http://localhost/attendence3/studentdata.php'><label for='yearr'>Enter year:</label><input type='text' name='yearr'/><br><label for='branch'>Enter Branch:</label><input type='text' name='branch'/><input type='submit' name='delete' value='delete batch list'></form>