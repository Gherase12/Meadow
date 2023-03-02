import React, { useState ,useEffect} from 'react';
import { useWallet , useAccountBalance, useCoinBalance } from '@suiet/wallet-kit';
import { convertToSui } from './../../utils/convertToSui';
import { cutDecimals } from './../../utils/cutDecimals';
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
import { toast } from 'react-toastify';
function WalletDetails({buttonClick,setButtonClick, coins }) {
  const provider = new JsonRpcProvider(Network.DEVNET);
    const [participation, setParticipation] = useState();
    const wallet = useWallet()
    const {balance} = useAccountBalance()
    
    
   
    useEffect(()=>{
        if(!wallet.connected) return
        const getObjects = async ()=>{
            const objects = await provider.getObjectsOwnedByAddress(
                wallet?.address
                );
                const Obj =  objects.find(obj => obj.type === "0x04cdd6df4f6e53a23865ce441442f8e9d91e504b::meadow::Participation")
                const partObj = Obj && await provider.getObject(Obj.objectId)
                
                setParticipation(partObj)
        }

            getObjects()
    },[wallet?.connected,buttonClick,balance])


    const mergeCoins = async ()=> {
      const firstCoin = coins.shift();
      const remainingCoins = coins.slice();
      console.log(firstCoin)
      console.log(remainingCoins)



      try {
        const resData = await wallet.signAndExecuteTransaction({
          transaction: {
            kind: "moveCall",
            data: {
              packageObjectId: "0x04cdd6df4f6e53a23865ce441442f8e9d91e504b",
              module: "meadow",
              function: "mergeCoins",
              typeArguments: [],
              arguments: [
                firstCoin,
                remainingCoins
              ],
              gasBudget: 10000,
            },
          },
        });
        console.log(resData);
        
        setButtonClick(!buttonClick);
      } catch (e) {
        toast.success("Tokens merged")
        // console.error(e);
      }
    }

  return (
    <div className='w-full text-black my-5 font-bold' >
        <div className="flex justify-between  items-center"  >
        <p> Sui balance: { cutDecimals(convertToSui(Number(balance)))  } ({coins.length} Objects)</p>

          <button onClick={()=>mergeCoins()} className="bg-blue-1 text-white p-2 text-[12px] rounded-[10px] hover:bg-blue-2 hover:shadow-lg hover:shadow-blue-1 transition duration-1 " >Merge</button>

        </div>
          <div>
              {participation && (<p> My contribution: { convertToSui(Number(participation?.details.data.fields.alocated)).toFixed(6).replace(/\.?0+$/, '')   } Sui</p>) } 
          </div>
          <p>1 MED= 1 Sui</p>
    </div>
  )
}

export default WalletDetails