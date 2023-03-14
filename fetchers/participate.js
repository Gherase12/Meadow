import { ethers } from "ethers";
import projectAbi from "../data/ABI/projectAbi";
import usdtAbi from "../data/ABI/usdtAbi";
export const participate = async ( address, refetch ) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x3d23131B9d73D8FdCC7733228c8D86480C6Df77d";
  const usdtAddress = "0x55d398326f99059ff775485246999027b3197955";
  // const signer = provider.getSigner();

  const USDTcontract = new ethers.Contract(
    usdtAddress,
    usdtAbi,
    provider.getSigner()
  );

  const contract = new ethers.Contract(
    contractAddress,
    projectAbi,
    provider.getSigner()
  );

  const approvedAmount = await USDTcontract.allowance(address, contractAddress);
  

  if (approvedAmount._hex == "0x00") {
    const amountInWei = ethers.utils.parseEther((10000).toString());
    const response =  await USDTcontract.approve(contractAddress, amountInWei);
    await response.wait();
    refetch()
  }

  
};
