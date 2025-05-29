function UserCard({ name, role, avatar, email,phone, location }) {
  return (
    <div className="w-60 border p-4 rounded-xl shadow-md text-center">
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-2"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>

      {email && (
        <p className="text-sm text-blue-600 mt-2">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
      {phone && (
        <p className="text-sm text-green-600 mt-1">
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}

      {location && <p className="text-sm text-gray-400">{location}</p>}
    </div>
  );
}

export default UserCard;
