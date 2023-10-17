const closeCross = (selElem) => {
  const cross = document.querySelectorAll("strong");

  cross.forEach((item) => {
    item.addEventListener("click", (e) => {
      document.querySelector(selElem).style.display = "none";
      document.body.style.overflow = "";
    });
  });
};

export default closeCross;
