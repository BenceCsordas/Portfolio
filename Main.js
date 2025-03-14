const url = "https://raw.githubusercontent.com/BenceCsordas/JSON-portfolio/refs/heads/main/data.json"



getData(url, renderProjects)


function renderProjects(data){
    console.log(data);
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=>{
        console.log(site_link);
        
        document.getElementById("munkaim").innerHTML += `
            <div id="${id}">
                <h1>${title}</h1>
                <img src="${photo_url}" alt="" id="munkaImg">
                <a href="${site_link}">Site link</a>
                <a href="${repo_link}">Repo link</a>
                           
             <ul>
                 <li>${topics[0]}</li>
                 <li>${topics[1]}</li>
                 <li>${topics[2]}</li>
             </ul>   
        </div>`
     

            

    })
}

