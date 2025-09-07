
const UserProfile = (props) => {
   const profileStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '300px',
      margin: '1rem auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
   };
   const nameStyle = {
      color: '#2c3e50',
      marginBottom: '0.5rem',
   };
   const infoStyle = {
      color: '#555',
      margin: 0,
   };
   return (
      <div style={profileStyle}>
         <h2 style={nameStyle}>{props.name}</h2>
         <p style={infoStyle}>Age: {props.age}</p>
         <p style={infoStyle}>Bio: {props.bio}</p>
      </div>
   );
};

export default UserProfile;
