import React, { useState , useEffect} from "react";

import { useWallet, useAccountBalance } from "@suiet/wallet-kit";
import { AiOutlineWarning } from "react-icons/ai";
import { toast } from 'react-toastify';
import { convertToMist, convertToSui } from "../../utils/convertToSui";
import { JsonRpcProvider, Network  } from '@mysten/sui.js';

function AlocationBoard({
  participateingId,
  coins,
  setButtonClick,
  buttonClick,
  alocation,
}) {

  
  const wallet = useWallet();
  let [amount, setAmount] = useState(0);
  const [minValue, setMinValue] = useState(0)
  const [error, setError] = useState(false)
  const provider = new JsonRpcProvider(Network.DEVNET);
  const {balance} = useAccountBalance()
  const [resp, setResp] = useState();


  useEffect(() => {
    if (!wallet.connected) return;
  
    const getCoinId = async () => {
      const promises = coins.map(async (cId) => {
        const coin = await provider.getObject(cId);
        return coin;
      });
  
      Promise.all(promises)
        .then((results) => {
          // Handle the results of all promises
          setMinValue(results.reduce((minBalance, currentItem) =>
          Number(currentItem?.details.data.fields.balance) < minBalance ? Number(currentItem?.details.data.fields.balance) : minBalance,
          Infinity
        ))
        })
        .catch((error) => {
          // Handle any errors that occurred
          console.error(error);
        });
    };
  
    getCoinId();
  }, [wallet?.connected,buttonClick, balance]);
    
  console.log(minValue)

  const alocate = async () => {
    setButtonClick(!buttonClick);
    if (!wallet.connected) return;
    const mist = convertToMist(amount)
    

    if(mist > minValue || mist == 0) {
      setError(true)
      return
    }
    setError(false)

    const firstCoin = coins.shift();
    const remainingCoins = coins.slice();
    console.log(firstCoin, remainingCoins )
    try {
      
      const resData = await wallet.signAndExecuteTransaction({
        transaction: {
          kind: "moveCall",
          data: {
            packageObjectId: "0x121171d34a925759e82afc7ddea8f0e27be78b51",
            module: "meadow",
            function: "contribute",
            typeArguments: [],
            arguments: [
              alocation,
              participateingId,
              firstCoin,
              remainingCoins,
              mist.toString()
            ],
            gasBudget: 10000,
          },
        },
      });
      
      setResp(resData)
      toast.success("Alocated " + amount + " tokens")
      setButtonClick(!buttonClick);
      // router.refresh()
    } catch (e) {
      console.error(e);
      

        toast.error("Please merge your coins");
      
    }
  };

  return (
    <>
      <div className='flex items-center space-x-[20px] mt-4'>
        <input
          type='number'
          placeholder={"Sui amount"}
          onChange={(e) => setAmount(e.target.value)}
          className='pl-2 border rounded-[14px] border-gray text-blue-600 h-[40px] font-bold text-sm focus:ring-0   w-full  '
        />
        
        <button
          onClick={() => alocate()}
          className='h-[40px] bg-blue-1 w-full text-white  rounded-[14px] flex items-center justify-center space-x-[10px]'
        >
          Alocate
        </button>
      </div>
      {error && (<p className="text-red text-sm pt-2">
          !Please use an amount {"<"} { convertToSui(minValue) }
        </p>)}

      
      
    </>
  );
}

export default AlocationBoard;
