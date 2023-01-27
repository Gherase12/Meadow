
const production = "https://app.meadowlaunch.com/api/news"
const local = "http://localhost:3000/api/news"

const typeDev = production; 

export const fetchNews = async ()=>{
    const res = await fetch(production, { method: "GET" });

    const data = await res.json();
 
    return  data.news.articles
}


export const fetchNewsContent = async (pageIndex)=>{

    
    const res = await fetch(
        `${production}?pageIndex=${pageIndex}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      
      return data.content
}

