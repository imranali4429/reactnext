export default function Button() {
  function handleclick() {
    alert("Button clicked!");
  }
  return <button onClick={handleclick}>click me</button>;
}