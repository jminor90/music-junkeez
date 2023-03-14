
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const CLIENT_ID = "66511bd43321461caae45c7644ef2572";
const CLIENT_SECRET = "561bf37ea1bb4312825fe6a6d1c81689";

function SpotifyApi() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

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

    let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

    console.log('Artist ID is ' + artistId);

    let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market=US&limit=20', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAlbums(data.items);
      });
  }
  console.log(albums)

// Function that handles a selected album and its publishing functionality
function AlbumDetails({ album }) {
    const [commentInput, setCommentInput] = useState("");
    const [genre, setGenre] = useState("");

    const handleCommentInputChange = (event) => {
      setCommentInput(event.target.value);
    }

    const handlePublishButtonClick = () => {
      const postInfo = {
        albumImage: album.images[0].url,
        albumName: album.name,
        albumArtist: `${searchInput}`,
        comment: commentInput,
        genre: genre
      };
      console.log(postInfo);
      setCommentInput("");
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
            <input type="text" placeholder="Add a comment" value={commentInput} onChange={handleCommentInputChange} />
            <div>
              <select value={genre} onChange={(event) => setGenre(event.target.value)}>
                <option value="">Select a thread location for your post</option>
                <option value="Rock">Rock</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Electronic">Electronic</option>
                <option value="Country">Country</option>
                <option value="Classical">Classical</option>
              </select>
            </div>
            <button onClick={handlePublishButtonClick}>Publish</button>
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
          <Container>
            <Row className="mx-2 row row-cols-4">
              {albums.map( (album, i) => {
                console.log(album);
                return(
                  <Card key={i} onClick={() => setSelectedAlbum(album)}>
                    <Card.Img src={album.images[0].url} />
                    <Card.Body>
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