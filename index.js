// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { ttile: "Dangeruosly in Love", artist: "Beyonce", genre: "R&B"},
    { title: "Good at Goodbyes", artist: "Sam Smith", genre: "Pop",},   
    { title: "Carry on Wayward Son", artist: "Kansas", genre: "Rock",},
    { title: "Nude", artist: "Radiohead", genre: "Indie",},
    { title: "Am I Okay", artist: "Megan Moroney", genre: "Country",},
    { title: "American Nights", artist: "Zach Bryan", genre: "Country",},
    { title: "Good Luck, Babe", artist: "Chappelle Roan", genre: "Indie",},
    { title: "Too Sweet", artist: "Hozier", genre: "Indie",},

    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B", 
    "Rocket": "Country",
    "Groot": "Indie", 
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {} //Initialize an empty object to store playlists

    for (let key in guardians) {
        const genre = guardians[key];

        playlists[key] = songs 
            .filter(song => {
                return song.genre === genre;
            })
            .map(song => {
                return song.title + "by" + song.artist;
            });
        }
        return playlists; 
    }

// Call generatePlaylist and display the playlists for each Guardian
console.log(generatePlaylist(guardians, songs));


