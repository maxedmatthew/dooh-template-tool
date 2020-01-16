import $ from 'jquery';
import writePSD from './writePsd';

const startProces = (activeTemplate) => {
  $.post('/readOriPsd', function (data) {
    writePSD(data, activeTemplate)
  })
}

export default startProces;
