<script>
  import hash from '$lib/state/hash.js'

  let myDialog

  $: if ($hash === '#login') {
      myDialog?.showModal()
  }
  function handleClose() {
    console.log('result', myDialog.returnValue);
    clearHash();
  }
  function clearHash() {
    window.location.hash = '';
  }
</script>

<style>

  dialog[open] {
    opacity: 1;
    animation: fadeIn 1s ease-in-out;
  }
  dialog:not([open]) {
    display: block;
    opacity: 0;
    animation: fadeOut 1s ease-in-out;
  }


  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>

<h1>Welcome to SvelteKit</h1>
<p><a href="#login">open modal</a></p>

<dialog bind:this={myDialog} on:close={handleClose}>
  <button value="cancel" on:click={clearHash}>✕</button>
  <form method="dialog">
    <h1>Modal</h1>
    <input value="foo" />
    <button value="cancel" formmethod="dialog">Close 2</button>
    <button value="default">Save</button>
  </form>
</dialog>