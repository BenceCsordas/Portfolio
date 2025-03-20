const url = "https://raw.githubusercontent.com/BenceCsordas/JSON-portfolio/refs/heads/main/data.json"



getData(url, renderProjects)


function renderProjects(data){
    console.log(data);
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=>{
        console.log(site_link);
        
        document.getElementById("munkaim").innerHTML += `
        <div id="project">
            <div id="innerpr">
            <div class="iprpr">
            <img src="${photo_url}" alt="" id="munkaImg">
            </div>
             <div class="iprpr">
                <h1>${title}</h1>
                
                <h3>Témakörök</h3>
                <ul id="workitems">
                <li>${topics[0]}</li>
                <li>${topics[1]}</li>
                <li>${topics[2]}</li>
                </ul>   
                <a href="${site_link}">Site link</a>
                <a href="${repo_link}">Repo link</a>
                </div>
            </div>
        </div>
            `
     

            

    })
}

