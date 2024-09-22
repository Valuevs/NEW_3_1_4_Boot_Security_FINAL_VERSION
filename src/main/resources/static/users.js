document.addEventListener('DOMContentLoaded', function () {
    fetchUsers();
});

function fetchUsers() {
    fetch('/admin/users')
        .then(response => response.json())
        .then(users => {
            const tableBody = document.getElementById('users-table-body');
            tableBody.innerHTML = ''; // Очищаем таблицу

            users.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.authorities.map(role => role.authority).join(', ')}</td>
                        <td><button class="btn btn-info" onclick="openEditUserPopup(${user.id})">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="openDeleteUserPopup(${user.id})">Delete</button></td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch(error => console.error('Error:', error));
}



