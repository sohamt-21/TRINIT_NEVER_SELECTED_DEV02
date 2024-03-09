import { useState, useEffect } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';


const SampleForm = () => {

    const [SelctedRole, setSelctedRole] = useState("");
    const [FilledProfile, setFilledProfile] = useState(true);
    const [RoleOfUser, setRoleOfUser] = useState("");


    const checkRole = async () => {
        const sentAddress = user.primaryEmailAddress.emailAddress;
        await axios.post("http://localhost:9000/CheckRole", { Email: sentAddress }, { withCredentials: true }).then((res) => {
            const StringRes = res.data.toString();
            if (StringRes==="") {
                setFilledProfile(false);
            } else {
                setRoleOfUser(res.data);
               console.log(`User Has Role of : ${res.data}`);
            }
        }).catch((err) => {
            console.log(`Error is Occured : ${err}`);
        })

    }

    useEffect(() => {
        checkRole();
    })


    const { user } = useUser();

    const MakeRequesttoBackend = async (e) => {
        e.preventDefault();
        const User = {
            Name: user.fullName,
            Email: user.primaryEmailAddress.emailAddress,
            Role: SelctedRole
        }

        await axios.post("http://localhost:9000/RegisterUser", { User: User }, { withCredential: true }).then((res) => {
            console.log(`User Has Been Added` + res.data);
        }).catch((err) => {
            console.log(`Error is Occured : ${err}`);
        })
    }
    
    return (
        <>
            {!FilledProfile && <div className='align-center justify-center mx my-5 text-white'>
                <p className=''>Select Your Role : </p>
                <select value={SelctedRole} className='text-black' onChange={(e) => setSelctedRole(e.target.value)} >
                    <option value=""></option>
                    <option value="Tutor">Tutor</option>
                    <option value="Student">Student</option>
                </select>
                <br />
                <br />
                <button onClick={MakeRequesttoBackend}>Submit</button>
                
            </div>}
            <br />
            <br />
            {/* <a href={"/TutProfile"}><p className='text-white'>You Are : {RoleOfUser}</p></a> */}
        </>
    )
}

export default SampleForm