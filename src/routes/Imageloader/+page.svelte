<!-- <script>
  import { onMount, onDestroy } from 'svelte';
  import { Button, Loader } from 'daisyui';
  import axios from 'axios';
  import { quotes } from './quotes.js';

  let images = [];
  let isLoading = true;
  let page = 1;
  let sentinel;

  let hasMore = true;
  let icons = ['like', 'share', 'save'];
  let observer;
  
  const fetchImages = async () => {
    try {
      const response = await axios.get('https://pexelsdimasv1.p.rapidapi.com/v1/curated', {
        params: { per_page: 15, page },
        headers: {
          Authorization: '563492ad6f917000010000014a581e7de5454942a4cd7e801db8bff4',
          'X-RapidAPI-Key': '06d0b44926msh1d7f9a6687fb263p1147fejsn7142c6589dab',
          'X-RapidAPI-Host': 'pexelsdimasv1.p.rapidapi.com'
        }
      });
      const data = response.data.photos.map((photo) => ({
        id: photo.id,
        src: photo.src.medium,
        alt: photo.photographer
      }));
      images = [...images, ...data];
      isLoading = false;
      page += 1;
      hasMore = data.length > 0;
    } catch (error) {
      console.error(error);
    }
  };

  const addTextToImage = (image, text) => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height + 50; // adjust height to fit text and icons
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    context.font = '30px Arial';
    context.fillStyle = '#fff';
    context.fillText(text, 0, canvas.height - 10);
    return canvas.toDataURL();
  };

  const fetchText = (image) => {
    const text = quotes.find((item) => item.id === image.id)?.text;
    if (text) {
      image.text = text;
      setImages([...images]); // update the images state variable
    }
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      fetchImages();
    }
  };

  onMount(() => {
    observer = new IntersectionObserver(handleObserver);
    observer.observe($$refs.sentinel);
    fetchImages();
  });

  onDestroy(() => {
    observer.disconnect();
  });

  $: {
    for (const image of images) {
      if (!image.text) {
        fetchText(image);
      }
    }
  }
</script>

<div>
  {#each images as image}
    {#if image.src}
      <img src={addTextToImage(image, image.text)} alt={image.alt} />
      <div class="flex space-x-4 items-center">
        {#each icons as icon}
          <Button flat>
            <i class={`icon-${icon}`} />
          </Button>
        {/each}
      </div>
    {/if}
  {/each}
  {#if isLoading}
    <Loader class="my-4" />
  {/if}

  {!isLoading && hasMore && 
  (
    <div class="sentinel" bind:this={sentinel} />
  )} 
      

</div>
 -->
