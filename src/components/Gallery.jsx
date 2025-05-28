export default function Markupjsx() {
  return (
    // Rules of jsx
     // 1. Return a single root element
     // 2. Close all the tags
     // 3. camelCase all most of the things!

    <> 
      <h1> Writting markup with jsx </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li> The Rules of JSX</li>
        <li> Return a single root element. Using Fragment </li>
        <li> Close all the tags</li>
        <li>camelCase all most of the things! </li>
      </ul>
    </>
  );
}
