export const cutDecimals = (num ,decimals = 4)=>{
    if (Number.isInteger(num)) {
        return 0;
      }
    
      const decimalStr = num.toString().substring(0, decimals);
      return Number(decimalStr);
}