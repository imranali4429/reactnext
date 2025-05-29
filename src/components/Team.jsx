import TeamMember from "./TeamMember";

function Team() {
  return (
    <section className="flex flex-wrap gap-6 justify-center p-6">
      <TeamMember
        name="Imran Ali"
        role="Web Developer"
        avatar="https://i.pravatar.cc/150?img=4"
        email="imran4429ali@gmail.com"
        phone="+8801744813929"
        location="Rajshahi, Bangladesh"  
      />
      <TeamMember
        name="Monika khatun"
        role="Primary Teacher"
        avatar="https://i.pravatar.cc/150?img=4"
        email="monikakhatun@gmail.com"
        phone="+8801789286355"
        location="Rajshahi, Bangladesh"  
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
