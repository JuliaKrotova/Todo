const blocksWrapper = document.querySelector('.blocks-wrapper');
const buttonDecision = document.querySelector('.button--decision');

if (blocksWrapper && buttonDecision) {
  buttonDecision.addEventListener('click', () => {
    blocksWrapper.classList.add('decision');
  });
}
