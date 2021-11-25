const frame = document.querySelector("#app");

const homeButton = document.querySelector("button#home");
const addNewButton = document.querySelector("button#addNew");

homeButton.onclick = () => {
    frame.setAttribute("src", "./pages/dashboard.html");
};

addNewButton.onclick = () => {
    frame.setAttribute("src", "./pages/addnew.html");
};
