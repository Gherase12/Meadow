const production = "https://app.meadowlaunch.com/api/getNewsContent"
const local = "http://localhost:3000/api/getNewsContent"


export const fetchNewsContent = async ( url) => {
  console.log(url)
  const res = await fetch(`${local}?url=${url}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
console.log(data)
  return data.content;
};
