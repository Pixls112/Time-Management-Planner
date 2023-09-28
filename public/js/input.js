// JavaScript code to handle button clicks
document.getElementById("addTask").addEventListener("click", async function() {
    // Get the values from the input boxes
    const time = document.getElementById('startTime')
    const date = document.getElementById('startDate')
    const title = document.getElementById("taskDescription").value;
    // this is what combine time is suppose to look like 2023-09-25T15:30:00.000Z
    const start = `${date.value}T${time.value}:00.000`
    console.log(start);
    const currentDate = new Date(start);
    console.log(currentDate);
    const reponse = await fetch("/api/userinput/save-task",{
        method:"post",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            title,start
        })
    })
    // Clear the input fields
    document.getElementById("taskDescription").value = "";
});

document.getElementById("goBack").addEventListener("click", function(
) {
    // Implement your go back functionality here
    document.location.replace('/api/calendar')
});

