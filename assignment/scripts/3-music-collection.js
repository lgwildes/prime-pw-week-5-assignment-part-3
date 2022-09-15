console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished) {
    let album = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished
    }
      
collection.push(album) ;
return album ;


}

console.log('Added Mmmhmm' , addToCollection('Mmmhmm','Relient k', 2004));

console.log('Added Five Score and Seven Years Ago' ,addToCollection('Five Score and Seven Years Ago', 'Relient k', 2007))

console.log('Added The Beautiful Letdown' ,addToCollection('The Beautiful Letdown', 'Switchfoot', 2003))

console.log('Added Nothing is Sound' ,addToCollection('Nothing is Sound', 'Switchfoot', 2005))

console.log('Added Oh Gravity!' ,addToCollection('Oh Gravity!', 'Switchfoot', 2006))

console.log('Added Viva La Vida' ,addToCollection('Viva La Vida', 'Coldplay', 2008));
;
console.log('Added X & Y' ,addToCollection('X & Y', 'Coldplay', 2005))
console.log(collection);

function showCollection(array){
        console.log('the number of items in the array are: ', array.length);
        for(i=0; i<array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist,', published in', array[i].yearPublished);
                 
}

}

console.log('running showCollection');
showCollection(collection)


function findByArtist(artist, array){
    let foundArtist = [];
    for (i=0; i<array.length; i++){
        if (artist === array[i].artist){
            foundArtist.push(artist)
        }
        
    }
    return foundArtist;
}

console.log(findByArtist('Switchfoot', collection));
console.log(findByArtist('ACDC', collection));