import { ethers } from "ethers";
import projectAbi from "../data/ABI/projectAbi";

export const getParticipants = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x3d23131B9d73D8FdCC7733228c8D86480C6Df77d";
  const contract = new ethers.Contract(
    contractAddress,
    projectAbi,
    provider.getSigner()
  );
  const participants = await contract.getParticipants();

  const participateArray = participants.map((p) => {
    const number = Number(parseInt(p[2]._hex)) / 10 ** 18;
    return {
      ethAddress: p[0],
      suiAddress: p[1],
      alocated: number,
    };
  });

  console.log(participateArray);
  return participateArray;
};
