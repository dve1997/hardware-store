"use strict";

import "./modules/slider";
import modules from "./modules/modals";
import tabs from "./modules/tabs";

document.addEventListener("DOMContentLoaded", (e) => {
  modules();
  tabs();
});
