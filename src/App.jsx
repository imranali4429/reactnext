//Passing strings with quotes
export function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

// // using string variables to curly braces for JSX
export function Avatar1() {
  const source = "https://i.imgur.com/7vQD0fPs.jpg";
  let alt = "Gregorio Y. Zara";

  return <img className="avatar" src={source} alt={alt} />;
}

// Using curly braces: A window into the JavaScript world
export function Avatar2() {
  const name = "Imran ali rony";
  return (
    <h1>
      my name is {name} <br /> and I am a web developer <br />
    </h1>
  );
}

// Using “double curlies”: CSS and other objects in JSX
export function TodoList() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>To Learn React </li>
      <li>To Learn TailWindCss</li>
      <li>To Learn Github</li>
    </ul>
  );
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList1() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s a Sciencetist of AW college</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

const baseUrl = "https://i.imgur.com/";
const person2 = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList2() {
  return (
    <div style={person2.theme}>
      <h1>{person2.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person2.imageId + person2.imageId + ".jpg"}
        alt={person2.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Ternary Operator Example in React

import { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
