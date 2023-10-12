const tabs = () => {
  function showTabs(
    elemNavBar,
    elemLink,
    elemPict,
    elemActNav,
    elemActPict,
    elemNoClick,
    elemActClicl
  ) {
    const getElemNavBar = document.querySelector(elemNavBar),
      getelemLink = document.querySelectorAll(elemLink),
      getElemPict = document.querySelectorAll(elemPict),
      getelemNoClick = document.querySelectorAll(elemNoClick);

    getElemNavBar.addEventListener("click", (e) => {
      let target = e.target;
      let res;

      if (target.closest(elemLink)) {
        getelemLink.forEach((item, i) => {
          item.classList.remove(elemActNav);
          if (item === target) {
            item.classList.add(elemActNav);
            res = i;
          }

          getElemPict.forEach((item, i) => {
            item.classList.remove(elemActPict);
            if (res == i) {
              item.classList.add(elemActPict);
            }
          });

          getelemNoClick.forEach((item, i) => {
            item.classList.remove(elemActClicl);
            if (res == i) {
              item.classList.add(elemActClicl);
            }
          });
        });
      }
    });
  }
  showTabs(
    ".decoration_slider",
    ".fin_link",
    ".dec_descr",
    "active_fin",
    "active_dec",
    ".no_click",
    "after_click"
  );
  showTabs(
    ".glazing_slider",
    ".nav_link",
    ".glazing_content",
    "active_win",
    "active_discr"
  );
};

export default tabs;
