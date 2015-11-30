//common
var ab = {
  a : 9,
  b : 100
}

/* #if version-b */
(function(){
 "A can't see this"
})()
/* #end */

/* #if version-a */
(function(){
 "B can't see this"
})()
/* #end */

// #if version-b,version-c
(function(){
 "A can't see this"
})()
// #end

// #if version-a,version-c
(function(){
 "B can't see this"
})()
// #end
