//common
var ab = {
  a : 9,
  b : 100
}

/* #if version-b */
(function(){
 "should be in bundle after version-b"
})()
/* #end */

/* #ifnot version-b */
(function(){
 "should not be in bundle after version-b"
})()
/* #end */

/* #if version-a */
(function(){
 "should not be in bundle after version-b"
})()
/* #end */

/* #ifnot version-a */
(function(){
 "should be in bundle after version-b"
})()
/* #end */

// #ifnot version-a,version-c
(function(){
 "should be in bundle after version-b"
})()
// #end

// #if version-a,version-c
(function(){
 "should not be in bundle after version-b"
})()
// #end

// #if version-b,version-c
(function(){
 "should be in bundle after version-b"
})()
// #end

//#ifnot version-b,version-c
(function(){
 "should not be in bundle after version-b"
})()
// #end
