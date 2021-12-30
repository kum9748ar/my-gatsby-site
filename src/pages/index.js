import * as React from "react"
import style from "../styles/style"
let data = require('../mockdata.json');
const IndexPage = () => {
  return (
    <main style={style.pageStyles}>
      <title>Home Page</title>
      <h1>The RANDOM DATA</h1>
      <ol>
        {data.map(data => (<li className="card" style={style.cardStyle} key={data._id}>
          <img src="https://picsum.photos/100/100" alt={data.about}></img>
          <h4>{data.name}</h4>
          <p><b>ID:</b> {data._id}</p>
          <p><b>Email:</b>  {data.email}</p>
          <p><b>Contact:</b> {data.phone}</p>
          <p><b>Age:</b> {data.age}</p>
          <p><b>Company:</b> {data.company}</p>
          <p><b>Gender:</b> {data.gender}</p>
          <p><b>Current Balance:</b>  {data.balance}</p>
          <p><b>About:</b> {data.about}</p>
          <p><b>Address:</b> {data.address}</p>
        </li>))}
      </ol>
    </main>
  )
}

export default IndexPage
