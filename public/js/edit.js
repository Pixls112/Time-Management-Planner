// JavaScript code to handle button clicks
document.getElementById("editTask").addEventListener("click", async function() {
    // Get the values from the input boxes
    const time = document.getElementById('editTime')
    const date = document.getElementById('editDate')
    const title = document.getElementById("updatetaskDescription").value;
    const id = document.getElementById("editTask").getAttribute('data-id');
    const start = `${date.value}T${time.value}:00.000`
    const reponse = await fetch(`/api/edit-routes/${id}`,{
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

document.getElementById("delete").addEventListener("click", async function(
    ) {
        const id = document.getElementById("editTask").getAttribute('data-id');
        // Implement your go back functionality here
        const reponse = await fetch(`/api/edit-routes/${id}`,{
            method:"delete",
            headers: {
                "Content-Type": "application/json",
              },
            
        }) 
        document.location.replace('/api/calendar')
        console.log(reponse);
    });
    
