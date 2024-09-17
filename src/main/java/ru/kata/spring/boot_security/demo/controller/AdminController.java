//package ru.kata.spring.boot_security.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//import ru.kata.spring.boot_security.demo.dao.RoleDao;
//
//import ru.kata.spring.boot_security.demo.model.Role;
//import ru.kata.spring.boot_security.demo.model.User;
//import ru.kata.spring.boot_security.demo.service.UserService;
//
//import java.security.Principal;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/admin")
//public class AdminController {
//
//    private final UserService userService;
//    private final RoleDao roleDao;
//
//    @Autowired
//    public AdminController(UserService userService, RoleDao roleDao) {
//        this.userService = userService;
//        this.roleDao = roleDao;
//    }
//
//    // Получение всех пользователей
//    @GetMapping("/users")
//   public ResponseEntity<List<User>> getAllUsers() {
//   List<User> allUsers = userService.findAllUsers();
//   return new ResponseEntity<>(allUsers, HttpStatus.OK);
//
//   }
//
//    // Получение информации о пользователе по ID
//   @GetMapping("/users/{id}")
//   public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        User user = userService.findUserById(id);
//        return new ResponseEntity<>(user, HttpStatus.OK);
//   }
//
//    // Добавление нового пользователя
//   @PostMapping("/users")
//    public ResponseEntity<User> addUser(@RequestBody User user) {
//        userService.saveUser(user);
//        return new ResponseEntity<>(user, HttpStatus.CREATED);
//   }
//
//    // Обновление пользователя
//   @PutMapping("/users")      //возможно надо будет добавлять id
//    public ResponseEntity<User> updateUser(@RequestBody User user) {
//        userService.saveUser(user);
//        return new ResponseEntity<>(user, HttpStatus.OK);
//   }
//
//    // Удаление пользователя
//   @DeleteMapping("/users/{id}")
//    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
//        userService.deleteUser(id);
//        return ResponseEntity.ok(HttpStatus.OK);
//   }
//
//
//   @GetMapping("users/roles")
//    public ResponseEntity<List<Role>> getAllRoles() {
//        return new ResponseEntity<>(roleDao.findAll(), HttpStatus.OK);
//   }
//
////    @GetMapping
////    public String allUserTable(Model model, Principal principal) {
////        model.addAttribute("users", userService.findAllUsers());
////        model.addAttribute("roles", roleDao.findAll());
////        model.addAttribute("currentUserEmail", principal.getName());
////        model.addAttribute("currentUserRoles", userService.findByEmail(principal.getName()).getAuthorities());
////        // Добавить в модель объект user
////        User currentUser = userService.findByEmail(principal.getName());
////        model.addAttribute("user", currentUser); // Добавьте объект user в модель
////        return "users";
////    }
////
////
////    // Открытие страницы одного пользователя
////    @GetMapping("/user")
////    public String showUser(@RequestParam(value = "id") Long id, Model model) {
////        model.addAttribute("user", userService.findUserById(id));
////        return "user";
////    }
////
////
////
////    @GetMapping("/new")
////    public String createUserForm(@ModelAttribute("user") User user) {
////        List<Role> roles = roleDao.findAll();
////        user.setRoles(roles);
////        return "users";
////    }
////
////
////    // Добавление нового пользователя из старой формы
////    @PostMapping("/new")
////    public String addUser(@ModelAttribute("user") User user) {
////        userService.saveUser(user);
////        return "redirect:/admin";
////    }
////
////    // Форма для редактирования пользователя
////    @GetMapping("/update/{id}")
////    public String createUpdateForm(@PathVariable("id") Long id, Model model) {
////        model.addAttribute("user", userService.findUserById(id));
////        model.addAttribute("roles", roleDao.findAll());
////        return "users";
////    }
////
////    // Обновление пользователя
////    @PostMapping("/update/{id}")
////    public String updateUser(@PathVariable("id") Long id, @ModelAttribute("user") User user, RedirectAttributes redirectAttributes) {
////        userService.updateUser(id, user);
////        redirectAttributes.addFlashAttribute("success", "User updated successfully!");
////        return "redirect:/admin";
////    }
////
////    // Удаление пользователя
////    @PostMapping("/delete/{id}")
////    public String deleteUser(@PathVariable("id") Long id, RedirectAttributes redirectAttributes) {
////        userService.deleteUser(id);
////        redirectAttributes.addFlashAttribute("success", "User deleted successfully!");
////        return "redirect:/admin";
////    }
////
////    // Страница со всеми пользователями
////    @GetMapping("/users")
////    public String showAllUsers(Model model) {
////        model.addAttribute("users", userService.findAllUsers());
////        return "users";
////    }
//}


