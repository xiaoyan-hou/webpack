import _ from 'lodash';
function component() {
	var element = document.createElement('pre');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack','again']);

	return element;
}

document.body.appendChild(component());