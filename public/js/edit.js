// JavaScript code to handle button clicks
document.getElementById("editTask").addEventListener("click", async function() {
    // Get the values from the input boxes
    const time = document.getElementById('editTime')
    const date = document.getElementById('editDate')
    const title = document.getElementById("updatetaskDescription").value;
    const reponse = await fetch("/api/userinput/save-task",{
        method:"put",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            title,start
        })
    })
    // Clear the input fields
    document.getElementById("updatetaskDescription").value = "";
    return document.location.replace('/api/calendar')
});

document.getElementById("goBack").addEventListener("click", function(
) {
    // Implement your go back functionality here
    document.location.replace('/api/calendar')
});
