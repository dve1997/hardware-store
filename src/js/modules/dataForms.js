const dataForms = (data) => {
  const windowFormCont = document.querySelector(".balcon_icons"),
    windowIcon = document.querySelectorAll(".balcon_icons img"),
    windowIconBig = document.querySelectorAll(".big_img img"),
    windowWidth = document.querySelector("#width"),
    windowHeight = document.querySelector("#height"),
    windowType = document.querySelector("#view_type"),
    checkboxFormCont = document.querySelector(".popup_calc_profile_content"),
    checkboxType = document.querySelectorAll(".checkbox");

  let count;

  windowFormCont.addEventListener("click", (e) => {
    let target = e.target;

    if (target.closest(".balcon_icons img")) {
      windowIcon.forEach((item, i) => {
        item.classList.remove("do_image_more");

        if (item === target) {
          item.classList.add("do_image_more");
          count = i;
          data.formBalc = ++i;
        }
      });
    }

    windowIconBig.forEach((item, i) => {
      item.classList.remove("active_big");

      if (i === count) {
        item.classList.add("active_big");
      }
    });
  });

  windowWidth.addEventListener("input", (e) => {
    windowWidth.value = windowWidth.value.replace(/\D/, "");
    data.widthBalc = +windowWidth.value;
  });

  windowHeight.addEventListener("input", (e) => {
    windowHeight.value = windowHeight.value.replace(/\D/, "");
    data.heightBalc = +windowHeight.value;
  });

  windowType.addEventListener("input", (e) => {
    data.typeWinBalc = windowType.value;
  });

  checkboxFormCont.addEventListener("input", (e) => {
    let target = e.target;

    if (target.closest(".checkbox")) {
      checkboxType.forEach((item) => {
        item.removeAttribute("checked");
      });
      target.setAttribute("checked", "");
      data.typeWeth = target.nextElementSibling.id;
    }
  });
};

export default dataForms;
