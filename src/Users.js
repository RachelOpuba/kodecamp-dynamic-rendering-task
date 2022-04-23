import React from "react";

function Users(props) {
  return (
      <>
          
      <main className="card-container">
        
        <div className="card">
          <h1>{props.name} </h1>

          <p>{props.bio}</p>

          <h3>General Info</h3>
          <div className="info-sec">
            <div className="left-info">
              <p>Date of Birth</p>
              <p>Address</p>
              <p>Email</p>
              <p>Phone</p>
            </div>
            <div className="right-info">
              <p>Aug 25, 1985</p>
              <p>
                {props.street}, {props.suite}, {props.city}
              </p>
              <p>{props.email}</p>
              <p>{props.phone}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Users;
