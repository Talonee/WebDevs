const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower0 = document.createElement("div");
const follower1 = document.createElement("div");
const follower2 = document.createElement("div");
follower0.classList.add("cursor", "cursor__follower0");
follower1.classList.add("cursor", "cursor__follower1");
follower2.classList.add("cursor", "cursor__follower2");
root.appendChild(follower0);
root.appendChild(follower1);
root.appendChild(follower2);

root.addEventListener("mousemove", (e) => {
    setPosition(follower0, e);
    setPosition(follower1, e);
    setPosition(follower2, e);
    setPosition(cursor, e);
});

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}
