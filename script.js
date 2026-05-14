window.addEventListener("load", function() {
    console.log("Page fully loaded with all resources!");
});

// Elegibility Form
const elegibilityForm = document.getElementById("elegibility-form");
if (elegibilityForm){
    elegibilityForm.addEventListener("submit", function(event){
        event.preventDefault();

        // Values
        const childName = document.getElementById("child-name").value;
        const age = Number(getElementById("age").value);
        const skillLevel = document.getElementById("skilllevel").value;
        const gender = document.getElementById("gender").value;

        const result = document.getElementById("result");

        // Validate
        if (!childName || !age || !skillLevel || !gender){

            result.innerText = "Please fill in.";
            result.style.color = "green";
            return;
                }

                // Age Validate
                if (age < 5 || age > 18  ){

                    result.innerText =
                    "Sorry, the program is only for children aged 5 to 18. ";

                    result.style.color = "green";
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

                else if (skillLevel === "Elite"){
                    trainingTime = "11:30 AM to 13:00 AM";
                }

                // Results
                result.innerText =
                childName +
                "Qualified for the" +
                skillLevel +
                "Program and should train from" +
                trainingTime +
                "."
                result.style.color = "green";

    });
}
   
