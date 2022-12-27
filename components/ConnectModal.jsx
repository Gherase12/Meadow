
import { Fragment, useState  } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SignInButton } from "ethos-connect";
import Image  from 'next/image';
function ConnectModal({isOpen, closeModal}) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
  

    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            const res = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            await accountChange(res[0]);
          } catch (err) {
            console.error(err);
            setErrorMessage("There was a problem connecting to MetaMask");
          }
        } else {
          setErrorMessage("Install MetaMask");
        }
      };

      const accountChange = async (newAccount) => {
        setAccount(newAccount);
        console.log(account)
        try {
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [newAccount.toString(), "latest"],
          });
          setBalance(ethers.utils.formatEther(balance));
        } catch (err) {
          console.error(err);
          setErrorMessage("There was a problem connecting to MetaMask");
        }
      };


  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[20px] font-bold  text-blue-1 "
                  >
                    Connect your wallet
                  </Dialog.Title>
                

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center border-2 rounded-md shadow-lg   px-4 py-2 text-[15px] font-bold  "
                      onClick={()=>{closeModal(); connectWallet()}}
                    >
                        <Image src="/metamask.svg" className="mr-[10px]" alt="metamask" width="20" height="20"/>
                      Metamask
                    </button>
                  </div>
                  <div className="mt-4">
                    <button className="border-2 rounded-md shadow-lg">
                    <SignInButton
                      
                      className="inline-flex justify-center   border-2   px-4 py-2 text-[15px] font-bold  "
                      onClick={closeModal}
                    >
                        <Image src="/sui-logo.svg" alt="sui" className="mr-[60px]" width="40" height="40"/>
                      
                    </SignInButton>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default ConnectModal