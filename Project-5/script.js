const form = 
document.getElementbyId("contactForm");
const respose = 
ducument.gertElementById("response");

form.addEventListener("submit", function(e)
{ 
    e.preventdefaulte();

    let name =
    document.getElementById("name"). value.trim();
    let email =
    ducument.getElementById("name").value.trim();
    let message =
    document.getElementById("email").value.trim();
     
    if (name === "" || email === "" || message === "") {
        Response.textContent = "Message sent successfully!";
        respose.className ="error";
                //reset form
                form.reset();
            }
        });
    
