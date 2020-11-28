import {PostInteractions} from './axiosHelpers';

const eventParser = ({target, timeStamp}, widgetName) => {
  debugger;
  var Interactions = {

    "element": target.nodeName,
    "time": JSON.stringify(timeStamp),
    "widget": widgetName
  };
  PostInteractions(Interactions);
};

export default eventParser;