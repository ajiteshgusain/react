function UserCard(props){
    const cardStyle={
        border: '2px solid #4CAF50',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    width: '250px'

    };
    
return(
    <div style={cardStyle}>
        {/* We use props.userName to access the name sent by the parent */}
      <h2>Name: {props.userName}</h2>
      {/* We use props.hobby to access the hobby sent by the parent */}
      <p>Hobby: <strong>{props.hobby}</strong></p>
    </div>
)

}


// 2. Export it so App.jsx can use it
export default UserCard