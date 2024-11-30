export {};

Connector.playerSelector = '.playerControls';

Connector.artistSelector =
	'.playbackInfo__secondaryLine';

Connector.trackSelector =
	'.playbackInfo__primaryLine';

Connector.isPlaying = () => {
	// making sure selector is not null
	const playerSelector =
		document.querySelector('.playbackController__info') ??
		document.createElement('div');

	// player is playing if it has channel name AND extra div for track info as children
	return playerSelector.childElementCount === 2;
};

Connector.onReady = Connector.onStateChanged;
