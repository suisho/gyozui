(function(){
  var $ = function(s){
    return document.querySelectorAll(s)
  }
  var labs = $(".lab dummy")
  var cmp = Object.keys(labs).map(function(k){
    if(k == "length") return
    var elm = labs[k]
    if(!elm) return
    var sl = elm.dataset["selector"]

    return {
      cssText : window.getComputedStyle(elm).cssText,
      selector : sl
    }

  })
  console.log(cmp)
})()
