<script setup></script>

<template>
  <header>
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Website</a>
        <div class="avatar d-flex align-middle">
          <img
            src="https://img.phebinhvanhoc.com.vn/wp-content/uploads/2021/07/imager_3_2269_700.jpg"
            class="img-thumbnail d-block rounded-circle"
          />
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Something else here</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(235, 230, 230);
  .avatar {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
