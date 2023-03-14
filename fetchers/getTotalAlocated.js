import { ethers } from "ethers";
import projectAbi from "../data/ABI/projectAbi";

export const getTotalAlocated = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x3d23131B9d73D8FdCC7733228c8D86480C6Df77d";
  const contract = new ethers.Contract(
    contractAddress,
    projectAbi,
    provider.getSigner()
  );
  const response = await contract.getUSDTbalance();
  const regularNumber = Number(parseInt(response._hex));
  const totalBalance = regularNumber / 10 ** 18;

  return totalBalance;
};
