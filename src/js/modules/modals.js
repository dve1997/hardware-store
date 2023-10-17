const modals = () => {
  function showModals(
    elemEvent,
    elemTarget,
    elemModal,
    elemCloseCheck,
    elemEventClose
  ) {
    const getElemEvent = document.querySelectorAll(elemEvent),
      getElemEventClose = document.querySelector(elemEventClose),
      getElemModal = document.querySelector(elemModal);

    getElemEvent.forEach((item) => {
      item.addEventListener("click", (e) => {
        let target = e.target;

        if (target.closest(elemTarget)) {
          e.preventDefault();
          getElemModal.style.display = "block";
          document.body.style.overflow = "hidden";
          if (elemEventClose) {
            getElemEventClose.style.display = "none";
          }
        }
      });
    });

    getElemModal.addEventListener("click", (e) => {
      let target = e.target;

      if (!target.closest(elemCloseCheck)) {
        getElemModal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  showModals(
    ".header_btn_wrap_block",
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_content"
  );
  showModals(".contact_us_wrap", ".phone_link_h", ".popup", ".popup_content");
  showModals(".feedback", ".phone_link_f", ".popup", ".popup_content");
  showModals(
    ".popup_calc_btn",
    ".popup_calc_btn",
    ".popup_calc",
    ".popup_calc_content"
  );
  showModals(
    ".popup_calc_button",
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_content",
    ".popup_calc"
  );
  showModals(
    ".popup_calc_profile_button",
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_content",
    ".popup_calc_profile"
  );

  // function showModalTimer(elemModal) {
  //   const getElemModal = document.querySelector(elemModal);

  //   setTimeout(() => {
  //     getElemModal.style.display = "block";
  //     document.body.style.overflow = "hidden";
  //   }, 60000);
  // }

  // showModalTimer(".popup");
};

export default modals;
