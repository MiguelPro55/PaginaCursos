<?php

echo $_SERVER['HTTP_USER_AGENT'];
?>
<!DOCTYPE html>
<html>
<head>
    <style>
        .lineaslargas {
            justify-content: center;
            background-color: black;
            color: white;
            margin: 10px;
            padding: 20px;
            }
        .lineaslargas:hover{
            background-color:white ;
            color:black;
            margin: 5px;
            padding: 20px;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }

        li {
            float: left;
        }

        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        /* Change the link color to #111 (black) on hover */
        li a:hover {
            background-color:white;
            color:black;
        }


    </style>
</head>
<body>


<ul>
    <li><a href="default.asp">Home</a></li>
    <li><a href="news.asp">News</a></li>
    <li><a href="contact.asp">Contact</a></li>
    <li><a href="about.asp">About</a></li>
</ul>

<h2 style="font-variant-ligatures: normal">Pagina de cursos</h2>

<div class="lineaslargas">
    <h2>HTML</h2>
    <p>CURSO INICAL DE HTML.</p>
</div>

<div class="lineaslargas">
    <h2>JAVA</h2>
    <p>CURSO INICIAL DE JAVA.</p>
</div>

<div class="lineaslargas">
    <h2>C++</h2>
    <p>CURSO INICAL DE C++</p>
</div>



</body>










</html>

