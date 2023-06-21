<header>
  <div class="navbar bg-base-100 lg:hidden">
    <div class="flex-1">
      <div class="navbar-start">
        <div class="dropdown">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              /></svg
            >
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li class="menu-title">
              <span>Quotes</span>
            </li>
            <li><a>Gita Quotes</a></li>
            <li><a>Random Quote</a></li>
            <li class="menu-title">
              <span>Scripture</span>
            </li>
            <li><a>Gita Scripture</a></li>
            <li><a>Other Scripture</a></li>
            <li class="menu-title">
              <span>Veganism</span>
            </li>
            <li><a>About Veganism</a></li>
            <li class="menu-title">
              <span>________________</span>
            </li>
            <li><a>Contact US</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <div class="dropdown dropdown-end">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://picsum.photos/1080/1920?random=3" alt="profile" />
            <!-- <p> Profile </p> -->
          </div>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between" href="https://picsum.photos/1080/1920">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="navbar bg-base-100 max-md:hidden max-sm:hidden">
    <div class="flex-1">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search…"
            class="input input-bordered"
          />
          <button class="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              /></svg
            >
          </button>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://picsum.photos/1080/1920?random=3" />
          </div>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
