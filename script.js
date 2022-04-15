const feed = document.getElementById("feed");
const feedShadow1 = document.getElementById('feedshadow');
const feedShadow2 = document.getElementById('feedshadow2');
const sidescroll = document.getElementById("sidescroll");
const sidescrollShadow1 = document.getElementById('topshadow');
const sidescrollShadow2 = document.getElementById('topshadow2');

let root = document.documentElement;

let totalCells = 0;
const cells = document.getElementsByClassName('feedpanel');
const cellArray = Array.from(cells);
cellArray.forEach( () => {
    totalCells++;
});

//Responsively create rows based on column count and feedpanel count.
function updateRows() {
    const grid = document.getElementById('feed');
    const gridComputedStyle = window.getComputedStyle(grid);
    const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
    root.style.setProperty('--rowcount', Math.ceil(totalCells/gridColumnCount));
}

//Update shadows to signify scroll position.
function updateShadow(target) {
    //Declare shadows based on target.
    let topShadow = eval(`${target.id}Shadow1`);
    let bottomShadow = eval(`${target.id}Shadow2`);

    //Remove bottom shadow if scrolled all the way down, and return it otherwise.
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        bottomShadow.classList.remove('showshadow')
        void bottomShadow.offsetWidth;
        bottomShadow.classList.add('hideshadow')
    } else {
        bottomShadow.classList.remove('hideshadow')
        void bottomShadow.offsetWidth;
        bottomShadow.classList.add('showshadow')
    }

    //Remove top shadow if scrolled all the way up, and return it otherwise.
    if (target.scrollTop === 0) {
        topShadow.classList.remove('showshadow')
        void topShadow.offsetWidth;
        topShadow.classList.add('hideshadow')
    } else {
        topShadow.classList.remove('hideshadow')
        void topShadow.offsetWidth;
        topShadow.classList.add('showshadow')
    }
}

updateRows();
updateShadow(feed);
updateShadow(sidescroll);


window.addEventListener('resize', () => {
    updateShadow(feed);
    updateShadow(sidescroll);
    updateRows();
    checkAllOverflow();
});

feed.addEventListener('scroll', () => {
    updateShadow(feed);
});
sidescroll.addEventListener('scroll', () => {
    updateShadow(sidescroll);
});

const feedParas =  document.getElementsByClassName('inner');
const feedParasArray = Array.from(feedParas);

//Check if text if overflowing its container.
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

//Check all paragraphs in feed panels for overflow, and display see more text accordingly.
function checkAllOverflow() {
    feedParasArray.forEach(para => {
        if (isOverflown(para)) {
            para.parentElement.querySelector('.seemore').innerText = 'See more';
            para.parentElement.querySelector('.seemore').style.borderStyle = 'solid';
        } else {
            para.parentElement.querySelector('.seemore').innerText = ' ';
            para.parentElement.querySelector('.seemore').style.borderStyle = 'none';
        }
    });
}

checkAllOverflow();

const darkButton = document.getElementById('darkmode');
let darkMode = false;

darkButton.addEventListener('click', () => {
    if (!darkMode) {
        root.style.setProperty('--primary', '#465362');
        root.style.setProperty('--backdrop', '#1e212b');
        root.style.setProperty('color', 'white' );

        const sidebar = document.getElementById('sidebar');
        sidebar.style.backgroundColor =  '#0f4f48';
        root.style.setProperty('--panel-shadow', 'inset 0px 16px 10px -6px black' );
        root.style.setProperty('--panel-shadow2', 'inset 0px -16px 10px -6px black' );
        root.style.setProperty('--searchbar-shadow', 'inset 5px 5px 10px black');
        root.style.setProperty('--def-box-shadow', '0px 6px 5px black');
        root.style.setProperty('--def-drop-shadow', 'drop-shadow(0px -5px 5px black)');
        root.style.setProperty('--button-color', 'invert(100%) sepia(0%) saturate(172%) hue-rotate(281deg) brightness(113%) contrast(100%)');
        darkMode = true;
    } else {
        root.style.setProperty('--primary', '#dffdff');
        root.style.setProperty('--backdrop', '#e5e1ee');
        root.style.setProperty('color', 'black' );

        const sidebar = document.getElementById('sidebar');
        sidebar.style.backgroundColor =  'var(--accent)';
        root.style.setProperty('--panel-shadow', 'inset 0px 8px 10px -6px grey' );
        root.style.setProperty('--panel-shadow2', 'inset 0px -8px 10px -6px grey' );
        root.style.setProperty('--searchbar-shadow', 'inset 5px 5px 10px rgb(172, 172, 172)');
        root.style.setProperty('--def-box-shadow', '0px 3px 5px grey');
        root.style.setProperty('--def-drop-shadow', 'drop-shadow(0px -3px 3px grey)');
        root.style.setProperty('--button-color', 'filter: invert(100%) sepia(99%) saturate(2%) hue-rotate(128deg) brightness(111%) contrast(101%)');
        darkMode = false;
    }
});


