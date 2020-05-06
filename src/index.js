// import timeout from './promise';
import _ from 'lodash';
// import promise from './promise6';
// import image from './image';
// import { binary_search1, binary_search2 } from './lib/binary-search';
// import { fibonacci }  from './lib/recursive';
// import { selectionSort } from './lib/sort';
// import { search } from './lib/graph';
// import { event } from './lib/event-emitter'


// var arr = [5,13,19,21,37,56,64,75,80,88,92];
// var result = binary_search1(arr, 98);
// console.log(result);
// let res2 = binary_search2(arr, 0, arr.length - 1, 98);
// console.log('res2', res2);

// function getComponent() {
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
// 		var element = document.createElement('pre');
// 		element.innerHTML = _.join(['Hello', 'webpack','again']);
// 		return element;

// 	}).catch(error => 'An error occurred while loading the component');
// }
// getComponent().then(component => {
// 	document.body.appendChild(component());
// });

function component() {
	// timeout(100).then(value => {
	// 	console.log('promise',value)
	// });
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack','again']);
	return element;
}
document.body.appendChild(component())


