import SearchBar from './SearchBar';
import CharCards from './CharCards';

function Home() {
  return (
    <>
      <h1 className="mw-100 text-center">Look up the history of a Chinese character</h1>
      <SearchBar />
      <CharCards />
    </>
  )
}

export default Home;
