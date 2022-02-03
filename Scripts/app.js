//Partner 1: 
    //Name:Ethan Bentolila
    //Student ID:100783477 

// Partner 2
    // Name: Marshall Presutto
    // Student ID: 100775601

//Date Completed: 2022-02-03

(function()
{

    //Named function
    function Start() 
    {
        //Will always occur on all pages
        switch(document.title) 
        {
            case "Home":
                DisplayHomePage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Projects":
                DisplayProjecstPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact Us":
                DisplayContactPage()
                break;
        }
        //called here as the navBar is to be added at the bottom
        DisplayOnAllPages();

    }
    
    window.addEventListener("load", Start);

})();



//called if user is on any page
function DisplayOnAllPages() {
    //Change products to projects
    let Products = document.getElementsByTagName("li")[1];
    Products.innerHTML = Products.innerHTML.replace("Products","Projects");
    Products.innerHTML = Products.innerHTML.replace("products","projects");


    //Adds Human Resources to navbar
    let Navbar = document.getElementsByTagName("ul")[0];
    let ContactUs = document.getElementsByTagName("li")[4];
    let HumanResources = document.createElement("li");
    HumanResources.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user-circle"></i> Human Resources</a>`;
    Navbar.insertBefore(HumanResources,ContactUs);


    //Used to add the navbar
    let DocumentBody = document.body;
    let BottonNavBar = document.createElement("nav");
    BottonNavBar.setAttribute("class","navbar fixed-bottom navbar-dark bg-dark");
    BottonNavBar.innerHTML =`
    <div class="container-fluid">
        <a class="navbar-brand" href="#">&#169;Copyright ${new Date().getFullYear()}</a>
    </div>
    `;
    DocumentBody.appendChild(BottonNavBar);


}

//called if the user is on the about page
function DisplayAboutPage() {
    document.getElementById("aboutHeader").textContent = "About Us";
    document.getElementById("ethanName").textContent = "Ethan Bentolila";
    document.getElementById("ethanDescription").innerHTML = `
    Currently enrolled in the CPA program, I'm 19 years old with ambition to learn as much as I can about programming.
    <br>I've been programming since I was 15 and have a decent grasp of java, c++, javascript, c# and python.
    <br> In my spare time, I like to program, play basketball and socialize.
    `;
    document.getElementById("ethanResume").innerHTML = `Resume: <a href="./Assets/resume/Ethan-Resume.pdf" download>here</a>`;

    document.getElementById("marshallName").textContent = "Marshall Presutto";
    document.getElementById("marshallDescription").innerHTML = `
    I am 25 years old and currently studying Computer Programming and Analysis at Durham College and determined to find a career working in Game Development.
    <br>I have had an interest in videogames for as long as I can remember and look to apply my artistic abilities and programming skills in the field.
    <br> Much of my spare time is spent playing videogames, I also enjoy going to the gym and sketching forms.
        `;
    document.getElementById("marshallResume").innerHTML = `Resume: <a href="./Assets/resume/Marshall-Resume.pdf" download>here</a>`;

}   



//called if the user is on the home page
function DisplayHomePage() {
    //DOM 
    document.getElementById("title1").textContent = "Welcome to";
    document.getElementById("title2").textContent = "Now";
    document.getElementById("introParagraph").textContent = "Within this site you will find the future of Software and Web Development.";

    //Used to display the contactForm once the page resets
    if(localStorage.getItem("1")) {
        let contactForm = new ContactForm();
        contactForm.deserialize(localStorage.getItem("1"));
        console.log(contactForm.toString());
        localStorage.removeItem("1");
    }



}



//called if the user is on the project page
function DisplayProjecstPage() {
    document.getElementById("projectHeader").textContent = "Projects Page";
    document.getElementById("projectParagraph").textContent = "This page contains examples of projects completed by our team!";

    document.getElementById("discordTitle").innerHTML = "Discord Bot";
    document.getElementById("sudokuTitle").textContent = "Sudoku Solver";
    document.getElementById("muralTitle").textContent = "Superhero Mural";


    document.getElementById("discordBody").innerHTML = `
    Discord bot. -used on a personal server that brings atmosphere to the server. features include:</br>
    kick</br>
    sending memes</br>
    react for roles</br>
    welcome message</br>
    creating private channels</br>
    providing solutions for puzzles in games
    `;

    document.getElementById("sudokuBody").innerHTML = `
    Unfinished sudoku solver. Can solve a sudoku game simply by filling out the array with your sudokus known values.
    </br> Finished product will have the ability to read your screen to autofill an array version of your sudoku board
    `;

    document.getElementById("muralBody").textContent = "Hand-drawn mock mural design based on the classic superhero Spider-man and his villain,Venom.";
    

    document.getElementById("sudokuDownload").innerHTML = `Program Code: <a href="./Assets/Projects/sudokubot.py" download>Download Now!</a>`;


}


//called if the user is on the project page
function DisplayServicesPage() {
    
    document.getElementById("serviceHeader").textContent = "Services";
    document.getElementById("serviceParagraph").textContent = "here is what we offer";
    
    document.getElementById("customProgHeader").textContent = "Custom Programming";
    document.getElementById("customProgBody").textContent = "We offer the application of adept programming skills to develop in multiple languages as required. Projects in languages such as C#, C++, Python, Java, JavaScript and more are all achievable.";
    
    document.getElementById("tutorHeader").textContent = "Computer Programming Tutors";
    document.getElementById("tutorBody").textContent = "We provide tutoring for various object-oreinted programming languages as well as programming concepts.";

    document.getElementById("artHeader").textContent = "Art and Renderings";
    document.getElementById("artBody").textContent = "We can provide custom hand drawn art and renderings for characters, digital options are also available.";


    document.getElementById("ContactServices1").textContent = "Contact Now";
    document.getElementById("ContactServices2").textContent = "Contact Now";
    document.getElementById("ContactServices3").textContent = "Contact Now";

 
    // Logic for contact buttons redirect
    let ContactServicesButton1 = document.getElementById("ContactServices1");

    ContactServicesButton1.addEventListener("click", function()
    {
        location.href = "contact.html";
    });

    let ContactServicesButton2 = document.getElementById("ContactServices2");

    ContactServicesButton2.addEventListener("click", function()
    {
        location.href = "contact.html";
    });

    let ContactServicesButton3 = document.getElementById("ContactServices3");

    ContactServicesButton3.addEventListener("click", function()
    {
        location.href = "contact.html";
    });

}

//called if the user is on the project page
function DisplayContactPage() {
    let SubmitButton = document.getElementById("Submit");

    SubmitButton.textContent = "Send Message";

    SubmitButton.addEventListener("click", function(event)
    {

        event.preventDefault();
        let Name = document.getElementById("Name").value;
        let Email = document.getElementById("Email").value;
        let ContactNumber = document.getElementById("ContactNumber").value;
        let Message = document.getElementById("Message").value;
        newContactForm = new ContactForm(Name,Email,ContactNumber,Message);
        console.log(newContactForm.toString());
        
        if(newContactForm.serialize()) {
            let key = "1";
            localStorage.setItem(key, newContactForm.serialize());
        }

        //Sets a timeout for 3 seconds then sends the user to a new page
        setTimeout(function(){
            location.href = "index.html";            
        },3000);
    
    });

}