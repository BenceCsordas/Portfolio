const url = "https://raw.githubusercontent.com/BenceCsordas/JSON-portfolio/refs/heads/main/data.json"



getData(url, renderProjects)


function renderProjects(data){
    console.log(data);
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=>{
        console.log(site_link);
        
        document.getElementById("munkaim").innerHTML += `
        <div id="project" class="push-right">
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
                <a target="_blank" href="${site_link}">Site link</a>
                <a target="_blank" href="${repo_link}">Repo link</a>
                </div>
            </div>
        </div>
            `
     

            

    })
}




    window.onscroll = function() {addAnimations()};

    function addAnimations() {
        console.log("scrolled");
     
    const projects = document.querySelectorAll("#project")   
    const contacts = document.querySelectorAll(".contactdiv")
    if(window.innerWidth >= 1024){
        console.log("1024nal nagyobb");
        
        if (document.documentElement.scrollTop > 800) {
            document.getElementById("aboutme").className = "slide-left"
        }
        if (document.documentElement.scrollTop > 1500) {
            projects[0].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 1800) {
            projects[1].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2200) {
            projects[2].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2400) {
            projects[3].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2800) {
            projects[4].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3100) {
            projects[5].className = "slide-right";
        }
        
        
        if (document.documentElement.scrollTop > 3500) {
            
            
            
            setTimeout(delayed, 0, 0)
            setTimeout(delayed, 500, 1)
            setTimeout(delayed, 1000, 2)
            
        }


    }   
    else if(window.innerWidth > 769 && window.innerWidth < 1024){
        console.log("768nal nagyobb");
        
        if (document.documentElement.scrollTop > 800) {
            document.getElementById("aboutme").className = "slide-left"
        }
        if (document.documentElement.scrollTop > 1500) {
            projects[0].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 1800) {
            projects[1].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2500) {
            projects[2].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2800) {
            projects[3].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3100) {
            projects[4].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3600) {
            projects[5].className = "slide-right";
        }
        
        
        if (document.documentElement.scrollTop > 4000) {
            
            
            
            setTimeout(delayed, 0, 0)
            setTimeout(delayed, 500, 1)
            setTimeout(delayed, 1000, 2)
            
        }


    }else if(window.innerWidth <= 768 && window.innerWidth > 320) {
        console.log("768 320 kozott");
        if (document.documentElement.scrollTop > 700) {
            document.getElementById("aboutme").className = "slide-left"
        }
        if (document.documentElement.scrollTop > 1600) {
            projects[0].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2000) {
            projects[1].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2700) {
            projects[2].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3300) {
            projects[3].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3800) {
            projects[4].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 4300) {
            projects[5].className = "slide-right";
        }
        
        
        if (document.documentElement.scrollTop > 5000) {
            
            
            
            setTimeout(delayed, 0, 0)
            setTimeout(delayed, 500, 1)
            setTimeout(delayed, 1000, 2)
            
        }
    }else if(window.innerWidth <= 320){
        console.log("kisebb 320");
        if (document.documentElement.scrollTop > 500) {
            document.getElementById("aboutme").className = "slide-left"
        }
        if (document.documentElement.scrollTop > 1600) {
            projects[0].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 1900) {
            projects[1].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2600) {
            projects[2].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 2900) {
            projects[3].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3100) {
            projects[4].className = "slide-right";
        }
        if (document.documentElement.scrollTop > 3600) {
            projects[5].className = "slide-right";
        }
                
        if (document.documentElement.scrollTop > 4000) {
            
            
            
            setTimeout(delayed, 0, 0)
            setTimeout(delayed, 500, 1)
            setTimeout(delayed, 1000, 2)
            
        }

    }
    function delayed(v){
        contacts[v].className = "contactdiv slide-up";

    }
}
    


