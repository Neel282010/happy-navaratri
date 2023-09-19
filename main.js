var big = document.getElementById('big')

function popup() {
  big.classList.add('animation')
  setTimeout(function (){
big.classList.remove('animation')
   },5000)
}
