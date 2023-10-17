const closeEscape = (selElem) => {
  document.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      document.querySelector(selElem).style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default closeEscape;
