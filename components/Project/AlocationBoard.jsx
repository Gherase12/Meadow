import React, {useState} from 'react'

import {useWallet} from '@suiet/wallet-kit'
import { AiOutlineWarning } from 'react-icons/ai';
function AlocationBoard({participateingId, coins, setButtonClick, buttonClick, alocation,  }) {

    const wallet = useWallet();
    console.log(participateingId, alocation)
    let [amount, setAmount] = useState(0)


    const alocate = async ()=> {
 if (!wallet.connected) return
try {
  const resData = await wallet.signAndExecuteTransaction({
    transaction: {
      kind: 'moveCall',
      data: {
        packageObjectId: "0x0354f68cb909adfcf4393088c746f643a6a7f00c",
        module: 'meadow',
        function: 'contribute',
        typeArguments: [],
        arguments: [
          alocation,
          participateingId,
          coins.objectId,
          amount.toString()
        ],
        gasBudget: 10000,
      }
    }
  });
  console.log( resData);
      
      setButtonClick(!buttonClick);
    } catch (e) {
      console.error( e);
    }
    }

  return (
    <>
    
    
    <div className="flex items-center space-x-[20px] mt-4">
        
        <input type="number" placeholder={"Sui (fractions)"} onChange={(e)=> setAmount(e.target.value)} className='pl-2 border rounded-[14px] border-gray text-blue-600 h-[40px] font-bold text-sm focus:ring-0   w-full  '  />
        <button onClick={()=> alocate()} className="h-[40px] bg-blue-1 w-full text-white  rounded-[14px] flex items-center justify-center space-x-[10px]" >
            Alocate
        </button>

    </div>
        <div className="space-y-[10px] pt-4 text-red ">
          <AiOutlineWarning  />
          <p className="text-sm ">
          In this development stage you can only donate fractions of a sui (1 sui = 10.000.000 fractions)
          </p>
        </div>
        </>
  )
}

export default AlocationBoard