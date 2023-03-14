import { ethers } from 'ethers';
import projectAbi from "../data/ABI/projectAbi"
export const getAlocation = async (address)=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractAddress = "0x3d23131B9d73D8FdCC7733228c8D86480C6Df77d";
    const contract = new ethers.Contract(
        contractAddress,
        projectAbi,
        provider.getSigner()
      );
      const contributedAmount = await contract.alocationAmount(address);
      const regularNumber = Number(parseInt(contributedAmount._hex));
        const amount = (regularNumber / 10 ** 18);
        console.log(amount)
      return amount

}