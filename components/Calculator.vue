<template>
  <div class="w-9/12 overflow-hidden border-2 border-gray-700 rounded-3xl">
    <div class="w-full py-3 text-center text-white shadow-sm bg-top-50">
      <h2>
        Калькулятор
      </h2>
    </div>

    <div class="px-8 pt-4">
      <p class="text-lg text-gray-400">Рассчитайте стоимость доставки <br /> вашего груза из Китая</p>
    </div>
    <div class="flex flex-col px-8 py-4 space-y-4">
      <label class="relative w-full">
        <select
          id="from"
          class="w-full px-5 py-5 bg-gray-100 outline-none appearance-none rounded-2xl focus:outline-none"
          name="from">
          <option value="1">Бишкек</option>
        </select>
        <i class="absolute text-xl text-gray-700 top-5 fas fa-caret-down right-5"></i>
      </label>

      <label class="relative">
        <select
          id="to"
          class="w-full px-5 py-5 bg-gray-200 outline-none appearance-none rounded-2xl focus:outline-none"
          name="to">
          <option value="1">Бишкек</option>
        </select>
        <i class="absolute text-xl text-gray-700 top-5 fas fa-caret-down right-5"></i>
      </label>

      <div class="flex p-1 bg-gray-200 rounded-2xl">
        <button type="button" class="w-1/2 py-5 text-blue-500 bg-white shadow-md rounded-2xl ">
          Фрахт
        </button>
        <button type="button" class="w-1/2 py-5 rounded-2xl ">
          Карго
        </button>
      </div>

      <div class="flex space-x-4">
        <label class="w-1/2">
          <input
            type="number"
            placeholder="*Вес (кг)"
            class="w-full px-5 py-5 placeholder-gray-800 bg-gray-200 rounded-2xl " />
        </label>
        <label class="w-1/2">
          <input
            type="number"
            placeholder="Объем (м3)"
            class="w-full px-5 py-5 placeholder-gray-800 bg-gray-200 rounded-2xl " />
        </label>
      </div>

      <div class="pb-5">
        <button class="w-full px-5 py-4 text-white border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl">
          Рассчитать
        </button>
      </div>

      <div class="w-full bg-gray-400 h-1px"></div>

      <div class="flex w-full pt-5">
        <div class="flex flex-col w-4/12 pl-4">
          <span class="text-gray-500">Цена</span>
          <span class="text-xl font-semibold text-white ">0 $/кг</span>
        </div>

        <div class="flex flex-col w-4/12 pl-4">
          <span class="text-gray-500">Продажникам</span>
          <span class="text-xl font-semibold text-white ">0 $/кг</span>
        </div>

        <div class="flex flex-col w-4/12 pl-4">
          <span class="text-gray-500">Агентам</span>
          <span class="text-xl font-semibold text-white ">0 $/кг</span>
        </div>
      </div>

    </div>
  </div>
</template>
