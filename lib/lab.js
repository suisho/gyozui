var fs = require("fs")

var css = fs.readFileSync("./fixture/sample_gh.css", "utf-8")
var migawari = require("migawari")
var flatten = require("flatten")
var rework = require("rework")

module.exports = function(){
  var reworkObj = rework(css).obj
  var selectors = getSelectors(reworkObj)
  return selectors.map(function(sl){
    try{
      return {
        html : migawari(sl).toString(),
        selector : sl
      }
    }catch(e){}
  }).filter(function(i){
    return !!i
  })
}


function getSelectors(ast){
  var rules = ast.stylesheet.rules.filter(function(rule){
    return (rule.type === "rule")
  })
  var selectors = flatten(rules.map(function(rule){
    return rule.selectors
  }))
  return selectors
}
