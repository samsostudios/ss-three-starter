import Sketch from './scene.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  new Sketch();
});
