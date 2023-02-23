import React, { useState ,useEffect} from 'react';
import { useWallet , useAccountBalance, useCoinBalance } from '@suiet/wallet-kit';
import { convertToSui } from './../../utils/convertToSui';
import { cutDecimals } from './../../utils/cutDecimals';
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
function WalletDetails({buttonClick }) {
    
    const [participation, setParticipation] = useState();
    const wallet = useWallet()
    const {balance} = useAccountBalance()
    const provider = new JsonRpcProvider(Network.DEVNET);
   
    useEffect(()=>{
        if(!wallet.connected) return
        const getObjects = async ()=>{
            const objects = await provider.getObjectsOwnedByAddress(
                wallet?.address
                );
                const Obj =  objects.find(obj => obj.type === "0x354f68cb909adfcf4393088c746f643a6a7f00c::meadow::Participation")
                const partObj = Obj && await provider.getObject(Obj.objectId)
                // console.log(partObj?.details?.data?.fields?.alocated)
                
                setParticipation(partObj)
        }

            getObjects()
    },[buttonClick])

  return (
    <div className='w-full text-black my-5' >
        <p> Sui balance: { cutDecimals(convertToSui(Number(balance)))  }</p>
       {participation && (<p> My contribution: { convertToSui(Number(participation?.details.data.fields.alocated)).toFixed(6).replace(/\.?0+$/, '')   } Sui</p>) } 
    </div>
  )
}

export default WalletDetails