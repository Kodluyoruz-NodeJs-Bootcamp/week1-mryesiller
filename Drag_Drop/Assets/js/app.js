var dragged;

document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.className == "dropzone1") {
      event.target.style.background = "purple";
    } else if (event.target.className == "dropzone2") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    if (event.target.className == "dropzone1") {
      event.target.style.background = "";
    } else if (event.target.className == "dropzone2") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className == "dropzone1") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      dragged.src = "/Assets/images/cry.png";
      event.target.appendChild(dragged);
    } else if (event.target.className == "dropzone2") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      dragged.src = "/Assets/images/smile.png";
      event.target.appendChild(dragged);
    }
  },
  false
);
