import React from 'react'
import axios from 'axios'

const FilterTrial = () => {

    const SampleData = {
        img: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Ferruccio Lamborghini-Italian",
        reacteviews: "(123 Learners)",
        packagerevPrice: "Rs 10000",
        newPrice: "Rs 5000",
        language: "Italain"
    }

    const MakedataBaseAppend=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9000/MakeManipulation",{Data:SampleData},{withCredentials:true}).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(`Error is Occured :${err}`);
        })
    }

    return (
        <button onClick={MakedataBaseAppend}>FilterTrial</button>
    )
}

export default FilterTrial