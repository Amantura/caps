<template>
  <div class="flex flex-col justify-center w-full min-h-screen py-10 bg-gradient-to-b from-top-50 to-gray-900">
    <div class="container flex flex-col items-center h-full mx-auto lg:flex-row lg:px-10 items">
      <div class="flex flex-col items-center justify-center py-10 space-y-8 lg:items-start lg:w-1/2">
        <img
          src="/img/logo.svg"
          class="w-56 xl:w-auto lg:w-80"
          alt="logo caps" />
        <h1 class="text-xl text-center text-white uppercase lg:text-left lg:text-4xl xl:text-6xl">Международные <br /> грузоперевозки <br /> из Китая</h1>
      </div>

      <div class="flex justify-center lg:w-1/2">
        <Calculator />
      </div>
    </div>
  </div>
</template>
