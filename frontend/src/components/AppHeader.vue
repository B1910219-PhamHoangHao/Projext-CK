<template>
    <nav >
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div>
        <div class="mr-auto navbar-nav col-3 justify-content-start">
      <li class="nav-item">
        <router-link :to="{ name: 'About' }" class="nav-link h4 text-white">
          <i class="fa-solid fa-user"></i>
          User
        </router-link>
      </li>
    </div>
    </nav>
    </nav>
</template>