<script>
</script>
<template>
  <div class="volver" @click="$router.go(-1)">volver</div>
</template>

<style>

.volver {
    font-weight: 500;
    color: #212529;
    text-decoration: inherit;
    font-size: 1.25rem;
  }
.volver:hover {
    color: #212529;
    text-shadow: 3px 4px 7px rgba(91, 90, 85, 0.883);
    transition-duration: 0.6s;
    cursor: pointer;
  }
 /* div:hover {
    color: #212529;
    text-shadow: 3px 4px 7px rgba(91, 90, 85, 0.883);
    transition-duration: 0.6s;
  }

  div{
    margin: 30px;
  } */
</style>