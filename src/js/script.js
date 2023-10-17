"use strict";

import "./modules/slider";
import closeEscape from "./modules/closeescape";
import closeCross from "./modules/closecross";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import dataForms from "./modules/dataForms";
import timer from "./modules/timer";
import images from "./modules/images";

document.addEventListener("DOMContentLoaded", (e) => {
  let dataForm = {};

  closeEscape(".popup_engineer");
  closeEscape(".popup");
  closeEscape(".popup_calc");
  closeEscape(".popup_calc_profile");
  closeEscape(".popup_calc_end");
  closeCross(".popup_engineer");
  closeCross(".popup");
  closeCross(".popup_calc");
  closeCross(".popup_calc_profile");
  closeCross(".popup_calc_end");
  modals();
  tabs();
  forms(dataForm);
  dataForms(dataForm);
  timer();
  images();
});
