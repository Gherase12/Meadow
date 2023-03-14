import { ethers } from "ethers";
import usdtAbi from "../data/ABI/usdtAbi";
export const getUSDTbalance = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const usdtAddress = "0x55d398326f99059ff775485246999027b3197955";
  // const signer = provider.getSigner();

  const contract = new ethers.Contract(
    usdtAddress,
    usdtAbi,
    provider.getSigner()
  );

  const response = await contract.balanceOf(address);

  // const regularNumber = ethers.utils.parseUnits(response._hex, 18).toNumber();
  const regularNumber = Number(parseInt(response._hex));
  const usdtBalance = (regularNumber / 10 ** 18);
  console.log(usdtBalance)
  return usdtBalance;
};
