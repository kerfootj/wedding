<template>
  <div id="page-container" class="h-screen overflow-auto">
    <slot></slot>
  </div>
</template>

<style>
#page-container::-webkit-scrollbar {
  width: 8px;
  margin-top: 40px;
}

#page-container::-webkit-scrollbar-track {
  background-color: white;
}

#page-container::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #a5a5a5;
  min-height: 24px;
}
</style>
