console.log('***** Music Collection *****')
let collection = [];

function addToCollection (newTitle, newArtist, newYearPublished, newTracks) {
    let album = {
        title: newTitle ,
        artist: newArtist ,
        yearPublished: newYearPublished,
        tracks: []
    }
    for(i=0; i<newTracks.length; i++) {
        album.tracks.push(newTracks[i])
 //       console.log('song and duration' ,newTracks[i].song, newTracks[i].duration)
    }  
collection.push(album) ;
return album ;

}

console.log('Added Mmmhmm' , addToCollection('Mmmhmm','Relient k', 2004, [{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));

console.log('Added Five Score and Seven Years Ago' ,addToCollection('Five Score and Seven Years Ago', 'Relient k', 2007,[{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));

console.log('Added The Beautiful Letdown' ,addToCollection('The Beautiful Letdown', 'Switchfoot', 2003,[{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));

console.log('Added Nothing is Sound' ,addToCollection('Nothing is Sound', 'Switchfoot', 2005,[{song:`Lonely Nation`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));

console.log('Added Oh Gravity!' ,addToCollection('Oh Gravity!', 'Switchfoot', 2006,[{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));

console.log('Added Viva La Vida' ,addToCollection('Viva La Vida', 'Coldplay', 2008,[{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));
;
console.log('Added X & Y' ,addToCollection('X & Y', 'Coldplay', 2005,[{song:`The One I'm Waiting For`, duration: '3:02'},{song:`Be My Escape`, duration: '4:00'}]));
console.log(collection);


function showCollection(array){
    console.log('the number of items in the array are: ', array.length);
    for(let i=0; i<array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist,', published in', array[i].yearPublished);  
        for(let n=0; n<array[i].tracks.length; n++) {
        
            console.log(' ' + (n+1) +'. '+ array[i].tracks[n].song + ': ' + array[i].tracks[n].duration)
        }            
    }

}

console.log('==== running showCollection ====');
showCollection(collection)


function findByArtist(artist, array){
    let foundArtist = [];
    for (let i=0; i<array.length; i++){
        if (artist === array[i].artist){
            foundArtist.push(array[i])
        }
        
    }
    return foundArtist;
}

console.log('Searching for Switchfoot: ' ,findByArtist('Switchfoot', collection));
console.log('Searching for ACDC: ' ,findByArtist('ACDC', collection));

//STRETCH TIME BABY


function search( searchingObject, collection){
    if ( !searchingObject){
        console.log('no search object found, but check out this awesome collection');
        return collection;
        //This checks to see if there is no match to any object searched and returns the collection plus a consiliatory message. 
    }
    let searchArtist = searchingObject.artist;
    let searchYear = searchingObject.year;
    let searchSong = searchingObject.song;
   
    let searchMatch = [];
    for (let i=0; i<collection.length; i++){
        if(!search.song){
            if (searchArtist === collection[i].artist && searchYear === collection[i].yearPublished ){
            searchMatch.push(collection[i])
            
             }
        }
        else {
            for(n=0; n<collection[i].tracks.length; n++){
                 if (searchArtist === collection[i].artist && searchYear === collection[i].yearPublished && searchSong ===collection[i].tracks[n].song){
                    searchMatch.push(collection[i]);
                } 
            }
        }  
    }
        
    return searchMatch;
}
let foundItems = [];

console.log('Searching for Switchfoot 2005' );
foundItems = search({artist: 'Switchfoot', year: 2005, song:'' }, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title )
}

console.log('Searching for song: Lonely Nation') 
foundItems = search({artist: 'Switchfoot', year: 2005, song: 'Lonely Nation'}, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title )
}

console.log('Searching for empty, expect collection list')
foundItems = search(null, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title )
}


//console.log('Searching for Switchfoot 2005' , search({artist: 'Switchfoot', year: 2005}, collection));
//console.log('Searching for Switchfoot 2004' , search({artist:'Switchfoot', year: 2004}, collection));
