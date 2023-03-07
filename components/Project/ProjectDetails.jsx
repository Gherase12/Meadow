import React from 'react'
import TokenSaleDetail from './../TokenSaleDetail';

function ProjectDetails({path, project}) {
    const prices = [
        {
          price: "$0.10",
          totalAlocation: "$200.000",
          marketCap: " $155,000",
          startDate: "March 15, 1:00 PM UTC",
          endDate: "March 17, 1PM UTC",
          minPrice: "$5",
          maxPrice: "$5,000",
          currency: "USDT",
          network: "BEP20",
    
          tga: "5% TGE 2 months Cliff 5.27% per month",
        },
        {
          price: "TBA",
          totalAlocation: "TBA",
          marketCap: " TBA",
          startDate: "TBA",
          endDate: " TBA",
          minPrice: "TBA",
          maxPrice: "TBA",
          currency: "TBA",
          network: "SUI",
          endDate: "TBA",
          tga: "100% TGE",
        },
      ];


  return (
    <div className='  bg-white row-span-2 rounded-[30px] p-[30px] '>
              {/* prices */}
              <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                {path == "0"
                  ? "Private round 1 details"
                  : "Token Sale details"}
              </div>

              <div className=' flex flex-col scale-[0.8] '>
                <div className='  grid grid-cols-2 lg:grid-cols-4 gap-y-4  gap-x-[60px]  '>
                  {path == "0" ||
                  path == "1" ? (
                    <>
                      <TokenSaleDetail
                        upText={`${prices[0].price}`}
                        downText={"Price"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[0].marketCap}`}
                        downText={"Initial marketcap"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[0].totalAlocation}`}
                        downText={"Total alocation"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[0].network}`}
                        downText={"Network"}
                      />
                    </>
                  ) : (
                    <>
                      <TokenSaleDetail
                        upText={`${prices[1].price}`}
                        downText={"Initial marketcap"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[1].marketCap}`}
                        downText={"Initial marketcap"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[1].totalAlocation}`}
                        downText={"Total alocation"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[1].network}`}
                        downText={"Network"}
                      />
                    </>
                  )}
                </div>
                {/* dates */}
                <div className=' border-blue-7/50  h-[76px] mt-[20px] space-x-[40px] flex lg:border-y-[1px] '>
                  {path == "0" ||
                  path == "1" ? (
                    <>
                      <TokenSaleDetail
                        upText={`${prices[0].startDate}`}
                        downText={"Start date"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[0].endDate}`}
                        downText={"End date"}
                      />
                    </>
                  ) : (
                    <>
                      <TokenSaleDetail
                        upText={`${prices[1].startDate}`}
                        downText={"Start date"}
                      />
                      <TokenSaleDetail
                        upText={`${prices[1].endDate}`}
                        downText={"End date"}
                      />
                    </>
                  )}
                </div>
                {/* details */}
                <div className=' h-[76px] mt-[20px]  '>
                  {path == "0" ||
                  path == "1" ? (
                    <TokenSaleDetail
                      upText={prices[0].tga}
                      downText={"Lock-up"}
                    />
                  ) : (
                    <TokenSaleDetail
                      upText={prices[1].tga}
                      downText={"Lock-up"}
                    />
                  )}
                </div>
              </div>
            </div>
  )
}

export default ProjectDetails