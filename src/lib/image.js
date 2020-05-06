import Viewer from 'viewerjs';

function genImage() {
    const c = document.createElement('div');
    const img = document.createElement('img');
    img.id = 'image';
    img.src = 'http://weiliicimg1.pstatp.com/weili/ms/131629219963878888.webp';
    c.appendChild(img);
    document.body.appendChild(c);
    const viewer = new Viewer(document.getElementById('image'), {
        // inline: true,
        viewed() {
            viewer.zoomTo();
        },
    });
    console.log('viewer', viewer);
}
genImage();
export default genImage;