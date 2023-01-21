export const fetchNews = async ()=>{
    const res = await fetch(`https://app.meadowlaunch.com/api/news`, { method: "GET" });

    const data = await res.json();
    return data.news.articles;
}
export const fetchNewsContent = async ()=>{
    const res = await fetch(`https://app.meadowlaunch.com/api/news`, { method: "GET" });

    const data = await res.json();
    return data.news.articles;
}

