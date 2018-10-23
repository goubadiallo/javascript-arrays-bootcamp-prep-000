var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]
var superheroines = ["catwoman", "she-hulk", "mystique"]
 function addElementToBeginningOfArray(src, item){
   var dst = [].concat(src)
   
   dst.unshift(item)
 return dst 
  
 }
 function addElementToEndOfArray(src, item){
   var dst = [].concat(src)
   dst[dst.length] = item
   
   return dst 
 }
 
function destructivelyAddElementToBeginningOfArray(dst, item){
  dst.unshift(item)
  return dst
     

  
}

function destructivelyAddElementToEndOfArray(dst, item){
  dst[dst.length] = item
  return dst
}
function accessElementInArray(array,index){
var element = array[index]
  return element
  
  
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
  function removeElementFromBeginningOfArray(array){
   var dst= [].concat(array)
   return destructivelyRemoveElementFromBeginningOfArray(dst)
   
    
    
  }
   function destructivelyRemoveElementFromEndOfArray(array){
     array.pop()
     return array
     
   }
   function removeElementFromEndOfArray(array){
     var dst = [].concat(array)
     dst.pop()
     return dst
   } 
