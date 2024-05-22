import { SignOutButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';


export function NewNav() {

  const { user } = useUser();

  const [SelctedRole, setSelctedRole] = useState("");
  const [FilledProfile, setFilledProfile] = useState(true);
  const [RoleOfUser, setRoleOfUser] = useState("");

  useEffect(() => {
    checkRole();
  })

  const checkRole = async () => {
    const sentAddress = user.primaryEmailAddress.emailAddress;
    await axios.post("http://localhost:9000/CheckRole", { Email: sentAddress }, { withCredentials: true }).then((res) => {
      const StringRes = res.data.toString();
      if (StringRes === "") {
        setFilledProfile(false);
      } else {
        setRoleOfUser(res.data);
        console.log(`User Has Role of : ${res.data}`);
      }
    }).catch((err) => {
      console.log(`Error is Occured : ${err}`);
    })

  }

  
  return (
    <div className='flex justify-around items-center w-full h-16 '>
      <div className='navleft'>
        <h1 className='text-2xl dark:text-white' style={{ fontFamily: 'Skyscapers' }}>Lang Connect</h1>
      </div>
      <div className="midnav flex gap-4 rounded-8xl h-3/4 align-middle  border-solid border border-slate-500 rounded-3xl">
        <a className='px-2  text-black dark:text-white hover:underline my-2' href="/">Home</a>
        <a className='px-2 text-black dark:text-white hover:underline my-2' href="/about">About</a>
        <a className='px-2 text-black dark:text-white hover:underline my-2' href="/contact">Contact</a>
        {RoleOfUser=="Tutor"?<><a className='px-2 text-black dark:text-white hover:underline my-2' href={"/tutDash"}>Dashboard</a></>:RoleOfUser=="Student"?<> <a className='px-2 text-black dark:text-white hover:underline my-2' href={"http://localhost:3000"}>View Tutors</a></>:<></>}
        <Dropdown/>
      </div>
      <div className="navright flex gap-5 my-9" >
        <img src={user.imageUrl} alt='👤' style={{ height: "50px", width: "50px", borderRadius: "50%" }} />

        <Link to="/profile" style={{ listStyle: "none", textDecoration: "none", color: 'whitesmoke' }}><p className="my-3">{user.fullName} &nbsp;({RoleOfUser})</p></Link>

        <SignOutButton className='shadow-[inset_0_0_0_2px_#616467] px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200' />

      </div>
    </div>
  );
}
export default NewNav;