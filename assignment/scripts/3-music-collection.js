console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished, name, duration) {
    let album = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished,
        tracks: [name, duration]
    }
      
collection.push(album) ;
return album ;


}

console.log('Added Mmmhmm' , addToCollection('Mmmhmm','Relient k', 2004));

console.log('Added Five Score and Seven Years Ago' ,addToCollection('Five Score and Seven Years Ago', 'Relient k', 2007));

console.log('Added The Beautiful Letdown' ,addToCollection('The Beautiful Letdown', 'Switchfoot', 2003));

console.log('Added Nothing is Sound' ,addToCollection('Nothing is Sound', 'Switchfoot', 2005));

console.log('Added Oh Gravity!' ,addToCollection('Oh Gravity!', 'Switchfoot', 2006));

console.log('Added Viva La Vida' ,addToCollection('Viva La Vida', 'Coldplay', 2008));
;
console.log('Added X & Y' ,addToCollection('X & Y', 'Coldplay', 2005));
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
            foundArtist.push(array[i])
        }
        
    }
    return foundArtist;
}

console.log('Searching for Switchfoot: ' ,findByArtist('Switchfoot', collection));
console.log('Searching for ACDC: ' ,findByArtist('ACDC', collection));

//STRETCH TIME BABY


function search( searchArtistYear, array){
    artist = searchArtistYear.artist;
    year = searchArtistYear.year;
    let searchMatch = [];
    for (i=0; i<array.length; i++){
        if (artist === array[i].artist && year === array[i].yearPublished){
            searchMatch.push(array[i].title)
            
        }
        
    }
return searchMatch;
}
//Need to add option for no search object or empty search object... need help line 59 readme
console.log('Searching for Switchfoot 2005' , search({artist: 'Switchfoot', year: 2005}, collection));
console.log('Searching for Switchfoot 2004' , search({artist:'Switchfoot', year: 2004}, collection));
