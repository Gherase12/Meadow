export const splitCoins(coins) {
    const firstCoin = coins.shift();
    const remainingCoins = coins.slice();
    return [firstCoin, remainingCoins]
}