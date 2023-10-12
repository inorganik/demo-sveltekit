<script>
  import "../app.css";
  import hash from '$lib/state/hash.js'
  import { fly } from 'svelte/transition';

  let step = 1
  let myDialog

  $: if ($hash === '#login') {
    myDialog?.showModal();
  } else {
    myDialog?.close();
  }

  function handleClose() {
    clearHash();
    // do stuff
  }
  function clearHash() {
    window.location.hash = '';
  }
  function changeStep(amount) {
    step += amount;
    if (step < 1) step = 1;
    if (step > 2) step = 2;
  }

</script>

<svelte:head>
  <title>Svelte Demo</title>
</svelte:head>

<div class="mb-6 mx-auto px-2 md:px-4 max-w-5xl relative flex flex-col min-h-full">
  <div class="navbar bg-base-100 my-6 p-0">
    <div class="flex-1">
      <h1 class="text-5xl font-bold"><a href="/">Welcome to Svelte!</a></h1>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#login">open modal</a></li>
      </ul>
    </div>
  </div>

  <slot />
</div>

<dialog bind:this={myDialog} on:close={handleClose} class="modal">
  <div class="modal-box max-w-3xl bg-white p-5">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10" on:click={handleClose}>✕</button>

    <div class="min-h-[500px] relative overflow-hidden prose">
      {#if step === 1}
        <div transition:fly={{ duration: 500, x: -768 }} class="rounded-lg overflow-hidden w-full min-h-[500px] absolute">
          <h1>Step 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, massa eu sodales elementum, arcu enim imperdiet ligula, nec lobortis odio tortor id magna. Mauris dapibus interdum augue, dictum pharetra neque malesuada non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dapibus et justo non faucibus.</p>
          <p>Morbi gravida, leo eget fermentum faucibus, ante magna molestie arcu, nec varius diam urna vel dui. Nunc venenatis, ex et dignissim consequat, risus purus malesuada tortor, quis lobortis odio orci eget quam. Mauris sem nibh, placerat elementum suscipit vel, aliquam sed arcu. Pellentesque efficitur dui nibh, non sagittis nisi aliquet non. In eget egestas risus. Morbi et egestas neque, vitae dignissim velit.</p>
        </div>

      {:else if step === 2}
        <div transition:fly={{ duration: 500, x: 768 }} class="rounded-lg overflow-hidden w-full min-h-[500px] absolute">
          <h1>Step 2</h1>
          <p>Etiam pulvinar, nisl ac pharetra imperdiet, ante nunc bibendum ligula, tristique hendrerit lectus diam quis nibh. Quisque nisl libero, tempor sit amet erat a, aliquam rhoncus neque. Aenean eget velit a mi faucibus ultricies elementum sed purus. Maecenas bibendum faucibus sem, bibendum efficitur purus.</p>
          <p>Fusce vel rutrum lorem, eu pretium arcu. Praesent pretium augue odio, quis sagittis est auctor non. Phasellus ac justo leo. Vestibulum vestibulum finibus purus, ornare accumsan ex vulputate non. Nullam molestie risus quis faucibus rhoncus. Etiam porttitor velit pulvinar maximus ultricies. Nam faucibus sem vel tortor sagittis blandit. Mauris ultricies nisi in libero commodo, sed dictum tortor rhoncus. Suspendisse feugiat aliquam nisi. Phasellus finibus aliquet lobortis. Vestibulum in eros quis ex fringilla accumsan non vel velit.</p>
        </div>

      {/if}
    </div>
    <div class="modal-action mt-8">
      <button type="button" class="btn btn-ghost" disabled={step === 1} on:click={() => changeStep(-1)}>Back</button>
      <span class="flex-grow"></span>
      <button type="button" class="btn btn-primary" disabled={step === 2} on:click={() => changeStep(1)}>Next</button>
    </div>
  </div>
</dialog>