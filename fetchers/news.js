
const production = "https://app.meadowlaunch.com/api/getNews"
const local = "http://localhost:3000/api/getNews"



export const fetchNews = async ()=>{
    const res = await fetch(production, { method: "POST" });

    const data = await res.json();
    
    return  data.news.data
}


