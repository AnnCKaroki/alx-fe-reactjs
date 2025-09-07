const UserProfile = (props) => {
  return (
    <div style={{ padding: '20px', margin: '10px', border: '1px solid gray' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
