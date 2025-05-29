import TeamMember from "./TeamMember";

function Team() {
  return (
    <section className="flex flex-wrap gap-6 justify-center p-6">
      <TeamMember
        name="Jane Doe"
        role="Project Manager"
        avatar="https://i.pravatar.cc/150?img=4"
        email="jane.doe@example.com"
        phone="+8801789286355"
        location="New York, USA"  
      />
      <TeamMember
        name="Tom Lee"
        role="DevOps Engineer"
        avatar="https://i.pravatar.cc/150?img=5"
        email="tom.lee@example.com"
        location="London, UK"
      />
      <TeamMember
        name="Alice Johnson"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=1"
        email="alice.johnson@example.com"
        location="Toronto, Canada"
      />
    </section>
  );
}

export default Team;
