<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $date = date('Y-m-d H:i:s');

    $entry = "Date: $date\nName: $name\nMessage: $message\n---\n";

    // Append the entry to a file
    file_put_contents('guestbook.txt', $entry, FILE_APPEND | LOCK_EX);

    // Redirect back to the guestbook page
    header('Location: guestbook.php');
    exit();
}
?>