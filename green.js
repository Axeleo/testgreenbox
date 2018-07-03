var boxes = document.querySelectorAll('.box')

// for (i = 0; i < boxes.length; i++){
//   boxes[i].addEventListener('click', function () {
//     let greenBoxCount = document.querySelectorAll('.green')
//     event.target.classList.add('green')
//     if (greenBoxCount.length === boxes.length){
//       for (let j = 0; j < greenBoxCount.length; j++)
//       greenBoxCount.classList.add('red')
//     } 
//   })
// }


// with forEach

boxes.forEach(function (){
  addEventListener('click', function () {
    let greenBoxCount = document.querySelectorAll('.green')
    event.target.classList.add('green')
    if (greenBoxCount.length === boxes.length) {
      greenBoxCount.forEach(function (greenBox) {
        greenBox.classList.add('red')
        boxes.forEach(function (box) {
          box.classList.remove('green')
        })
      })
    }
  })
})