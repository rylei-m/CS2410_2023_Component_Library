let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function toggleDrawer() {
    var drawer = document.getElementById("navigationDrawer");
    drawer.classList.toggle("open");
}

// Close the drawer when clicking outside of it
document.addEventListener('click', function(event) {
    var drawer = document.getElementById("navigationDrawer");
    var isClickInsideDrawer = drawer.contains(event.target);
    var isToggleButton = event.target.matches('button'); // Adjust the selector as needed

    if (!isClickInsideDrawer && !isToggleButton) {
        drawer.classList.remove("open");
    }
});


function changeSlide() {
    // Remove 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add 'active' class to current slide
    slides[currentSlide].classList.add('active');

    // Update currentSlide index
    currentSlide = (currentSlide + 1) % totalSlides;
}

// Set interval for slide change
setInterval(changeSlide, 3000); // Adjust time as needed   https://sites.google.com/a/ausdg.us/force-and-motion/the-entire-bee-movie-script

const beeMovieScript = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground." //   The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. JANET BENSON Barry, breakfast is ready! CUT TO:- JS REVISIONS 8/13/07 1. INT. BARRY’S ROOM - CONTINUOUS BARRY Coming! SFX: Phone RINGING. Barry’s antennae vibrate as they RING like a phone. Barry’s hands are wet. He looks around for a towel. BARRY (CONT’D) Hang on a second! He wipes his hands on his sweater, and pulls his antennae down to his ear and mouth. BARRY (CONT'D) Hello? His best friend, ADAM FLAYMAN, is on the other end. ADAM Barry? BARRY Adam? ADAM Can you believe this is happening? BARRY Can’t believe it. I’ll pick you up. Barry sticks his stinger in a sharpener. SFX: BUZZING AS HIS STINGER IS SHARPENED. He tests the sharpness with his finger. SFX: Bing. BARRY (CONT’D) Looking sharp. ANGLE ON: Barry hovering down the hall, sliding down the staircase bannister. Barry’s mother, JANET BENSON, is in the kitchen. JANET BENSON Barry, why don’t you use the stairs? Your father paid good money for those. - JS REVISIONS 8/13/07 2. BARRY Sorry, I’m excited. Barry’s father, MARTIN BENSON, ENTERS. He’s reading a NEWSPAPER with the HEADLINE, Queen gives birth to thousandtuplets: Resting Comfortably. MARTIN BENSON Here’s the graduate. We’re very proud of you, Son. And a perfect report card, all B’s. JANET BENSON (mushing Barrys hair) Very proud. BARRY Ma! Ive got a thing going here. Barry re-adjusts his hair, starts to leave. JANET BENSON Youve got some lint on your fuzz. She picks it off. BARRY Ow, thats me! MARTIN BENSON Wave to us. We will be in row 118,000. Barry zips off. BARRY Bye! JANET BENSON Barry, I told you, stop flying in the house! CUT TO: SEQ. 750 - DRIVING TO GRADUATION EXT. BEE SUBURB - MORNING A GARAGE DOOR OPENS. Barry drives out in his CAR. - JS REVISIONS 8/13/07 3. ANGLE ON: Barrys friend, ADAM FLAYMAN, standing by the curb. He’s reading a NEWSPAPER with the HEADLINE: “Frisbee Hits Hive: Internet Down. Bee-stander: “I heard a sound, and next thing I knew...wham-o!.” Barry drives up, stops in front of Adam. Adam jumps in. BARRY Hey, Adam. ADAM Hey, Barry. (pointing at Barrys hair) Is that fuzz gel? BARRY A little. Its a special day. Finally graduating. ADAM I never thought I’d make it. BARRY Yeah, three days of grade school, three days of high school. ADAM Those were so awkward. BARRY Three days of college. I’m glad I took off one day in the middle and just hitchhiked around the hive. ADAM You did come back different. They drive by a bee who’s jogging. ARTIE Hi Barry! BARRY (to a bee pedestrian) Hey Artie, growing a mustache? Looks good."; // Truncate and add more script as needed
let scriptArray = beeMovieScript.split(' ');
let textLoader = document.getElementById('textLoader');
let index = 0;

function addWord() {
    if (index < scriptArray.length) {
        textLoader.innerText += scriptArray[index] + ' ';
        index++;
    } else {
        textLoader.innerText = "Loading...";
        index = 0;
    }
}

setInterval(addWord, 500); // Adjust timing as needed

document.querySelectorAll('#blockLoader .block').forEach(block => {
    block.addEventListener('click', () => {
        block.style.opacity = '0';
    });
});


document.getElementById("navdrawer-html").innerText = `
<div id="navigationDrawer" class="nav-drawer">
    <a href="#">Insert Your Link Here</a>
    <a href="#">Insert Your Link Here</a>
    <a href="#">Insert Your Link Here</a>
    <!-- Add more links as needed -->
</div>
<button onclick="toggleDrawer()">Toggle Drawer</button>
`;
document.getElementById("navdrawer-css").innerText = `
.nav-drawer {
    width: 250px;
    position: fixed;
    top: 0;
    right: -250px; /* Starts off screen */
    height: 100%;
    background-color: #321d09; /*Change to Your Liking */
    overflow-x: hidden;
    transition: 0.5s; /* Change Speed for Smooth transition */
    padding-top: 60px;
}

.nav-drawer a {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.3s;
}

.nav-drawer a:hover {
    color: #f1f1f1;
}

.nav-drawer.open {
    left: 0; /* Moves into view */
    z-index: 1000;
}
  
`;
