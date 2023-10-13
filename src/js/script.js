"use strict";

import "./modules/slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

document.addEventListener("DOMContentLoaded", (e) => {
  modals();
  tabs();
  forms();
});
