export const fetchProjects = async ()=>{
    const res = await fetch(`https://app.meadowlaunch.com/api/projects`, { method: "GET" });
        const data = await res.json();
    return data.projects.data;
}
