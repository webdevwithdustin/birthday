<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Now That's What I Call Old! Vol. 40</title>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <header>
        <div class="white-block"><img src="wordart.png"></div>
        <nav>
            <button><a href="index.html">Homepage</a></button>
            <button><a href="info.html">Info</a></button>
            <button><a href="rsvp.html">RSVP</a></button>
            <button><a href="guestbook.php">Guestbook</a></button>
        </nav>
    </header>
    <main>
        <div class="white-block">
            <h2 class="green-yellow-text">Sign our Guestbook!</h2>
            <form action="guestbook.php" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <br>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br>
                <button type="submit">Submit</button>
            </form>
            <div>
                <?php
    if (file_exists('guestbook.txt')) {
        echo nl2br(file_get_contents('guestbook.txt'));
    } else {
        echo "No entries yet. Be the first to sign!";
    }
    ?>
            </div>
        </div>
    </main>
    <footer>
        <div class="dancing-baby">
            <div class="tenor-gif-embed" data-postid="22415743" data-share-method="host" data-aspect-ratio="0.728125" data-width="100%"></div>
        </div>
        <div align='center'><a href='https://www.free-website-hit-counter.com'><img src='https://www.free-website-hit-counter.com/zc.php?d=6&id=3854&s=1' border='0' alt='Free Website Hit Counter'></a><br /><small><a href='https://www.free-website-hit-counter.com' title="Free Website Hit Counter">Free website hit counter</a></small></div>
    </footer>
</body>
<script src="hit-counter.js" type="text/javascript"></script>
<script type="text/javascript" async src="https://tenor.com/embed.js"></script>

</html>
