function getComponent() {
	return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
		var element = document.createElement('pre');
		element.innerHTML = _.join(['Hello', 'webpack','again']);
		return element;

	}).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
	document.body.appendChild(component());
});

// function component() {
// 	// timeout(100).then(value => {
// 	// 	console.log('promise',value)
// 	// });
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Hello', 'webpack','again']);
// 	return element;
// }
// document.body.appendChild(component())


