import React from 'react'
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import BeforeSign from './BeforeSign/BeforeSign';
import AfterSign from './AfterSign/AfterSign';

const MainRender = () => {
    return (
        <>
            <SignedOut>
                <BeforeSign />
            </SignedOut>

            <SignedIn>
               <AfterSign />
            </SignedIn>
        </>
    )
}

export default MainRender