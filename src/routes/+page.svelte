<script>
  import { tweened } from 'svelte/motion'
  import { quintOut } from 'svelte/easing'
  import { derived } from 'svelte/store'
  
  let myNumber = tweened(0, { duration: 2000, easing: quintOut })
  let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed())
</script>

<svelte:head>
  <title>Count demo</title>
</svelte:head>

<p>Count demo</p>
<h1 class="text-6xl font-bold my-24">{$formatted}</h1>
<div>
  <button class="btn btn-secondary mt-5 mr-2" on:click={() => myNumber.set(2500)}>Count!</button>
  <button type="button" class="btn btn-ghost !font-normal" value="cancel" on:click={() => myNumber.set(0, { duration: 0 })}>Reset</button>
</div>