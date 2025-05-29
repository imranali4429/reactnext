//  Pass props to the child component
// import Avater from "./components/Avatar";

// export default function Profile() {
//   return (
//     <Avater person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
//   );
// }



// using the UserCard component in the main App component
//Sequence =  usercard -TeamMember - Team - App.jsx
import Team from "./components/Team";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meet Our Team</h1>
      <Team />
    </div>
     
     
    
  );
}

export default App;
