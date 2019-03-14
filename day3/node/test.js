// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 0)
//   baz()
// }

// foo()

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  setTimeout(bar,1000)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()





//foo
//baz
//bar
//should be right

//foo 
//baz
//should be right after baz, before bar
//bar