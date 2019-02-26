

<DOCTYPE!>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Sample Form</title>
        <script type="text/javascript" src="js/form.js">
        </script>
        <!--Loading JS Files-->
        <link rel="stylesheet" type="text/css" href="CSSF/grid.css">
        <link rel="stylesheet" type="text/css" href="CSSF/mystyle.css">
        <link href="https://fonts.googleapis.com/css?family=Lato|Libre+Baskerville" rel="stylesheet">

    </head>


    <body>
        <div class="container">
            <form action="" method="post">
                <div class="twelve ">
                    <h1> <span class="underline">Submit Article</span></h1>
                </div>

                <div class="six">
                    <h3>Author</h3>
                    <input type="text" name="firstname" id="firstname" placeholder="First Name">
                    <h5 class="error" id="firstNameError"></h5>

                </div>

                <div class="six">
                    <h3><br></h3>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name">
                    <h5 class="error" id="lastNameError"></h5>
                </div>

                <div class="six">
                    <h3>Email Adress</h3> <input type="text" name="emailaddress" id="emailaddress">
                    <h5 class="error" id="emailNameError"></h5>
                </div>
                <div class="six">
                    <h3>Date</h3> <input type="date" name="date" id="date">
                    <h5 class="error" id="dateNameError"></h5>
                </div>

                <div class="six">
                    <h3>Title</h3> <input type="text" name="title" id="title">
                    <h5 class="error" id="titleNameError"></h5>
                </div>

                <div class="twelve">
                    <h3>Headline</h3> <input type="text" name="headline" id="headline">
                    <h5 class="error" id="headlineNameError"></h5>
                </div>

                <div class="six">
                    <h3>Story Type</h3>
                    <select name="storytype" id="storytype">
                        <option></option>
                        <option value="domestic_news">Domestic News</option>
                        <option value="international_news">International News</option>
                        <option value="business">Business</option>
                        <option value="politics">Politics</option>
                        <option value="sports">Sports</option>
                        <option value="weather">Weather</option>
                        <option value="interviews">Interviews</option>
                        <option value="opinion">Opinion</option>
                        <option value="editorial">Editorial</option>
                        <option value="entertaiment">Entertaiment</option>
                    </select>
                    <h5 class="error" id="storytypeNameError"></h5>
                </div>
                <br>
                
            <div class="twelve"> 
                <textarea name="area" rows="40" cols="150">Enter your comments.... </textarea>
            </div>
                

        <br>
                <div class="seven">
                    <input type="submit" id="submit" name="submit" value="Submit">
                    <input type="submit" id="submit" name="submit" value="Reset">
                </div>
                
           

            </form>
        </div>
        <script type="text/javascript" src="js/form.js">
        </script>
        <!--Loading JS Files-->


    </body>

    </html>



    <!--Block elements are displayed underneath each other and if we have to make it inline we type in display:inline -->
