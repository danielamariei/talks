<?php

$connection = mysql_connect('fenrir', 'pangolin', 'DGSnNjEcZ0');
mysql_select_db('pangolin', $connection);

$email = $_GET['email'];
$password = md5($_GET['password']);

$sql = "select username
        from users
        where
        email LIKE '$email'
        AND
        password LIKE '$password'";

$result = mysql_query($sql, $connection);

$valid = (mysql_num_rows($result) == 1);
if ($valid) {
    $sql = "select username, email from users";
    $result = mysql_query($sql, $connection);

    echo "<p>The users are: </p>";

    $record = mysql_fetch_array($result);
    while ($record) {
        echo "<p> Username: " . $record['username'] . ", Email: " . $record['email'] . "</p>";
        $record = mysql_fetch_array($result);
    }
} else {
    echo "Invalid credentials.";
}

?>