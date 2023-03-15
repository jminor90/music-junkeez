import "./GenreDropdown.css";
import Form from 'react-bootstrap/Form';

const GenreDropdown = () => {
  
    return (
      <div className="GenreDropdownContainer">

        <div className="valueContainer">
            <Form.Check name="Rock" value="Rock" className="inputContainer"/><p className="valueInput">Rock</p>
        </div>

        <div className="valueContainer">
            <Form.Check name="Rock" value="Rock" className="inputContainer" /><p className="valueInput">Pop</p>
        </div>

        <div className="valueContainer">
            <Form.Check name="Rock" value="Rock" className="inputContainer"/><p className="valueInput">Jazz</p>
        </div>

        <div className="valueContainer">
            <Form.Check name="Rock" value="Rock" className="inputContainer"/><p className="valueInput">Hip Hop</p>
        </div>

        <div className="valueContainer">
            <Form.Check name="Rock" value="Rock" className="inputContainer"/><p className="valueInput">Classical</p>
        </div>

      </div>
    );
  };

export default GenreDropdown;