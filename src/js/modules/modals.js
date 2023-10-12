"use strict";

const modules = () => {
  function showModals(
    elemEvent,
    elemTarget,
    elemModal,
    elemClose,
    elemCloseCheck
  ) {
    const getElemEvent = document.querySelector(elemEvent),
      getElemModal = document.querySelector(elemModal);

    getElemEvent.addEventListener("click", (e) => {
      let target = e.target;

      if (target.closest(elemTarget)) {
        e.preventDefault();
        getElemModal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });

    getElemModal.addEventListener("click", (e) => {
      let target = e.target;

      if (target.closest(elemClose)) {
        getElemModal.style.display = "none";
        document.body.style.overflow = "";
      }
      if (!target.closest(elemCloseCheck)) {
        getElemModal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        getElemModal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  showModals(
    ".header_btn_wrap_block",
    ".popup_engineer_btn",
    ".popup_engineer",
    ".str_e",
    ".popup_content"
  );
  showModals(
    ".contact_us_wrap",
    ".phone_link_h",
    ".popup",
    ".str_c",
    ".popup_content"
  );
  showModals(
    ".feedback",
    ".phone_link_f",
    ".popup",
    ".str_c",
    ".popup_content"
  );

  function showModalTimer(elemModal) {
    const getElemModal = document.querySelector(elemModal);

    setTimeout(() => {
      getElemModal.style.display = "block";
      document.body.style.overflow = "hidden";
    }, 3000);
  }

  showModalTimer(".popup");
};

export default modules;
