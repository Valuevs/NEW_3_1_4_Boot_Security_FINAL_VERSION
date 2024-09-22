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




//создание нового пользователя
document.getElementById('new-user-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const user = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        age: formData.get('age'),
        email: formData.get('email'),
        password: formData.get('password'),
        roles: Array.from(document.getElementById('roles').selectedOptions).map(option => ({
            id: option.value
        }))
    };

    fetch('/admin/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                fetchUsers();  // Обновляем таблицу пользователей
                alert('User created successfully!');
            } else {
                alert('Failed to create user');
            }
        })
        .catch(error => console.error('Error:', error));
});

//редактирование
function openEditUserPopup(userId) {
    fetch(`/admin/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('edit-user-id').value = user.id;
            document.getElementById('edit-firstName').value = user.firstName;
            document.getElementById('edit-lastName').value = user.lastName;
            document.getElementById('edit-age').value = user.age;
            document.getElementById('edit-email').value = user.email;
            // Открыть модальное окно
            document.getElementById('editUserPopup').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}


document.getElementById('edit-user-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userId = formData.get('id');
    const user = {
        id: userId,
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        age: formData.get('age'),
        email: formData.get('email'),
        password: formData.get('password'), // если нужно обновить пароль
        roles: Array.from(document.getElementById('edit-roles').selectedOptions).map(option => ({
            id: option.value
        }))
    };

    fetch(`/admin/users`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                fetchUsers();  // Обновляем таблицу пользователей
                alert('User updated successfully!');
            } else {
                alert('Failed to update user');
            }
        })
        .catch(error => console.error('Error:', error));
});


//удаление пользователя

function openDeleteUserPopup(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/admin/users/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    fetchUsers();  // Обновляем таблицу пользователей
                    alert('User deleted successfully!');
                } else {
                    alert('Failed to delete user');
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

//обработка ролей


function loadRoles() {
    fetch('/admin/users/roles')
        .then(response => response.json())
        .then(roles => {
            const roleSelect = document.getElementById('roles');
            roleSelect.innerHTML = ''; // Очищаем текущие опции

            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role.id;
                option.text = role.name;
                roleSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    loadRoles(); // Загрузка ролей при загрузке страницы
});



