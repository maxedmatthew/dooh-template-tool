import { readPsd } from 'ag-psd';
import { writePsdBuffer } from 'ag-psd';
import 'ag-psd/initialize-canvas';
import axios from 'axios';
const writePSD = (data, templateData) => {
  console.log('writePSD')
  console.log(templateData)
  const originalPsd = readPsd(Buffer.from(data.data), { skipLayerImageData: false, skipCompositeImageData: false, skipThumbnail: false });

  if (templateData.currentCategory === 'Frame') {
    console.info(`writePSD met Frame template`);
    originalPsd.children.splice(1, 2);

  } else if (templateData.currentCategory === 'Product') {
    console.info(`writePSD met Product template`);
    originalPsd.children.splice(2, 1);
    originalPsd.children.splice(0, 1);
  } else {
    console.info(`writePSD met Message template`);
    originalPsd.children.splice(0, 2);
  }

  const chosenElements = templateData.chosenElements.filter(element => element.selected);
  console.log(chosenElements);
  console.log(originalPsd.children[0].children);
  //DOE DINGEN MET DE DINGEN DIE ELEMENT.SELECTED === true
  chosenElements.forEach(item => {
    console.log(item)
  })


  const buffer = writePsdBuffer(originalPsd);
  const returnData = new FormData();
  returnData.append('ori', JSON.stringify(buffer))
  // returnData.append('template', JSON.stringify(templateData))

  axios.post('/writeNewFile', returnData, {
  }).then(res => {
    console.log(res.statusText)
  }).catch(function (error) {
    console.log(error)
  })
}

export default writePSD;
