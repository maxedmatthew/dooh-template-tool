import $ from 'jquery';
import writePSD from './writePsd';

const startProces = (activeTemplate) => {
  $.post('/readOriPsd', function (data) {
    return writePSD(data, activeTemplate)
  })
}

export default startProces;
