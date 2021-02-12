/******************************************************************************/
//Interaction Plugin Examples (TypeScript Edition)
/******************************************************************************/
import * as tvx from '../lib/tvx-plugin-module.min';
import { InteractionData, MenuData } from './data';

/******************************************************************************/
//Init Handler
/******************************************************************************/
class InitHandler implements tvx.TVXInteractionPluginHandler {

  handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
    console.log(dataId);
    if (dataId == 'init') {
      callback(MenuData);
    } else if (dataId == 'interaction') {
      callback(InteractionData);
    } else {
      callback(null);
    }
  }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.InteractionPlugin.setupHandler(new InitHandler());
tvx.InteractionPlugin.init();
/******************************************************************************/
