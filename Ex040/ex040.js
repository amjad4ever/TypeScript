function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12); // Including number of tracks
var album3 = make_album("Artist3", "Album3", 8);
// Printing album objects
console.log(album1);
console.log(album2);
console.log(album3);
