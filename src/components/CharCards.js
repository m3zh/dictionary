// import characters from '../data/dict.json';
import { Link } from 'react-router-dom';

let characters = {
  "dict": [
    {
      "char": "女",
      "text": "Women",
      "id": 1,
    },
    {
      "char": "男",
      "text": "Men",
      "id": 2,
    },
    {
      "char": "太阳",
      "text": "Sun",
      "id": 3,
    },
    {
      "char": "月亮",
      "text": "Moon",
      "id": 4,
    },
    {
      "char": "白",
      "text": "White",
      "id": 5,
    },
    {
      "char": "黑",
      "text": "Black",
      "id": 6,
    },
  ]
}

function CharCard(props) {
  const { char, text, id } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{char}</h5>
          <p className="card-text">{text}</p>
          <Link to={"/word/" + id} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </>
  )
}

function CharCards() {
  return (
    <>
      { characters.dict.map((character) => {
        return (
          <CharCard
            char={ character.char }
            text={ character.text }
            id={ character.id }/>
        )
      }) }
    </>
  )
}

export default CharCards;
