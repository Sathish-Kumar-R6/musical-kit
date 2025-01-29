function playAudio(e) {
	const audio = document.querySelector(`audio[data-code="${e.code}"]`);
	const key = document.querySelector(`div[data-code="${e.code}"]`);

	if (!audio || !key) return;

	// Reset audio playback to allow repeated plays
	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName === 'transform') {
		e.target.classList.remove('playing');
	}
}

const keyEvents = document.querySelector('.keys');
keyEvents.addEventListener('transitionend', removeTransition);

window.addEventListener('keypress', playAudio);

