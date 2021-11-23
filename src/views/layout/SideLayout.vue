<template>
  <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <a href="." class="text-decoration-none">
          <bi icon="check2-square" size="2x" class="text-primary me-2"></bi
          ><span>SaktiProMan</span>
        </a>
      </h1>
      <div class="navbar-nav flex-row d-lg-none">
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span
              class="avatar avatar-sm"
              style="background-image: url(./static/avatars/000m.jpg)"
            ></span>
            <div class="d-none d-xl-block ps-2">
              <div>Paweł Kuna</div>
              <div class="mt-1 small text-muted">UI Designer</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Profile & account</a>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav pt-lg-3">
          <router-link
            :to="{ name: 'Home' }"
            custom
            v-slot="{ href, route, navigate, isExactActive }"
          >
            <li class="nav-item" :class="[isExactActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">
                <span class="nav-link-icon d-md-none d-lg-inline-block me-2"
                  ><bi icon="house" class="sidebar-icon"></bi>
                </span>
                <span class="nav-link-title"> {{ route.name }} </span>
              </a>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'user' }"
            custom
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <li
              class="nav-item"
              :class="[isActive && 'active', isExactActive && 'active']"
            >
              <a class="nav-link" :href="href" @click="navigate">
                <span class="nav-link-icon d-md-none d-lg-inline-block me-2"
                  ><bi icon="person-lines-fill" class="sidebar-icon"></bi>
                </span>
                <span class="nav-link-title"> {{ route.name }} </span>
              </a>
            </li>
          </router-link>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#navbar-base"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block me-2"
                ><bi icon="kanban" class="sidebar-icon"></bi>
              </span>
              <span class="nav-link-title"> Interface </span>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <a class="dropdown-item" href="./empty.html"> Empty page </a>
                  <a class="dropdown-item" href="./accordion.html">
                    Accordion
                  </a>
                  <a class="dropdown-item" href="./blank.html"> Blank page </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: "SideLayout",
};
</script>
<style>
.sidebar-icon {
  width: 1.25rem !important;
}
</style>
