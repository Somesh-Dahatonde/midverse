<script>
  // @ts-nocheck

  import Gallery from "svelte-image-gallery/Gallery.svelte";
  const carouselPhotos = [
    "https://picsum.photos/180x200?random=1",
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
  // <img src="https://via.placeholder.com/180x200/1" alt="" />
  // <img src="https://via.placeholder.com/200x280/1" alt="" />
  // <img src="https://via.placeholder.com/250x200/1" alt="" />
  // <img src="https://via.placeholder.com/140x310/1" alt="" />
  // <img src="https://via.placeholder.com/280x300/1" alt="" />
  // <img src="https://via.placeholder.com/220x100/1" alt="" />
  // <img src="https://via.placeholder.com/180x150/1" alt="" />
  // <img src="https://via.placeholder.com/210x180/1" alt="" />
  // <img src="https://via.placeholder.com/210x200/1" alt="" />
  // <img src="https://via.placeholder.com/200x250/1" alt="" />
  // <img src="https://via.placeholder.com/220x200/1" alt="" />
  // <img src="https://via.placeholder.com/180x240/1" alt="" />
  // <img src="https://via.placeholder.com/210x210/1" alt="" />
  // <img src="https://via.placeholder.com/200x220/1" alt="" />
  // <img src="https://via.placeholder.com/210x200/1" alt="" />
  // <img src="https://via.placeholder.com/180x200/1" alt="" />
  // <img src="https://via.placeholder.com/200x280/1" alt="" />
  // <img src="https://via.placeholder.com/250x200/1" alt="" />
  // <img src="https://via.placeholder.com/140x210/1" alt="" />
  // <img src="https://via.placeholder.com/280x200/1" alt="" />
  // <img src="https://via.placeholder.com/220x100/1" alt="" />
  // <img src="https://via.placeholder.com/180x150/1" alt="" />
  // <img src="https://via.placeholder.com/210x180/1" alt="" />
  // <img src="https://via.placeholder.com/210x200/1" alt="" />
  // <img src="https://via.placeholder.com/200x250/1" alt="" />
  // <img src="https://via.placeholder.com/220x200/1" alt="" />
  // <img src="https://via.placeholder.com/180x240/1" alt="" />
  // <img src="https://via.placeholder.com/210x210/1" alt="" />
  // <img src="https://via.placeholder.com/200x220/1" alt="" />
  // <img src="https://via.placeholder.com/210x200/1" alt="" />
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<Gallery>
  {#each carouselPhotos as src (index)}
    <img {src} alt="" />
  {/each}
</Gallery>

<style>
  :global(img) {
    opacity: 0.9;
    transition: all 0.2s;
  }
  :global(img):hover {
    opacity: 1;
    transform: scale(1.04);
  }
</style>
