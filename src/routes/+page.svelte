<script>
  import { fade, fly } from "svelte/transition";
  import quotes from "../api/gitaquote";

  const carouselPhotos = [
    "https://picsum.photos/1080/1920?random=1",
    "https://picsum.photos/1080/1920?random=2",
    "https://picsum.photos/1080/1920?random=3",
    "https://picsum.photos/1080/1920?random=4",
    "https://picsum.photos/1080/1920?random=5",
    "https://picsum.photos/1080/1920?random=6",
    "https://picsum.photos/1080/1920?random=7",
    "https://picsum.photos/1080/1920?random=8",
    "https://picsum.photos/1080/1920?random=9",
    "https://picsum.photos/1080/1920?random=10",
    "https://picsum.photos/1080/1920?random=12",
    "https://picsum.photos/1080/1920?random=13",
    "https://picsum.photos/1080/1920?random=11",
    "https://picsum.photos/1080/1920?random=12",
    "https://picsum.photos/1080/1920?random=13",
  ];

  let index = 0;

  const getQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random]);
    // store the previous quote index
    return quotes[random];
  };

  let quote = getQuote();

  const next = () => {
    index = (index + 1) % carouselPhotos.length;
  };

  const prev = () => {
    if (index == 0) {
      index = carouselPhotos.length + 1;
    }
    index = (index - 1) % carouselPhotos.length;
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
  <link href="/dist/output.css" rel="stylesheet" />
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap");
    .quote {
      font-family: "Calligraffitti", cursive;
      font-size: 24px;
      color: #fff;
      text-shadow: 0 0 10px #000;
    }

    * {
      box-sizing: border-box;
    }
  </style>
</svelte:head>

<section
  class="md:hidden lg:hidden
"
>
  {#each [carouselPhotos[index]] as src (index)}
    <div>
      <!-- <Gallery{carouselPhotos} /> -->
      <div class="relative w-full h-full">
        <div
          class="absolute flex justify-center items-center quote bottom-1 left-5 right-5 top-1/2 transform -translate-y-1/2"
        >
          <!-- adding a quote on a image  -->
          <p
            class="border-double border-4 border-black-500 p-4 bg-slate-400 bg-opacity-25"
          >
            {quote.message}
            <span class="text-right block text-sm">-{quote.source}</span>
          </p>
        </div>

        <img transition:fade {src} alt="" class="className" />
        <div class="absolute flex justify-between inset-x-0 bottom-0 p-5">
          <button
            class="btn btn-circle bg-opacity-50 text-white"
            on:click={() => {
              quote = getQuote();
              prev();
            }}>❮</button
          >
          <button
            class="btn btn-circle bg-opacity-50 text-white"
            on:click={() => {
              quote = getQuote();
              next();
            }}>❯</button
          >
        </div>
      </div>
    </div>
  {/each}

  <!-- <button on:click={next}>Next!</button> -->
  <footer>
    <div class="btm-nav">
      <button>
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          /></svg
        >
      </button>
      <button class="active">
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
      </button>
      <button>
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          /></svg
        >
      </button>
    </div>
  </footer>
</section>

<section class="max-md:hidden max-sm:hidden">
  <section class="hro">
    <div
      class="hero min-h-screen"
      style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
    >
      <div class="hero-overlay bg-opacity-60" />
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <!-- create a image slider  -->
    <div class="flex justify-between align-middle flex-wrap gap-5">
      {#each carouselPhotos as src, index}
        <div class="relative w-auto h-auto">
          <img {src} alt="" class="className object-cover w-52 h-auto" />
          <!-- {console.log(index)} -->
          <div class="absolute inset-0 flex items-center justify-center">
            {#each [quotes[index]] as quote}
              <p
                class=" w-auto h-fit border-double border-4 border-black-500 p-4 bg-slate-400 bg-opacity-25 max-w-full px-6 text-center
              "
              >
                {quote.message}
              </p>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>
  <footer class="footer p-10 bg-base-200 text-base-content">
    <div>
      <span class="footer-title">Services</span>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </div>
    <div>
      <span class="footer-title">Company</span>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
    <div>
      <span class="footer-title">Newsletter</span>
      <div class="form-control w-80">
        <label class="label">
          <span class="label-text">Enter your email address</span>
        </label>
        <div class="relative">
          <input
            type="text"
            placeholder="username@site.com"
            class="input input-bordered w-full pr-16"
          />
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none"
            >Subscribe</button
          >
        </div>
      </div>
    </div>
  </footer>
</section>
