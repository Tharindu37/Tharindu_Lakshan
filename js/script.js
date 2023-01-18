$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
/*animation*/

/*animation*/

/*send email*/
var btn=document.getElementById('button');
btn.addEventListener('click',function (e){
    e.preventDefault();
    var  name=document.getElementById('name').value;
    var  email=document.getElementById('email').value;
    var  message=email+'<br/>'+document.getElementById('message').value;

    Email.send({
        SecureToken: "d6af33cd-236f-412a-ad37-b7d3749b38f5",
        To : 'testonemailaddress@gmail.com',
        From : 'testonemailaddress@gmail.com',
        Subject : name,
        Body : message
    }).then(
        message => alert(message)
    );
})
/*send email*/