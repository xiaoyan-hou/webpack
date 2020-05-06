function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
let p1 = loadImageAsync('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3599539347,15580799&fm=11&gp=0.jpg');
p1.then(function(img){
    document.body.appendChild(img);
    console.log('image done');
}).catch(e => {
    alert(e);
});