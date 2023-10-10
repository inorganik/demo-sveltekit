<script>
  import "../app.css";
  import hash from '$lib/state/hash.js'

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
</script>

<svelte:head>
  <title>Svelte Demo</title>
</svelte:head>

<div class="mb-6 mx-auto px-2 md:px-4 max-w-5xl relative flex flex-col min-h-full">
  <div class="navbar bg-base-100 my-6 p-0">
    <div class="flex-1">
      <h1 class="text-5xl font-bold">Svelte Demo</h1>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#login">open modal</a></li>
        <li><a href="/count-up">count up</a></li>
      </ul>
    </div>
  </div>

  <slot />
</div>

<dialog bind:this={myDialog} on:close={handleClose} class="modal">
  <div class="modal-box bg-white">
    <h3 class="font-bold text-lg">Hello!</h3>
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p class="py-4">Here is a modal. You can press ESC to close</p>
  </div>
</dialog>