console.log('Start')

setTimeout(() => {
  console.log('Timeout 1')
  Promise.resolve().then(() => console.log('Promise 1'))
}, 0)

setTimeout(() => {
  console.log('Timeout 2')
}, 1000)

console.log('End')
