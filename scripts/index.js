function closemodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "none";
}

function openmodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "block";
}

function invalidInput(input) {
    if(input.value == '') {
        input.setCustomValidity('Please fill out this field');
    }
}

/*
function createposts() {
    var storage = window.localStorage;
    var arr = new Array();
    var maintext1 = `JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.
As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, ECMAScript itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.
JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.
Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.`;
   var titletext1 = 'What is the JavaScript language all about ?'
   var item1 = {"title" : titletext1, "contents" : maintext1};
   arr.push(item1);
   var maintext2 = `In a default configuration, a model in the Ruby on Rails framework maps to a table in a database and to a Ruby file. For example, a model class User will usually be defined 
in the file 'user.rb' in the app/models directory, and linked to the table 'users' in the database. While developers are free to ignore this convention and choose differing 
names for their models, files, and database table, this is not common practice and is usually discouraged in accordance with the "convention-over-configuration" philosophy.
A controller is a server-side component of Rails that responds to external requests from the web server to the application, by determining which view file to render. 
The controller may also have to query one or more models for information and pass these on to the view. For example, in an airline reservation system, 
a controller implementing a flight-search function would need to query a model representing individual flights to find flights matching the search, and might also need to 
query models representing airports and airlines to find related secondary data. The controller might then pass some subset of the flight data to the corresponding view, 
which would contain a mixture of static HTML and logic that use the flight data to create an HTML document containing a table with one row per flight. 
A controller may provide one or more actions. In Ruby on Rails, an action is typically a basic unit that describes how to respond to a specific external 
web-browser request. Also, note that the controller/action will be accessible for external web requests only if a corresponding route is mapped to it. 
Rails encourages developers to use RESTful routes, which include actions such as create, new, edit, update, destroy, show, and index. 
These mappings of incoming requests/routes to controller actions can be easily set up in the routes.rb configuration file.`;
    
    var titletext2 = 'What is the Ruby language anyway ? Can you explain ?';
    var item2 = {"title" : titletext2, "contents" : maintext2};
    arr.push(item2);
    var maintext3 = `COVID-19 spreads from person to person mainly through the respiratory route after an infected person coughs, sneezes, sings,
talks or breathes. A new infection occurs when virus-containing particles exhaled by an infected person, 
either respiratory droplets or aerosols, get into the mouth, nose, or eyes of other people who are in close 
contact with the infected person.[35][36] During human-to-human transmission, an average 1000 infectious SARS-CoV-2 virions are thought to initiate a new infection.
The closer people interact, and the longer they interact, the more likely they are to transmit COVID-19. 
Closer distances can involve larger droplets (which fall to the ground) and aerosols, whereas longer distances only involve aerosols. 
The larger droplets may also evaporate into the aerosols (known as droplet nuclei). The relative importance of the larger droplets and 
the aerosols is not clear as of November 2020, however the virus is not known to transmit between rooms over long distances such as through air ducts. 
Airborne transmission is able to particularly occur indoors, in high risk locations, such as in restaurants, choirs, gyms, nightclubs, offices, 
and religious venues, often when they are crowded or less ventilated. It also occurs in healthcare settings, often when aerosol-generating medical 
procedures are performed on COVID-19 patients.`;
    
    var titletext3 = 'Is CoronaVirus really deadly ?';
    var item3 = {"title" : titletext3, "contents" : maintext3};
    arr.push(item3);
    var maintext4 = `Impeachment is the process by which a legislative body addresses legal charges against a government official.[1] 
National legislations differ regarding the definition and consequences of an impeachment. In many countries, 
for example those in Latin America, "impeachment" refers to a definitive destitution; an official in these jurisdictions 
is therefore only considered "impeached" when they have been removed from office. Conversely, in other jurisdictions such 
as the United States, "impeachment" refers to a previous step, that of the authority's indictment; a U.S. president 
impeached by the House of Representatives remains in power while charges are addressed by the Senate, and may be found not guilty.

Because impeachment and conviction of officials involve an overturning of the normal constitutional procedures by which individuals 
achieve high office (election, ratification, or appointment) and because it generally requires a supermajority, they are usually 
reserved for those deemed to have committed serious abuses of their office.[2] In the United States, for example, impeachment at 
the federal level is limited to those who may have committed "Treason, Bribery, or other high crimes and misdemeanors".[3] 
Impeachment exists under constitutional law in many countries around the world, including Brazil, France, India, Ireland, the 
Philippines, Russia, South Korea, and the United States. It must not be confused with a motion of no confidence, which is a 
political process of removing elected officials in representative democracies, not based on legal charges.`;
    
    var titletext4 = 'Can a president be impeached twice ?';
    var item4 = {"title" : titletext4, "contents" : maintext4};
    arr.push(item4);
    var maintext5 = `Vaccination is the administration of a vaccine to help the immune system develop protection from a disease. 
Vaccines contain a microorganism or virus in a weakened, live or killed state, or proteins or toxins from the organism. 
In stimulating the body's adaptive immunity, they help prevent sickness from an infectious disease. When a sufficiently 
large percentage of a population has been vaccinated, herd immunity results. Herd immunity protects those who 
may be immunocompromised and cannot get a vaccine because even a weakened version would harm them.[1] 
The effectiveness of vaccination has been widely studied and verified.[2][3][4] Vaccination is the most 
effective method of preventing infectious diseases;[5][6][7][8] widespread immunity due to vaccination is largely 
responsible for the worldwide eradication of smallpox and the elimination of diseases such as polio and tetanus from much of the world.

The first disease people tried to prevent by inoculation was most likely smallpox, with the first recorded use of variolation 
occurring in the 16th century in China.[9] It was also the first disease for which a vaccine was produced.[10][11] 
Although at least six people had used the same principles years earlier, the smallpox vaccine was invented in 1796 by 
English physician Edward Jenner. He was the first to publish evidence that it was effective and to provide advice on its 
production.[12] Louis Pasteur furthered the concept through his work in microbiology. The immunization was called vaccination 
because it was derived from a virus affecting cows (Latin: vacca 'cow').[10][12] Smallpox was a contagious and deadly disease, 
causing the deaths of 20–60% of infected adults and over 80% of infected children.[13] When smallpox was finally eradicated in 1979, 
it had already killed an estimated 300–500 million people in the 20th century`;
    var titletext5 = 'When is it safe to start vaccination ?';
    var item5 = {"title" : titletext5, "contents" : maintext5};
    arr.push(item5);
    storage.setItem('Gokul Kumar Gopal', JSON.stringify(arr));
}
*/