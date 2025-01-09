import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
const books = [
  {
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy",
  },
  {
    asin: "0316389706",
    title: "Sword of Destiny (The Witcher)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    price: 10.39,
    category: "fantasy",
  },
  {
    asin: "0786966246",
    title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
    img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
    price: 27.94,
    category: "fantasy",
  },
];

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList choosenBooks={books} />
      <MyFooter />
    </>
  );
}

export default App;
