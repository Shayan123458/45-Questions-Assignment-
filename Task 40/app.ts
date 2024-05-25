// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
  


function make_album(artistName: string, albumTitle: string){
    return(`${artistName},${albumTitle}`)
}
let A1= make_album("Ali","Rang e Muhabbat")
let A2= make_album("Madad","Roshan Andhera")
let A3= make_album("Ayaz","Mausam e Dil")


console.log(make_album)
console.log(make_album)
console.log(make_album)


//Number Of Tracks
function myalbum(artistName:string,albumTitle:string,Tracks:number){
    return(`${artistName},${albumTitle},${Tracks}`)
}
let Album2= myalbum("Ali","Rang e Muhabbat",30)
let Album3= myalbum("Madad","Roshan Andhera",55)
let Album4= myalbum("Ayaz","Mausam e Dil",20)

console.log(Album2)
console.log(Album2)
console.log(Album2)

