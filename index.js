const searchDeveloper = document.getElementById('searchDeveloper');
const userList = document.querySelector('.user-list');

// geting data from api

const getDveloperData = async () => {
    try {

        const res = await fetch('https://api.github.com/users');

        const developerData = await res.json();

        console.log(developerData);

        developerData.map((data) => {
            const Li = document.createElement('li');

            Li.insertAdjacentHTML('afterbegin',
                `
           <div class="user-data">
           <img src=${data.avatar_url} alt=${data.avatar_url} srcset="">
           <div>
               <p>${data.login}</p>
               <a href=${data.html_url} target="_blank">${data.html_url}</a>
           </div>
        </div>
           `
            )
            userList.appendChild(Li);
        })

    } catch (error) {
        console.log(error);
    }
}

getDveloperData();