window.addEventListener("load", function() {
    console.log("Page fully loaded with all resources!");
});

// Elegibility Form

document.getElementById('elegibility-form').addEventListener('submit',function(event){
    event.preventDefault();

    
        // Values
        const childName = document.getElementById("child-name").value;
        const age = Number(document.getElementById("age").value);
        const skillLevel = document.getElementById("skilllevel").value;
        const gender = document.getElementById("gender").value;

       
        // Validate
        if (!childName || !age || !skillLevel || !gender){

            alert("Please fill in the field.")
            return;
                }

                // Age Validate
                if (age < 5 || age > 18  ){

                    alert("Sorry, the program is only for children aged 5 to 18. ")
                    return;
                }

                // Training Time
                let trainingTime ="";

                // Beginner & Intermediate
                if (
                    skillLevel === "beginner" ||
                    skillLevel === "intermediate"
                ){
                    trainingTime = "9:00 AM to 11:00 AM";
                }

                else if (skillLevel === "elite"){
                    trainingTime = "11:30 AM to 13:00 AM";
                }

                // Results
                const resultDisplay = document.getElementById("result");

                 resultDisplay.innerText =
                childName +
                "Qualified for the" +
                skillLevel +
                "Program and should train from" +
                trainingTime +
                "."
                resultDisplay.style.color = "black";

                setTimeout(function(){
                    location.reload();
                },15000);

    });

   
