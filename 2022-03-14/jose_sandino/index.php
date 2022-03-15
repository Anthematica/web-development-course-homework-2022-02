<?php 
    $data = serialize($_POST);
    $db = fopen('database.txt', 'a+');
    fwrite($db, "$data\n");
    fclose($db);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <style>
        body{
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
        }
        form{
            text-align: center;
        }
        .hobbies{
            display:flex;
            column-gap:20px;
        }
        table { 
            margin-block-start:20px;
            width:800px; 
            border:1px solid black;
        }

        td, th { 
            width:50px; 
            border:1px solid black;
            padding:5px;
            background:gold;
            text-align:center; 
            vertical-align:middle; 

        }
    </style>
</head>
<body>
    <h1>Hobbies</h1>
    <form action="index.php"  method="post">
        <label for="first_name">First Name</label>
        <input 
            id="first_name" 
            name="first_name" 
            required 
            type="text"
            value="<?php echo $_POST['first_name'] ?? '' ?>">
        <br>
        <br>
        <label>
            Last Name
            <input 
                name="last_name" 
                required 
                type="text"
                value="<?php echo $_POST['last_name'] ?? '' ?>">
        </label>
        <br>
        <br>
        <h3>Select your Hobbies</h3>
        <div class=hobbies>
            <label> 
                Soccer
                <input 
                name="hobbies[soccer]" 
                type="checkbox" 
                value="soccer"            
                <?php if(isset($_POST['hobbies']['soccer'])){ echo 'checked';} ?> >
            </label>
            <label>
                Skate
                <input 
                name="hobbies[skate]" 
                type="checkbox" 
                value="skate"
                <?php if(isset($_POST['hobbies']['skate'])){ echo 'checked';} ?> >
            </label>
            <label>
                Programming
                <input 
                name="hobbies[programming]" 
                type="checkbox" 
                value="programming"
                <?php if(isset($_POST['hobbies']['programming'])){ echo 'checked';} ?> >
            </label>
            <label>
                Travel
                <input 
                name="hobbies[travel]" 
                type="checkbox" 
                value="travel"
                <?php if(isset($_POST['hobbies']['travel'])){ echo 'checked';} ?> >
            </label>
        </div>
        <br>
        <br>   
        <button type="reset">Reset</button>
        <button type="submit">Send</button>
    </form>

    <table>
        <thead>
            <tr>
                <th class="tableTitle">First Name</th>
                <th class="tableTitle">Last Name</th>
                <th class="tableTitle">Hobbies</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $db2 = fopen('database.txt', 'r+'); 
                    while(! feof($db2)) /* feof parametro para conocer si se ha alcanzado el limite del archivo */
                    {
                        $database = fgets($db2);
                        $users = unserialize($database);
            ?>
                <tr>
                    <td><?php echo $users['first_name'] ?? '' ?></td>
                    <td><?php echo $users['last_name'] ?? '' ?></td>
                    <td>
                        <?php  echo $users['hobbies']['soccer'] ??  '' ?>
                        <?php echo $users['hobbies']['skate'] ??  '' ?>
                        <?php echo $users['hobbies']['programming'] ??  '' ?>
                        <?php echo $users['hobbies']['travel'] ?? '' ?>
                    </td>  
                </tr>
            <?php } ?>
            <?php fclose($db2);?>                
        </tbody>
    </table>                           
</body>
</html>