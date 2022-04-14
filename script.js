const feed = document.getElementById("feed");
const shadow1 = document.getElementById('feedshadow');
const shadow2 = document.getElementById('feedshadow2');
const sidescroll = document.getElementById("sidescroll");
const topshadow1 = document.getElementById('topshadow');
const topshadow2 = document.getElementById('topshadow2');

let root = document.documentElement;

const grid = document.getElementById('feed');
const gridComputedStyle = window.getComputedStyle(grid);
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
const totalCells = gridRowCount * gridColumnCount;

function update() {
    //Hide bottom feed shadow if content doesn't overflow.
    if (feed.scrollHeight === feed.clientHeight){
        shadow2.classList.remove('showshadow');
        shadow2.classList.add('hideshadow');
    } else if (shadow2.classList.contains('hideshadow')){
        shadow2.classList.remove('hideshadow');
        shadow2.classList.add('showshadow');
    }
    //Hide bottom sidefeed shadow if content doesn't overflow
    if (sidescroll.scrollHeight === sidescroll.clientHeight){
        topshadow2.classList.remove('showshadow');
        topshadow2.classList.add('hideshadow');
    } else if (topshadow2.classList.contains('hideshadow')){
        topshadow2.classList.remove('hideshadow');
        topshadow2.classList.add('showshadow');
    }

    const grid = document.getElementById('feed');
    const gridComputedStyle = window.getComputedStyle(grid);
    const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
    
    
    root.style.setProperty('--rowcount', Math.ceil(totalCells/gridColumnCount));
    console.log(` Total Cells: ${totalCells}`)
    console.log(`rows: ${Math.ceil(totalCells/gridColumnCount)}`);
    //console.log(`columns: ${gridColumnCount}`);

}

//Check window size to update shadows and row size.
update();
window.addEventListener('resize', () => {
    update();
});

//Add or remove shadows and their animations based on scroll position.
function getScrollPosition() {

    if (feed.scrollHeight - feed.scrollTop === feed.clientHeight) {
        if (shadow2.classList.contains('showshadow')) {
            shadow2.classList.remove('showshadow');
            void shadow2.offsetWidth;
            shadow2.classList.add('hideshadow');
        }
    } else if (feed.scrollTop === 0) {
        if (shadow1.classList.contains('showshadow')) {
            shadow1.classList.remove('showshadow');
            void shadow1.offsetWidth;
            shadow1.classList.add('hideshadow');
        }
    } else {
        if (shadow2.classList.contains('hideshadow')) {
            shadow2.classList.remove('hideshadow');
            void shadow2.offsetWidth;
            shadow2.classList.add('showshadow');
        }
        if (shadow1.classList.contains('hideshadow')) {
            shadow1.classList.remove('hideshadow');
            void shadow1.offsetWidth;
            shadow1.classList.add('showshadow');
        }
    }    
}

function getScrollPosition2() {

    if (sidescroll.scrollHeight - sidescroll.scrollTop === sidescroll.clientHeight) {
        console.log('bottom')
        if (topshadow2.classList.contains('showshadow')) {
            topshadow2.classList.remove('showshadow');
            void topshadow2.offsetWidth;
            topshadow2.classList.add('hideshadow');
        }
    } else if (sidescroll.scrollTop === 0) {
        console.log('top')
        if (topshadow1.classList.contains('showshadow')) {
            topshadow1.classList.remove('showshadow');
            void topshadow1.offsetWidth;
            topshadow1.classList.add('hideshadow');
        }
        console.log(topshadow1.classList)
        console.log(topshadow2.classList)
    } else {
        console.log('not touching top or bottom')
        if (topshadow2.classList.contains('hideshadow')) {
            topshadow2.classList.remove('hideshadow');
            void topshadow2.offsetWidth;
            topshadow2.classList.add('showshadow');
        }
        if (topshadow1.classList.contains('hideshadow')) {
            topshadow1.classList.remove('hideshadow');
            void topshadow1.offsetWidth;
            topshadow1.classList.add('showshadow');
        }
        console.log(topshadow1.classList)
        console.log(topshadow2.classList)
    }    
}



feed.addEventListener('scroll', getScrollPosition);
sidescroll.addEventListener('scroll', getScrollPosition2);