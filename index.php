<!DOCTYPE html>
<html lang="en">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap" rel="stylesheet">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hey gurl!! What's your name?</title>
    <style>
        /* Basic styling */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Crafty Girls', cursive;
            /* Updated to use the new font */
            background-image: url('assets/images/background.gif');
            background-size: 300px 300px;
            background-repeat: repeat;
            background-attachment: fixed;
        }

        .frame {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-image: url('assets/images/frame.png');
            /* Path to your frame image */
            background-size: cover;
            /* Ensures the frame covers the entire container */
            background-repeat: no-repeat;
            background-position: center;
            width: 563px;
            /* Set to match the frame image width */
            height: 437px;
            /* Set to match the frame image height */
        }

        .name-form {
            text-align: center;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            position: relative;
            /* To ensure the form sits above the frame */
            z-index: 1;
            /* Keeps the form above the background */
            max-width: 80%;
            /* Limits form width to avoid overflow */
        }

        input[type="text"] {
            padding: 10px;
            width: 80%;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #ff21ae;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #ff87e7;
        }
    </style>
</head>

<body>
    <div class="frame">
        <div class="name-form">
            <h2>Hey gurl!! What's your name?</h2>
            <form id="nameForm">
                <input type="text" id="username" name="username" placeholder="Your Name" required>
                <br>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

    <script>
        document.getElementById("nameForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            let data = new FormData();
            data.append("username", username)

            // Send data to the PHP backend
            const response = await fetch('name.php', {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
                body: data,
            });

            const result = await response.text();
            console.log(result);

            // Redirect to the next page with the username
            if (response.ok) {

                  // Set session variables
              
   
               window.location.href = `chapter_1.php`;
            } else {
                console.error("Error submitting username");
            }
        });
    </script>
</body>

</html>