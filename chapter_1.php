<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gurlz Luv Clothez!</title>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js"></script>
    <script src="scenes/MainScene.js"></script> <!-- Path to your MainScene file -->
    <script src="scenes/Room.js"></script> <!-- Path to Room file -->
    <!-- <script src="scenes/Money.js"></script> Path to Room file -->
    <script src="main.js" defer></script> <!-- Path to your main.js, using defer -->

    <style>
        body {
            margin: 0;
            overflow: hidden;
        }

        canvas {
            display: block;
        }

        /* Modal styles */
        #myModal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close-button:hover,
        .close-button:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <!-- The Modal -->
    <div id="myModal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p></p> <!-- This is where the message will be injected -->
        </div>
    </div>

    <script>
        // Ensure `MainScene` is available globally
        window.MainScene = MainScene;

        // Modal functionality
        document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("myModal");
            const closeButton = document.querySelector(".close-button");

            // Function to open the modal
            window.showModal = function (message) {
                modal.querySelector("p").textContent = message; // Update modal text
                modal.style.display = "block"; // Show the modal
            };

            // Function to close the modal
            closeButton.onclick = function () {
                modal.style.display = "none"; // Hide the modal
            };

            // Close the modal when the user clicks anywhere outside of the modal
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none"; // Hide the modal
                }
            };
        });
    </script>
</body>

</html>