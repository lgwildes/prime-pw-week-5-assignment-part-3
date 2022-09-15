console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
    let album = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished
   
}
collection.push(album)
return album
}
addToCollection('Mmmhmm','Relient k', 2004)
console.log(collection)