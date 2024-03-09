window.addEventListener('mousedown', ev => {
    if (ev.button   === 0 &&  // left click(0)
        ev.buttons  === 3 &&  // left click(1) + right click(2)
        ev.altKey   === false &&
        ev.ctrlKey  === false &&
        ev.metaKey  === false &&
        ev.shiftKey === false) {
        window.oncontextmenu = () => false;
        history.back();
        setTimeout(() => {window.oncontextmenu = null;}, 100);
    }
    else if (
        ev.button   === 2 &&  // right click(2)
        ev.buttons  === 3 &&  // left click(1) + right click(2)
        ev.altKey   === false &&
        ev.ctrlKey  === false &&
        ev.metaKey  === false &&
        ev.shiftKey === false) {
        const prevHandler = window.oncontextmenu;
        window.oncontextmenu = () => false;
        history.forward();
        setTimeout(() => {window.oncontextmenu = null;}, 100);
    }
}, true);
