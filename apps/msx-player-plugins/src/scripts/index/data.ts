import { MSXMenuRoot, MSXContentRoot, Tools } from "../lib/tvx-plugin-module.min";

/******************************************************************************/
//Interaction Data
/******************************************************************************/
export const InteractionData: MSXContentRoot = {
  type: "list",
  template: {
    type: "separate",
    layout: "0,0,2,4",
    icon: "msx-white-soft:gamepad",
    color: "msx-glass"
  },
  items: [{
    title: "Search Example",
    action: "content:request:interaction:init@" + Tools.getAbsoluteUrl("search.html")
  }, {
    enumerate: false,
    type: "button",
    offset: "0,0,0,-1",
    icon: "refresh",
    label: "Reload",
    action: "interaction:reload"
  }, {
    enumerate: false,
    type: "button",
    offset: "0,0,0,-1",
    icon: "highlight-off",
    label: "Unload",
    action: "interaction:unload"
  }]
};
/******************************************************************************/


/******************************************************************************/
//Menu Data
/******************************************************************************/
export const MenuData: MSXMenuRoot = {
  headline: "Interaction Plugin Test",
  menu: [{
    icon: "gamepad",
    label: "Interaction",
    data: InteractionData
  }]
};
/******************************************************************************/
