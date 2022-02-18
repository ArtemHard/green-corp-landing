
// не работает https://partner.sberuniversity.online/programs/16896/item/697400
const INCREASE_NUMBER_ANIMATION_SPEED = 50;



function increaseNumberAnimationStep(i, element, endNumber) {

    if (i <= endNumber) {
        if ( i === endNumber) {
            element.innerText = i + '+' ;
        } else {
            element.innerText = i;
        }
        i++;
    }
    setTimeout((increaseNumberAnimationStep(0, element, 5000), INCREASE_NUMBER_ANIMATION_SPEED ));
  }
  
  function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0, element, 5000);
  }
  

initIncreaseNumberAnimation();