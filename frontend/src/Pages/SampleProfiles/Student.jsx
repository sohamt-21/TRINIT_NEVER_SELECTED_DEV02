import { useState} from 'react'
import axios from 'axios';

const Student = () => {
  const [AllTutors, setAllTutors] = useState([]);

  const GetAllTutotrs = async () => {

    await axios.post("http://localhost:9000/GetListofTutors", { Name: "Aditya Suryawanshi" }, { withCredentials: true }).then((res) => {
      setAllTutors(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  GetAllTutotrs();

  return (
    <>
      <div style={{ display: 'block', width: 'fit-content', margin: 'auto' }}>
        {AllTutors.map((val) => {
          return (<>
            {/* <p>{val.Email}</p> */}
            <div style={{border:'3px solid red',width:'60%',height:"300px"}}>
              <p>Name : {val.Name}</p>
              <p>Email : {val.Email}</p>
              <img src={val.Image} alt='NO IMage found ...'/>
              <p>Language:{val.Language}</p>
              <p>Experience:{val.Experience}</p>
            </div>
            <br />
          </>)
        })}
      </div>
    </>
  )
}

export default Student