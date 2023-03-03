function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(move){
	if( move === 1){
		return 'kamień';
	}
	else if( move === 2){
		return 'papier';
	}
	else if( move === 3){
		return 'nożyce';
	}
}

