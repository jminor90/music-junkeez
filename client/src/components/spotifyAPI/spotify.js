// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const CLIENT_ID = "66511bd43321461caae45c7644ef2572";
const CLIENT_SECRET = "561bf37ea1bb4312825fe6a6d1c81689";

function SpotifyApi() {
    const [accessToken, setAccessToken] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    // Need to add selectedArtist logic
    const [artist, setArtist] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);

    // Need to add tracks and selectedTrack logic
    // const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // Search

    async function search() {
    console.log("Search for " + searchInput);

    // Get request using search to get the Artist Id
    let searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    let searchResults = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album,artist,track', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.albums.items);
        console.log(data.artists.items[0].name)
        setArtist(data.artists.items[0]);
        setFormSubmitted(true);
      });
}
// Function that handles a selected artist and its publishing info functionality
function ArtistDetails({ artist, setSelectedAlbum }) {
  const handlePublishButtonClick = () => {
    const postInfo = {
      albumArtist: artist.name,
      albumImage: artist.images[0].url
    };
    console.log(postInfo);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={artist.images[0].url} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text class='text-dark'>
                {artist.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <button onClick={handlePublishButtonClick}>Select this artist</button>
        </Col>
      </Row>
    </Container>
  )
}


// Function that handles a selected album and its publishing functionality
function AlbumDetails({ album }) {
    const handlePublishButtonClick = () => {
      const postInfo = {
        albumImage: album.images[0].url,
        albumName: album.name,
        albumArtist: `${searchInput}`,
      };
      console.log(postInfo);
      // Need to add a new function to redirect the user to the page where there post is published
    }

    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={album.images[0].url} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>
                  By: {searchInput}
                </Card.Text>
              </Card.Body>
            </Card>
            <button onClick={handlePublishButtonClick}>Select this album</button>
          </Col>
        </Row>
      </Container>
    )
  }

// What is Initially shown on the page
// Conditional logic for when an album is selected
  return (
    <div className="App">
      {selectedAlbum ? (
        <AlbumDetails album={selectedAlbum} />
      ) : (
        <div>
          <Container>
            <InputGroup className="mb-3" size="lg">
              <FormControl
                placeholder="Search For Artist"
                type="input"
                onKeyPress={event => {
                  if (event.key == "Enter") {
                    search();
                  }
                }}
                onChange={event => setSearchInput(event.target.value)}
                />
              <Button onClick={search}>
                Search
              </Button>
            </InputGroup>
          </Container>
        {selectedArtist ? (
          <ArtistDetails artist={selectedArtist} />
        ) : (
          <Container>
            <Row className='mx-2 row row-cols-4'>
              <Card onClick={() => setSelectedArtist(artist)}>
                {formSubmitted && <Card.Img src={artist.images[0].url}/>}
                <Card.Body class='text-dark'>
                  <Card.Title>{artist.name}</Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Container>
          )}
          <Container>
            <Row className="mx-2 row row-cols-4">
              {albums.map( (album, i) => {
                console.log(album);
                return(
                  <Card key={i} onClick={() => setSelectedAlbum(album)}>
                    <Card.Img src={album.images[0].url} />
                    <Card.Body class='text-dark'>
                      <Card.Title>{album.name}</Card.Title>
                    </Card.Body>
                  </Card>
                )
              })}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default SpotifyApi;