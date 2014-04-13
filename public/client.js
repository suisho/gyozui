(function(){
  var $ = function(s){
    return document.querySelectorAll(s)
  }
  var labs = $(".lab div")
  var cmp = Object.keys(labs).map(function(k){
    if(k == "length") return
    var elm = labs[k]
    if(!elm) return
    var sl = elm.dataset["selector"]

    return {
      //cssText : window.getComputedStyle(elm).cssText,
      cl : window.getMatchedCSSRules(elm),
      selector : sl
    }

  })
  console.log(cmp)
})()
