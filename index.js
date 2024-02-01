const searchDeveloper = document.getElementById('searchDeveloper');
const userList = document.querySelector('.user-list');

let userData = [];

// geting data from api

const getDveloperData = async () => {
    try {

        const res = await fetch('https://api.github.com/users');

        const developerData = await res.json();

        // console.log(developerData);
        if (developerData) {
            userList.innerHTML = ''; 
        }


        developerData.map((data) => {
            const Li = document.createElement('li');

            userData.push(Li);

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

// search event
searchDeveloper.addEventListener('input',(e)=>{
    const inputValue = e.target.value;

    // console.log(inputValue);
 
    userData.filter((data)=>{
        data.innerText.toLowerCase().includes(inputValue.toLowerCase()) ?
        data.classList.remove('hide') :
        data.classList.add('hide')
    })
})