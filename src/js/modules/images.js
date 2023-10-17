const images = () => {
  const popupImg = document.createElement("div"),
    imgBig = document.createElement("img"),
    works = document.querySelector(".works");

  popupImg.classList.add("popup");
  popupImg.style.justifyContent = "center";
  popupImg.style.alignItems = "center";
  works.append(popupImg);

  works.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;

    if (target.closest(".preview")) {
      let href = target.parentNode.href;
      imgBig.src = href;
      popupImg.prepend(imgBig);
      popupImg.style.display = "flex";
    }
  });

  popupImg.addEventListener("click", (e) => {
    let target = e.target;

    if (!target.closest("img")) {
      popupImg.style.display = "none";
    }
  });
};

export default images;
