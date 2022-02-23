let lowerCase
let upperCase
let specialChar
let addNum
let length
let password

const lenghtPrompt = () =>{
  length = parseInt(prompt('How long do you want your password? (Enter a number between 8 and 128)'))
  
  if(isNaN(length) == true){
    alert('Please enter a number')
    lenghtPrompt()
  } else if (length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128')
    lenghtPrompt()
  }
  
}

const typePrompt = () =>{
  lowerCase = confirm('Confirm if you want lowercase letters')
  upperCase = confirm('Confirm if you want uppercase letters')
  addNum = confirm('Confirm if you want numbers')
  specialChar = confirm('Confirm if you want special characters')
}

const generate = () => {
  let lower ='qwertyuiopasdfghjklzxcvbnm'
  let upper ='QWERTYUIOPASDFGHJKLZXCVBNM'
  let number = '1234567890'
  let special = '!@#$%^&*()`-=~_+'
  let chosen = ''
  let password = ''

  if (lowerCase === true) {
    chosen += lower
  }
  if (upperCase === true) {
    chosen += upper
  }
  if (addNum === true) {
    chosen += number
  }
  if (specialChar === true) {
    chosen += special
  }

for(let i = 0; i < length; i++){
  let rIndex = Math.floor(Math.random() * chosen.length)
  let rChar = chosen[rIndex]
  password += rChar
}
  return password
}

// specialCheck = (_string) =>{
//   verified = true
//   let matchPattern = _string.match(/!@#$%^&*()`-=~_+/g);
//   if (matchPattern != null) {
//     verified = true
//   }
//   else {
//     verified = false
//   }

//   return verified
// }
// numCheck = (_string) =>{
//   verified = true
//   let matchPattern = _string.match(/\d+/g);
//   if (matchPattern != null) {
//     verified = true
//   }
//   else {
//     verified = false
//   }
    
//   return verified
// }

const check = () =>{
  let verifiedPass = generate()

  if(lowerCase){
  let verifiedLower = false;

  for(let i = 0; i < length; i++){
    let lowerCheck = verifiedPass[i]
     if(lowerCheck === lowerCheck.toLowerCase()){
      verifiedLower = true
     }
    }

    if (verifiedLower === false) {
      check()
      console.log('no lower')
    }
  }


  if (upperCase) {
    let verifiedUpper = false;

    for (let i = 0; i < length; i++) {
      let upperCheck = verifiedPass[i]
      if (upperCheck === upperCheck.toLowerCase()) {
        verifiedUpper = true
      }
    }
    if (verifiedUpper === false) {
      check()
      console.log('no upper')
    }
  }



  // if(addNum){
  //   let verifiedNum = numCheck(verifiedPass)
  
  //   if (verifiedNum === false) {
  //     check()
  //     console.log('no num')
  //   }
  // }

  // if (specialChar) {
  //   let verifiedSpec = specialCheck(verifiedPass)

  //   if (verifiedSpec === false) {
  //     check()
  //     console.log('no spec')
  //   }
  // }

  console.log(verifiedPass)
  
  return verifiedPass
}

document.getElementById('generate').addEventListener('click', ()=>{
  lenghtPrompt()
  typePrompt()
  password = check()
  document.getElementById('password').innerHTML = password
  console.log(length, lowerCase, upperCase)
})

