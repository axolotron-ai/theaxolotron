export default function clickedAction(val) {

    const ids = ["admin_01", "admin_02", "admin_03"];
    let i = 0;

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        if (val == id) {
            element.style.backgroundColor = "white";
        } else {
            element.style.backgroundColor = "";
        }
    })
};
