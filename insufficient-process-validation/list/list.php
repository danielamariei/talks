<?php

    $action = $_POST['submit'];
    $auth = $_POST['authenticated'];

    if ($action === "listFile") {
        if ($auth === "on") {
            echo "Here is your file.";
        } else {
            echo "<strong>You are not authenticated!</strong>";
        }

    } else if ($action == "listDirectories") {
        echo "Here is your list of directories.";
    }

?>