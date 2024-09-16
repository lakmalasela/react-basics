const Userprofile = ({user })=>{

    const{name,age,email} = user;

    let subject= 'Maths';

    return (
        <div>
          <h1>User Profile</h1>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Subject: {subject}</p>
        </div>
      );

}

export default Userprofile;