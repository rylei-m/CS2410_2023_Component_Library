const beeMovieScript = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground.   The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” //  SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. JANET BENSON Barry, breakfast is ready! CUT TO:- JS REVISIONS 8/13/07 1. INT. BARRY’S ROOM - CONTINUOUS BARRY Coming! SFX: Phone RINGING. Barry’s antennae vibrate as they RING like a phone. Barry’s hands are wet. He looks around for a towel. BARRY (CONT’D) Hang on a second! He wipes his hands on his sweater, and pulls his antennae down to his ear and mouth. BARRY (CONT'D) Hello? His best friend, ADAM FLAYMAN, is on the other end. ADAM Barry? BARRY Adam? ADAM Can you believe this is happening? BARRY Can’t believe it. I’ll pick you up. Barry sticks his stinger in a sharpener. SFX: BUZZING AS HIS STINGER IS SHARPENED. He tests the sharpness with his finger. SFX: Bing. BARRY (CONT’D) Looking sharp. ANGLE ON: Barry hovering down the hall, sliding down the staircase bannister. Barry’s mother, JANET BENSON, is in the kitchen. JANET BENSON Barry, why don’t you use the stairs? Your father paid good money for those. - JS REVISIONS 8/13/07 2. BARRY Sorry, I’m excited. Barry’s father, MARTIN BENSON, ENTERS. He’s reading a NEWSPAPER with the HEADLINE, Queen gives birth to thousandtuplets: Resting Comfortably. MARTIN BENSON Here’s the graduate. We’re very proud of you, Son. And a perfect report card, all B’s. JANET BENSON (mushing Barrys hair) Very proud. BARRY Ma! Ive got a thing going here. Barry re-adjusts his hair, starts to leave. JANET BENSON Youve got some lint on your fuzz. She picks it off. BARRY Ow, thats me! MARTIN BENSON Wave to us. We will be in row 118,000. Barry zips off. BARRY Bye! JANET BENSON Barry, I told you, stop flying in the house! CUT TO: SEQ. 750 - DRIVING TO GRADUATION EXT. BEE SUBURB - MORNING A GARAGE DOOR OPENS. Barry drives out in his CAR. - JS REVISIONS 8/13/07 3. ANGLE ON: Barrys friend, ADAM FLAYMAN, standing by the curb. He’s reading a NEWSPAPER with the HEADLINE: “Frisbee Hits Hive: Internet Down. Bee-stander: “I heard a sound, and next thing I knew...wham-o!.” Barry drives up, stops in front of Adam. Adam jumps in. BARRY Hey, Adam. ADAM Hey, Barry. (pointing at Barrys hair) Is that fuzz gel? BARRY A little. Its a special day. Finally graduating. ADAM I never thought I’d make it. BARRY Yeah, three days of grade school, three days of high school. ADAM Those were so awkward. BARRY Three days of college. I’m glad I took off one day in the middle and just hitchhiked around the hive. ADAM You did come back different. They drive by a bee who’s jogging. ARTIE Hi Barry! BARRY (to a bee pedestrian) Hey Artie, growing a mustache? Looks good."; // Truncate and add more script as needed
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

function createBlock() {
    const block = document.createElement('div');
    block.className = 'block';

    // Random position within the container
    const maxTop = document.getElementById('blockLoader').clientHeight - 50; // Assuming block height is 50px
    const maxLeft = document.getElementById('blockLoader').clientWidth - 50; // Assuming block width is 50px

    const randomTop = Math.floor(Math.random() * maxTop);
    const randomLeft = Math.floor(Math.random() * maxLeft);

    block.style.top = randomTop + 'px';
    block.style.left = randomLeft + 'px';

    block.addEventListener('click', () => {
        block.style.opacity = '0';
        checkAllBlocksClicked();
    });

    return block;
}

function populateBlockLoader(numBlocks) {
    const blockLoader = document.getElementById('blockLoader');
    for (let i = 0; i < numBlocks; i++) {
        blockLoader.appendChild(createBlock());
    }
}

function checkAllBlocksClicked() {
    const blocks = document.querySelectorAll('#blockLoader .block');
    const allClicked = Array.from(blocks).every(block => block.style.opacity === '0');

    if (allClicked) {
        populateBlockLoader(blocks.length); // Repopulate with the same number of blocks
    }
}

// Initial population of blocks
populateBlockLoader(5); // You can change the number of blocks to start with


document.getElementById("RS-html").innerText = `
<div id="textLoader">Loading...</div>
`;
document.getElementById("RS-css").innerText = `
#textLoader {
    max-width: 1200px;
    width: 100%;
    overflow: hidden;
  }
`;
document.getElementById("RS.js").innerText = `
const yourScript = "YOUR SCRIPT HERE";
let scriptArray = yourScript.split(' ');
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
`;

document.getElementById("CoffeeSpinner.html").innerText =`
<div class="loader">
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
<div class="cup"><span></span></div>
</div>
`
document.getElementById("CoffeeSpinner.css").innerText =`
.moveCup {
    padding-left: 10px; /*adjust this based of where you want the mug to be located on the page */
}

.loader ul {
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
    width: 60px;
    text-align: center;
    animation: wave 2.5s infinite linear;
    animation-fill-mode: forwards;
  }
  
.loader li {
    display: inline-block;
    background: #FAF1D9;
    height: 30px;
    width: 9px;
    border-radius: 0 100%;
    transform: rotate(12deg);
}
  
.cup {
    background: #F2E3B4;
    width: 60px;
    height: 54px;
    border-radius: 0 0 50% 50%;
    position: relative;
}
  
.cup:before {
    content: "";
    position: absolute;
    width: 66px;
    height: 20px;
    border-radius: 50%;
    background: inherit;
    left: -3px;
    top: -10px;
}
  
.cup:after {
    content: "";
    position: absolute;
    width: 56px;
    height: 12px;
    border-radius: 50%;
    background: #3A2F28;
    left: 2px;
    top: -6px;
}
  
.loader span {
    background: #F2E3B4;
    width: 13px;
    height: 20px;
    position: absolute; 
    right: -13px;
    top: 10px;
    border-radius: 0 50% 50% 0;
}
  
.loader span:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    background: white;
    width: 10px;
    height: 12px;
    border-radius: 0 50% 50% 0;
}
  
.loader span:after {
    content: "";
    position: absolute;
    top: 40px;
    left: -50px;
    background: #F2E3B4;
    width: 40px;
    height: 8px;
    border-radius: 50%;
}
`

document.getElementById("BlockLoader.html").innerText =`
<div id="blockLoader"></div>
`

document.getElementById("BlockLoader.css").innerText =`
#blockLoader {
    position: relative;
    width: 300px; /* Adjust as needed */
    height: 300px; /* Adjust as needed */
    border: 1px solid #ccc;
}

.block {
    position: absolute;
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    background-color: #007bff;
    transition: opacity 0.3s;
    cursor: pointer;
}
`

document.getElementById("BlockLoader.js").innerText =`
function createBlock() {
    const block = document.createElement('div');
    block.className = 'block';

    // Random position within the container
    const maxTop = document.getElementById('blockLoader').clientHeight - 50; // Assuming block height is 50px
    const maxLeft = document.getElementById('blockLoader').clientWidth - 50; // Assuming block width is 50px

    const randomTop = Math.floor(Math.random() * maxTop);
    const randomLeft = Math.floor(Math.random() * maxLeft);

    block.style.top = randomTop + 'px';
    block.style.left = randomLeft + 'px';

    block.addEventListener('click', () => {
        block.style.opacity = '0';
        checkAllBlocksClicked();
    });

    return block;
}

function populateBlockLoader(numBlocks) {
    const blockLoader = document.getElementById('blockLoader');
    for (let i = 0; i < numBlocks; i++) {
        blockLoader.appendChild(createBlock());
    }
}

function checkAllBlocksClicked() {
    const blocks = document.querySelectorAll('#blockLoader .block');
    const allClicked = Array.from(blocks).every(block => block.style.opacity === '0');

    if (allClicked) {
        populateBlockLoader(blocks.length); // Repopulate with the same number of blocks
    }
}

// Initial population of blocks
populateBlockLoader(5); // You can change the number of blocks to start with
`