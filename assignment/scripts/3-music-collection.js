console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
    let album = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished
   
}
collection.push(album) ;
console.log(album);
}
addToCollection('Mmmhmm','Relient k', 2004);
console.log('Added Mmmhmm' );
addToCollection('Five Score and Seven Years Ago', 'Relient k', 2007);
console.log('Added Five Score and Seven Years Ago')
addToCollection('The Beautiful Letdown', 'Switchfoot', 2003);
console.log('Added The Beautiful Letdown')
addToCollection('Nothing is Sound', 'Switchfoot', 2005);
console.log('Added Nothing is Sound')
addToCollection('Oh Gravity!', 'Switchfoot', 2006);
console.log('Added Oh Gravity!')
addToCollection('Viva La Vida', 'Coldplay', 2008);
console.log('Added Viva La Vida')
addToCollection('X & Y', 'Coldplay', 2005)
console.log('Added X & Y')
console.log(collection)

