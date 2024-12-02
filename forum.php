<!DOCTYPE html>
<html>
<head>
    <title>Message Board</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap'); /* Import the font */

        * {
            margin: 0;
            padding: 0;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Crafty Girls', cursive;
            background-image: url('assets/images/background.gif');
            background-size: 300px 300px;
            background-repeat: repeat;
            background-attachment: fixed;
        }

        .main {
            width: 50%;
        }

        #input_m {
            background-color: #eeeeee;
            height: 50px;
            width: 100%;
        }

        #discussionBoard {
            background-color: #ffbfed;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="main">
        <div id="discussionBoard">!!!GURLZ BATHROOM!!!</div>
        <div id="input_m">
            <textarea id="test_textarea"></textarea>
            <button id="save">post</button>
        </div>
    </div>

    <script>
        window.onload = function () {
            // Load initial messages
            fetch('clientPostMessage.php?action=load')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.textContent = data[i].message;
                        document.querySelector("#discussionBoard").appendChild(newDiv);
                    }
                });

            // Save new message
            document.querySelector("#save").addEventListener('click', function () {
                let newFormData = new FormData();
                newFormData.append("textMessage", document.getElementById("test_textarea").value);

                fetch('clientPostMessage.php', {
                    method: 'POST',
                    body: newFormData
                })
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        let newDiv = document.createElement("div");
                        newDiv.textContent = document.getElementById("test_textarea").value;
                        document.querySelector("#discussionBoard").appendChild(newDiv);
                    })
                    .catch(error => console.error('Error:', error));
            });
        }
    </script>
</body>
</html>
