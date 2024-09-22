document.addEventListener("DOMContentLoaded", function () {
    // Функция для заполнения таблицы пользователей
    function loadUsers() {
        fetch("/admin/users")
            .then(response => response.json())
            .then(users => {
                const usersTableBody = document.getElementById("usersTableBody");
                usersTableBody.innerHTML = ""; // Очищаем таблицу
                users.forEach(user => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.authorities.map(role => role.authority.substring(5)).join(", ")}</td>
                <td><a href="#editUserPopup${user.id}" class="btn btn-info">Edit</a></td>
                <td><a href="#deleteUserPopup${user.id}" class="btn btn-danger">Delete</a></td>
              `;
                    usersTableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Error loading users:", error));

    }

    // Заполняем информацию в навбаре
    document.getElementById("navbarUserEmail").textContent = "example@domain.com";  // Пример
    document.getElementById("navbarUserRoles").textContent =  users.getRole();  // Пример

    // Загружаем пользователей при загрузке страницы
    loadUsers();
});