import React from "react";
import {ethers} from "ethers";

async function Crowdfund() {
    const constractAddress = "0x903E2bE67aE02d2F0Efe9ea709a5C7a73294a665";
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log(signer);

    return(
        <h1>Hello</h1>
    )
}
export default Crowdfund;
