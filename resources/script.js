let button = document.getElementById("collapse")
let sidebar = document.getElementsByClassName("sidebar")[0]
let body = document.getElementById("body")

/**
 * Sidebar toggle button
 */
button.addEventListener("click", e => {
    body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2vh)`)
    body.classList.toggle("contracted")
})

// The fuckening.
let soundPlayer;
let buffer = ["", "", "", "", "", "", "", ""];
let tracker = 0;

// The sussy style sheet
let sussyStyle = `body {
        background-color: #00000000;
        background-image: url(../resources/eggs/drip.jpg);
        background-position-y: 30%;
        background-size: cover;
    }
    
    .sidebar {
        background-color: #ff0000;
    }

    .sidebar a {
        color: #ffff00;
    }

    .sidebar .header {
        color: #ffff00;
    }

    .box .footer {
        background-color: #00ffff;
    }`;

// The sussy song file
let sussySong = "../resources/eggs/drip.mp3"

// THE SKELETON APPEARS
let skellyStyle = `body {
    background-color: #00000000;
    background-image: url(../resources/eggs/skeleton.gif);
    background-position-y: 30%;
    background-size: cover;
}

.sidebar {
    background-color: #000000;
}

.sidebar a {
    color: #ffffff;
}

.sidebar .header {
    color: #ffffff;
}

.box .footer {
    background-color: #9d330d;
}`;

// The sussy song file
let skellySong = "../resources/eggs/skeleton.mp3"

// This will cost me my job and any chances of future employment.
let vaporeonStyle = `body {
    background-color: #ffffff;
    background-image: url(../resources/eggs/vaporeon.png);
    background-position-y: 30%;
    background-size: cover;
}

.sidebar {
    background-color: #336f8d;
}

.sidebar a {
    color: #ffffff;
}

.sidebar .header {
    color: #ffffff;
}

.box .footer {
    background-color: #78cce0;
}

.box .main p {
    font-size: 2.5rem;
    color: #000000;
}
`;

/**
 * Create stylesheet
 */
let styleSheet = document.createElement("style");

/**
 * Listen for keystrokes and match with patterns
 * 
 * @param event key event
 */
function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);

    // Check if buffer includes sus
    if (buffer.join("").includes("sus")) {
        if (tracker !== 1) {
            console.log("Sus mode engaged");
            soundPlayer.src = sussySong;
            soundPlayer.loop = true;
            soundPlayer.load();
            soundPlayer.play();
            styleSheet.innerText = sussyStyle;
            document.head.appendChild(styleSheet);
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 1;
        } else {
            console.log("Sus mode disengaged");
            soundPlayer.pause();
            document.head.removeChild(styleSheet);
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 0;
        }
    } else if (buffer.join("").includes("skeleton")) {
        if (tracker !== 2) {
            console.log("THE SKELETON APPEARS");
            soundPlayer.src = skellySong;
            soundPlayer.loop = true;
            soundPlayer.load();
            soundPlayer.play();
            styleSheet.innerText = skellyStyle;
            document.head.appendChild(styleSheet);
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 2;
        } else {
            console.log("THE SKELETON DISAPPEARS");
            soundPlayer.pause();
            document.head.removeChild(styleSheet);
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 0;
        }
    } else if (buffer.join("").includes("vaporeon")) {
        if (tracker !== 2) {
            console.log("Hey guys");
            soundPlayer.pause();
            styleSheet.innerText = vaporeonStyle;
            document.head.appendChild(styleSheet);
            document.getElementById("box").innerHTML = `
            <div class="main">
                <p>  Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more
                </p>
            </div>
            <div class="footer">
                <p id="collapse"></p>
            </div>
            `
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 2;
        } else {
            console.log("come for more fun facts!");
            document.head.removeChild(styleSheet);
            location.reload(true);
            buffer = ["", "", "", "", "", "", "", ""];
            tracker = 0;
        }
    }
}

// Initialise listener
 function listenerInit() {
    soundPlayer = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}


window.onload = () => {
    // Check if sidebar should start contracted
    if (window.innerHeight > window.innerWidth) {
        body.style.setProperty("--hide", `calc(-${sidebar.clientWidth}px + 2vw)`)
        body.classList.toggle("contracted")
    }
    // Init listener
    listenerInit();
}
