// Team.js

import UserCard from "./UserCard";

function Team() {
  return (
    <section className="flex flex-wrap gap-6 justify-center p-6">
      <UserCard
        name="Jane Doe"
        role="Project Manager"
        avatar="https://i.pravatar.cc/150?img=4"
      />
      <UserCard
        name="Tom Lee"
        role="DevOps Engineer"
        avatar="https://i.pravatar.cc/150?img=5"
      />
      <UserCard
        name="Alice Johnson"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=1"
      />
      <UserCard
        name="Bob Smith"
        role="Backend Developer"
        avatar="https://i.pravatar.cc/150?img=2"
      />
    </section>
  );
}

export default Team;
