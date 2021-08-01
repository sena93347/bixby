http=require("http")
var console = require("console")
module.exports.function = function search (category,language,country) {
   var url = "https://saurav.tech/NewsAPI/everything/cnn.json"
   var options={}
   var ret= []
   if(typeof(category) != "undefined")
   {
     options["category"]=category
   }
   if(typeof(language) != "undefined")
   {
     options["language"]=language
   }
   if(typeof(country) != "undefined")
   {
     options["country"]=country
   }
   try{
   res = http.getUrl(url,{query:options})
   ret=JSON.parse(res)
   }catch(err){
     console.log("Error: "+err)

   }
  
  
  
  return ret
}
