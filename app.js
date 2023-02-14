const memeForm = document.querySelector('#meme-form');

memeForm.addEventListener('submit', function(e){
    e.preventDefault();

    const textOnTop = document.querySelector('#textOnTop').value;
    const textOnBottom = document.querySelector('#textOnBottom').value;
    const imageUrl = document.querySelector('#imageUrl').value;

    const memeContainer = document.querySelector('#meme-container');
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
    const memeImg = document.createElement('img');
    memeImg.src = imageUrl;
    memeDiv.appendChild(memeImg);
    const memeTopText = document.createElement('div');
    memeTopText.classList.add('top-text');
    memeTopText.textContent = textOnTop;
    memeDiv.appendChild(memeTopText);
    const memeBottomText = document.createElement('div');
    memeBottomText.classList.add('bottom-text');
    memeBottomText.textContent = textOnBottom;
    memeDiv.appendChild(memeBottomText);
    memeContainer.appendChild(memeDiv);

});
