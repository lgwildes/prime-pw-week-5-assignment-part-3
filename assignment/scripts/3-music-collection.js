console.log('***** Music Collection *****')
let collection = [];

//creating function to add albums and their info to collection array
function addToCollection (newTitle, newArtist, newYearPublished, newTracks) {
    let album = {
        title: newTitle ,
        artist: newArtist ,
        yearPublished: newYearPublished,
        tracks: []
    }
    for(i=0; i<newTracks.length; i++) {
        album.tracks.push(newTracks[i])
    }  
collection.push(album) ;
return album ;

}
//Mmhmm logging all tracks ---CUZ COMPLETIONISM
console.log('Added Mmhmm' , addToCollection('Mmhmm','Relient k', '2004', [{trackName:`The One I'm Waiting For`, duration: '3:02'},{trackName:`Be My Escape`, duration: '4:00'},{trackName:`High of 75`, duration: '2:27'},{trackName:`I So Hate Consequences`, duration: '4:01'},{trackName:`The Only Thing Worse Than Beating a Dead Horse Is Betting On One`, duration: '1:13'},{trackName:`My Girl's Ex-Boyfriend`, duration: '2:28'},{trackName:`More Than Useless`, duration: '3:50'},{trackName:`Which to Bury; Us or the Hatchet?`, duration: '4:11'},{trackName:`Let It All Out`, duration: '4:21'},{trackName:`Who I Am Hates Who I've Been`, duration: '3:52'},{trackName:`Maintain Consciousness`, duration: '2:52'},{trackName:`This Week the Trend`, duration: '2:59'},{trackName:`Life After Death and Taxes`, duration: '4:23'},{trackName:`When I Go Down`, duration: '6:42'}]));

//Five Score and Seven Years Ago ---STILL GOING HARD
console.log('Added Five Score and Seven Years Ago' ,addToCollection('Five Score and Seven Years Ago', 'Relient k', '2007',[{trackName:`Pleading the Fifth`, duration: '1:13'},{trackName:`Come Right out and Say It`, duration: '3:00'},{trackName:`I Need You`, duration: '3:18'},{trackName:`The Best Thing`, duration: '3:28'},{trackName:`Forgiven`, duration: '4:05'},{trackName:`Must Have Done Something Right`, duration: '3:19'},{trackName:`Give Until There's Nothing Left`, duration: '3:27'},{trackName:`Devastation and Reform`, duration: '3:41'},{trackName:`I'm Taking You with Me`, duration: '3:28'},{trackName:`Faking My Own Suicide`, duration: '3:23'},{trackName:`Crayons Can Melt on Us for All I Care`, duration: '0:12'},{trackName:`Bite My Tongue`, duration: '3:30'},{trackName:`Up and Up`, duration: '4:03'},{trackName:`Deathbed`, duration: '11:05'}]));

//The Beautiful Letdown ---true to name I'm sticking to two tracks from now on...sorry for the letdown
console.log('Added The Beautiful Letdown' ,addToCollection('The Beautiful Letdown', 'Switchfoot', '2003',[{trackName:`Meant to Live`, duration: '3:21'},{trackName:`This is Your Life`, duration: '4:19'}]));

//Nothing is Sound
console.log('Added Nothing is Sound' ,addToCollection('Nothing is Sound', 'Switchfoot', '2005',[{trackName:`Lonely Nation`, duration: '3:45'},{trackName:`Stars`, duration: '4:20'}]));

//Oh! Gravity. 
console.log('Added Oh! Gravity.' ,addToCollection('Oh! Gravity.', 'Switchfoot', '2006',[{trackName:`Oh! Gravity.`, duration: '2:30'},{trackName:`American Dream`, duration: '3:09'}]));

//Viva La Vida
console.log('Added Viva La Vida' ,addToCollection('Viva La Vida', 'Coldplay', '2008',[{trackName:`Life in Technicolor`, duration: '2:29'},{trackName:`Cemeteries of London`, duration: '3:21'}]));

//X&Y
console.log('Added X&Y' ,addToCollection('X&Y', 'Coldplay', '2005',[{trackName:`Square One`, duration: '4:47'},{trackName:`What If`, duration: '4:58'}]));

//console.log collection array
console.log('===== Logging collection array ====',collection);

//creating function to take array parameter
function showCollection(array){
    console.log('the number of items in the array are: ', array.length); //console.log number of items in array
    for(let i=0; i<array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist,', published in', array[i].yearPublished); //Looping over array and console.logging each album's information 'TITLE by ARTIST, published in YEAR'
        for(let n=0; n<array[i].tracks.length; n++) {
        
            console.log(' ' + (n+1) +'. '+ array[i].tracks[n].trackName + ': ' + array[i].tracks[n].duration)
        } //console.logging tracks and indented for readability. TRACK NUMBER. NAME: DDURATION       
    }

}

console.log('==== running showCollection ====');
showCollection(collection) //collection formatted as string for readability by user not as just an array

//creating function to search collection for albums by specific artist
function findByArtist(artist, array){
    let foundByArtist = []; //this shows which albums by this artist are in the collection
    for (let i=0; i<array.length; i++){
        if (artist === array[i].artist){
            foundByArtist.push(array[i]) //add album to foundByArtist array
        }
        
    }
    return foundByArtist; //returns array of any/all albums by artist in collection
}

console.log('Searching for Switchfoot: ' ,findByArtist('Switchfoot', collection)); //expect array of 3 albums
console.log('Searching for ACDC: ' ,findByArtist('ACDC', collection)); //expect empty array

//STRETCH TIME BABY

//creating search function which has a search object (which has properties for artist, year and trackName) and the collection array as parameters

function search( searchingObject, collection){
    if ( !searchingObject){
        console.log('    Sadly, there was no search object found, but check out this awesome collection!');
        return collection;
        //This checks to see if there is no object searched and returns the collection plus a consiliatory message. 
    }
    let searchMatch = [];

    let searchArtist = searchingObject.artist;
    let searchYear = searchingObject.year;
    let searchtrackName = searchingObject.trackName;
     //created variables of the serach object properties to make it easier for me to read and conceptualize within my for loop.
    
    //looping through the collection
    for (let i=0; i<collection.length; i++)  { 
        if(!search.trackName){
            if (searchArtist === collection[i].artist && searchYear === collection[i].yearPublished ){
            searchMatch.push(collection[i]);
            //pushing all items (albums) that match the criteria (artist and year) searched
             } 
        }
        
        else {
            //looping through the tracks to search for an album containing a specific trackName
            for(n=0; n<collection[i].tracks.length; n++) {
                 if (searchArtist === collection[i].artist && searchYear === collection[i].yearPublished && searchtrackName ===collection[i].tracks[n].trackName){
                    searchMatch.push(collection[i]);
                    //pushing album that contains the trackName searched
                } 
            }
        }  
    }
        
    return searchMatch;
}

//Returning text vs. Arrays in console log
let foundItems = []; //This array can display the object 'title' within the array object which matches the search. This way instead of listing the entire array, it displays just the album or message with collection list.

//==== THIS WORKS ====
console.log('==== Searching for Switchfoot 2005 with array result ====',
search({artist: 'Switchfoot', year: '2005', trackName: ''}, collection));

console.log('==== Searching for Switchfoot 2005 with text result ====' ); //searching for album artist and year
foundItems = search({artist: 'Switchfoot', year: '2005', trackName:''}, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title ); //logs album by artist in this year
}

//==== THIS WORKS ====
console.log('==== Searching for album which contains the track Be My Escape with array result ====',
search({artist: 'Relient k', year: '2004', trackName: 'Be My Escape'}, collection));

console.log('==== Searching for album which contains the track Be My Escape with text result ====') //searching for album which contains this track.
foundItems = search({artist: 'Relient k', year: '2004', trackName: 'Be My Escape'}, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title ); //logs album containing track
}

// ==== THIS WORKS ====
console.log('==== Searching with no object, expect collection list in array ====',
search(null, collection));
 //logs consiliatory message and collection list

console.log('==== Searching with no object, expect collection list in text ====')
foundItems = search(null, collection);
for(i=0; i<foundItems.length; i++){
    console.log( '   ', foundItems[i].title ); //logs consiliatory message and collection list
}

//==== THIS WORKS, cannot use foundItems variable to return empty array so had to include search within log. ====
console.log('==== Searching for album with wrong year, expect empty array ====',
search({artist: 'ACDC', year: '2004', trackName: 'Be My Escape'}, collection));
