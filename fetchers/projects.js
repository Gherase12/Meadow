
const production = "https://app.meadowlaunch.com/api/projects"
const local = "http://localhost:3000/api/projects"

export const fetchProjects = async ()=>{
    const res = await fetch(production, { method: "GET" });
        const data = await res.json();
    return data.projects.data;
}
