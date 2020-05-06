var start = +new Date()
function foo() {
  setTimeout(function() {
    console.log('setTimeout')
    if((+new Date) - start < 1000) {
      foo()
    }
  })
}
foo()