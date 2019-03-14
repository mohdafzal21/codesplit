const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
  }
  
  const child = Object.create(parent)
  child.name = 'Ryan'
  child.age = 7
  
  console.log(child.name)  
  console.log(child.age)     
  console.log(child.heritage) 