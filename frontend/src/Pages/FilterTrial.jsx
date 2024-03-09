import React from 'react'
import axios from 'axios'

const FilterTrial = () => {

    const SampleData = {
        Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carwale.com%2Fnews%2F809bhp-sian-is-the-firstever-hybrid-lamborghini%2F&psig=AOvVaw0RpsmJykhMYbUa3vSaObXQ&ust=1710097344510000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCguJfv54QDFQAAAAAdAAAAABAZ",
        Title: "Ferruccio Lamborghini-Italian",
        Reacteviews: "(123 Learners)",
        PrevPrice: "Rs 10000",
        NewPrice: "Rs 5000",
        Language: "Italain"
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