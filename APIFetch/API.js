
document.addEventListener('DOMContentLoaded', () => { 
    const loader = document.getElementById('loader'); 
    const dataContainer = document.getElementById('data-container'); 
    const dataTableBody = document.getElementById('data-table-body');
    const loadUsersBtn = document.getElementById('load-users-btn');

    
    loadUsersBtn.addEventListener('click', () => { 
        loader.classList.remove('d-none'); 
        dataContainer.classList.add('d-none'); 
        dataTableBody.innerHTML = ''; 

        /* Solicitud de la promesa */
        fetch("https://reqres.in/api/users?delay=3") 
            .then(response => response.json()) 
            .then(datos => {
                const users = datos.data; 
                users.forEach(element => { 
                    const row = document.createElement('tr');                     
                    row.innerHTML = `
                    <td> ${element.id} </td>
                    <td> ${element.first_name} </td>
                    <td> ${element.last_name} </td>
                    <td> ${element.email} </td>
                    <td class="text-center"> <img src="${element.avatar}" class="img-fluid rounded-circle"></td>
                    `;
                    dataTableBody.appendChild(row);                 });
                loader.classList.add('d-none'); 
                dataContainer.classList.remove('d-none'); 
            })
            .catch(error => {
                console.error('Error fetching the data', error);
                loader.innerHTML = `<p>Error loading data</p>`;
            });
    });
});
