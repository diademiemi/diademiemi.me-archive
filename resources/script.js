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
    background-position-x: 80%;
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
