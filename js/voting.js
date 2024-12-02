window.onload = function () {


    //GET THE INITIAL MESSAGES FROM THE MESSAGE BOARD
    fetch('../competition.php?action=load')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        // //go through the results and show
        // for(let i =0; i< data.length; i++){
        //     let newDiv = document.createElement("div");                          
        //     newDiv.textContent = data[i].message;
        //     document.querySelector("#discussionBoard").appendChild(newDiv);
            
        // }
    })}