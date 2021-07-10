// import characters from '../data/dict.json';

let characters = {
  "dict": [
    {
      "char": "女",
      "text": "Women",
    },
    {
      "char": "男",
      "text": "Men",
    },
    {
      "char": "太阳",
      "text": "Sun",
    },
    {
      "char": "月亮",
      "text": "Moon",
    },
    {
      "char": "白",
      "text": "White",
    },
    {
      "char": "黑",
      "text": "Black",
    },
  ]
}

function CharCard(props) {
  const { char, text } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{char}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

function CharCards() {
  return (
    <>
      { characters.dict.map((character) => {
        return (<CharCard char={ character.char } text={ character.text }/>)
      }) }
    </>
  )
}

export default CharCards;
