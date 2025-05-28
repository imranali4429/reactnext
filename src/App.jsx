import Gallery, { Card as Image, Profile } from "./components/Gallery";
// import Alias for Card component witten Card as Image

function App() {
  return (
    <div>
      <h1>Welcome to my reactnext</h1>
      <p>This is a simple gallery application built with React.</p>
      <Gallery />
      <br />
      <Profile />
      <br />
      <br />
      <br />
      <br />
      <Image />
    </div>
  );
}

export default App;
