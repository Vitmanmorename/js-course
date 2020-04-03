  function hello() {
    console.log('Hello', this)
}
  const person = {
    name: 'Ilya',
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function() {
      console.log(`Name is ${this.name}`)
    }
}


