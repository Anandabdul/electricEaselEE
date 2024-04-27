let nav = document.getElementById('categoryBar');

function showCategories() {
    nav.style.left = '80px';
    nav.style.transition = '0.40s';
  }

function hideCategories() {
  nav.style.left = '-160px';
}
//Below infos are for item category
let leoPoster = document.getElementById('leoPosterCategory');
let ceramicPlanter = document.getElementById('ceramicPlanterCategory');
let christmasSticker = document.getElementById('christmasStickerCategory');
let colorPencilsOne = document.getElementById('colorPencilsOneCategory');
let sketchBook = document.getElementById('sketchBookCategory');
let faberPencil = document.getElementById('faberPencilCategory');

function stationeryCateAction() {
  // console.log(colorPencilsOne.innerHTML);
  // console.log(sketchBook.innerHTML);
  // console.log(colorPencilsTwo.innerHTML);
  document.getElementById('colorPencilsOneSlot').style.display = 'inline-block';
  document.getElementById('faberPencilSlot').style.display = 'inline-block';
  document.getElementById('sketchBookSlot').style.display = 'inline-block';

  document.getElementById('leoPosterSlot').style.display = 'none';
  document.getElementById('ceramicPlanterSlot').style.display = 'none';
  document.getElementById('christmasStickerSlot').style.display = 'none';

}

function posterCateAction() {
  document.getElementById('leoPosterSlot').style.display = 'inline-block';

  document.getElementById('colorPencilsOneSlot').style.display = 'none';
  document.getElementById('faberPencilSlot').style.display = 'none';
  document.getElementById('sketchBookSlot').style.display = 'none';
  document.getElementById('ceramicPlanterSlot').style.display = 'none';
  document.getElementById('christmasStickerSlot').style.display = 'none';
  
}

function stickerCateAction() {
  document.getElementById('christmasStickerSlot').style.display = 'inline-block';

  document.getElementById('leoPosterSlot').style.display = 'none';
  document.getElementById('colorPencilsOneSlot').style.display = 'none';
  document.getElementById('faberPencilSlot').style.display = 'none';
  document.getElementById('sketchBookSlot').style.display = 'none';
  document.getElementById('ceramicPlanterSlot').style.display = 'none';
}

function ceramicCateAction() {
  document.getElementById('ceramicPlanterSlot').style.display = 'inline-block';

  document.getElementById('christmasStickerSlot').style.display = 'none';
  document.getElementById('leoPosterSlot').style.display = 'none';
  document.getElementById('colorPencilsOneSlot').style.display = 'none';
  document.getElementById('faberPencilSlot').style.display = 'none';
  document.getElementById('sketchBookSlot').style.display = 'none';
}

function allCateAction() {
  document.getElementById('christmasStickerSlot').style.display = 'inline-block';
  document.getElementById('leoPosterSlot').style.display = 'inline-block';
  document.getElementById('colorPencilsOneSlot').style.display = 'inline-block';
  document.getElementById('faberPencilSlot').style.display = 'inline-block';
  document.getElementById('sketchBookSlot').style.display = 'inline-block';
  document.getElementById('ceramicPlanterSlot').style.display = 'inline-block';
}