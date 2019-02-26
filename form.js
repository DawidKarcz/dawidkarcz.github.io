/*as soon as this window loads - listen out for something */

window.addEventListener("load", function () {
    var submitBtn = document.getElementById("submit");
    /*declearing a relevent variable for example submit button,the = asigns the value to the document where it grabs it by its ID.Getting element by its ID gives us more control.We use classes for CSS and we Use ID for javascript. */
    submitBtn.addEventListener("click", onSubmitForm);
    /*Submitbtn now is the variable asigned to a submit button,the addEventLisener is listening for an action which is  */

    function onSubmitForm(evt) {

        var userName = document.getElementById("firstname");
        var userNameField = userName.value;

        var lastname = document.getElementById("lastname");
        var lastNameField = lastname.value;

        var emailaddress = document.getElementById("emailaddress");
        var emailaddressField = emailaddress.value;
        
         var dateName = document.getElementById("date");
        var dateNameField = date.value;
        
        var titleName = document.getElementById("title");
        var titleNameField = title.value;
        
         var headlineName = document.getElementById("headline");
        var headlineNameField = headline.value;


        /*declearing a variable called username we are asigning Username to that name */

        /*here we are declearing a variable we are asigning the content that the user types in the username  */

            if (userNameField === "&#10004;") {
                firstNameError.innerHTML = "You need to enter valid first name!!"
                document.getElementById("firstNameError").style.borderColor = "#f44242";
                document.getElementById("firstname").style.borderColor = "#f44242";
            }

            else{
                document.getElementById("firstNameError").style.borderColor = "#62f441";
                document.getElementById("firstname").style.borderColor = "#62f441";
            }

            if (lastNameField === "") {
                lastNameError.innerHTML = "You need to enter valid last name!!"
                document.getElementById("lastNameError").style.borderColor = "#f44242";
                document.getElementById("lastname").style.borderColor = "#f44242";
             }

            else{

                document.getElementById("lastNameError").style.borderColor = "#62f441";
                document.getElementById("lastname").style.borderColor = "#62f441";

            }

            if (emailaddressField === "") {
                emailNameError.innerHTML = "You need to enter valid email address!!"
                document.getElementById("emailNameError").style.borderColor = "#f44242";
                document.getElementById("emailaddress").style.borderColor = "#f44242";
             }

            else{

                 document.getElementById("emailNameError").style.borderColor = "#62f441";
                document.getElementById("emailaddress").style.borderColor = "#62f441";
            }


            if (dateNameField === "") {
                dateNameError.innerHTML = "You need to enter valid date!!"
                document.getElementById("dateNameError").style.borderColor = "#f44242";
                document.getElementById("date").style.borderColor = "#f44242";
            }

            else{

                 document.getElementById("dateNameError").style.borderColor = "#62f441";
                document.getElementById("date").style.borderColor = "#62f441";
            }

              if (titleNameField === "") {
                titleNameError.innerHTML = "You need to enter valid title!!"
                document.getElementById("titleNameError").style.borderColor = "#f44242";
                document.getElementById("title").style.borderColor = "#f44242";
            }

             else{

                 document.getElementById("titleNameError").style.borderColor = "#62f441";
                document.getElementById("title").style.borderColor = "#62f441";
            }

            if (headlineNameField === "") {
                headlineNameError.innerHTML = "You need to enter valid first name!!"
                document.getElementById("headlineNameError").style.borderColor = "#f44242";
                document.getElementById("headline").style.borderColor = "#f44242";
            }

            else{
                document.getElementById("headlineNameError").style.borderColor = "#62f441";
                document.getElementById("headline").style.borderColor = "#62f441";

            }


            /*   lastNameError.innerHTML="You need to enter valid last name!!!"
                emailNameError.innerHTML="You need to enter your correct email adress !"
                 dateNameError.innerHTML="You need to enter your correct date !"
                titleNameError.innerHTML="You need to enter your correct title!"
            if(headlineNameField === ""){
                 headlineNameError.innerHTML="You need to enter your correct headline!"

                document.getElementById("headlineNameError").style.borderColor="#f44242";

                document.getElementById("headline").style.borderColor="#f44242";
            }*/
            /*usernameerror is the id we have asigned to the h5.The innerhtml goes into the html and writes into it,gives us to dynamically upload and write it to the page */


        evt.preventDefault();
        console.log("yo put in the firstnme!")

    };

})



/*We are listening out and if the window loads.Once the window loads we run a function.We are going to then first write to the console to run the console and declare the variable.1 equals assings of value to something it puts something in tha variable.We then work with that variable.Listen to our variable listen to our content of our variable nad what we are listening to the variable is for the user to click.If the user clicks we run that function.If the user clicks on the button we have to do something and look at something. evtpreventDefault makes to prevent from refreshing so the user is able to run and see the function.It is a new language.JavaScript gives us interactivity for example after we clikc on a submit button we can see then how many times we have clicked */
