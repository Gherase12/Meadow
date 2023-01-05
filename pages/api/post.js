// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from './../../lib/prisma';



export default async function handler(
  req,
  res
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { action, docId  } = req.body;
      if(action == "increment"){
        const partner =  await prisma.partner.update({
            where: {
              id: docId,
              
            },
            data: {
              votes: {
                increment: 1,
              },
            },
          })

      }else{
        const partner =  await prisma.partner.update({
            where: {
              id: docId,
            },
            data: {
              votes: {
                decrement: 1,
              },
            },
          })
      }
      
      res.status(201).json(partner);
      break;
 
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
