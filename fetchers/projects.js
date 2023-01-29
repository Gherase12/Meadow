const production = "https://app.meadowlaunch.com/api/getProjects";
const local = "http://localhost:3000/api/getProjects";

export const fetchProjects = async (wallet) => {
  const res = await fetch(production, {
    method: "POST",
    body: JSON.stringify({ wallet }),
  });
  const data = await res.json();
  
  return data
};
