<template>
  <form class="overflow-hidden border-2 border-gray-700 xl:w-9/12 rounded-3xl" @submit.prevent="calculate">
    <div class="w-full py-3 text-center text-white shadow-sm bg-top-50">
      <h2>
        Калькулятор
      </h2>
    </div>

    <div class="px-4 pt-4 lg:px-8">
      <p class="text-lg text-gray-400">Рассчитайте стоимость доставки <br /> вашего груза из Китая</p>
    </div>
    <div class="flex flex-col px-4 py-4 space-y-4 lg:px-8">
      <label class="relative w-full">
        <select
          id="from"
          v-model="model.cityFromId"
          class="w-full px-5 py-5 bg-gray-200 outline-none appearance-none rounded-2xl focus:outline-none"
          name="to">
          <option
            v-for="(item, fromId) in fromCities"
            :key="fromId"
            :value="item.id"
          >{{ item.title }}</option>
        </select>
        <i class="absolute text-xl text-gray-700 top-5 fas fa-caret-down right-5"></i>
      </label>

      <label class="relative">
        <select
          id="to"
          v-model="model.cityToId"
          class="w-full px-5 py-5 bg-gray-200 outline-none appearance-none rounded-2xl focus:outline-none"
          name="to">
          <option
            v-for="(item, toId) in toCities"
            :key="toId"
            :value="item.id"
          >{{ item.title }}</option>
        </select>
        <i class="absolute text-xl text-gray-700 top-5 fas fa-caret-down right-5"></i>
      </label>

      <div class="flex p-1 bg-gray-200 rounded-2xl">
        <button
          v-for="(item, clearanceId) in clearances.slice(0, 1)"
          :key="clearanceId"
          type="button"
          :class="{'text-blue-500 bg-white shadow-md': model.clearance === item.id}"
          class="w-1/2 py-5 rounded-2xl "
          @click="model.clearance = item.id">
          {{ item.title }}
        </button>
      </div>

      <div class="flex space-x-4">
        <label class="w-1/2">
          <input
            v-model="model.weight"
            type="number"
            placeholder="*Вес (кг)"
            class="w-full px-5 py-5 placeholder-gray-800 bg-gray-200 rounded-2xl " />
        </label>
        <label class="w-1/2">
          <input
            v-model="model.volume"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="Объем (м3)"
            class="w-full px-5 py-5 placeholder-gray-800 bg-gray-200 rounded-2xl " />
        </label>
      </div>

      <div class="pb-5">
        <button class="w-full px-5 py-4 text-white border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl" @click="calculate">
          Рассчитать
        </button>
      </div>

      <div class="w-full bg-gray-400 h-1px"></div>

      <div class="flex w-full pt-5 space-x-3">
        <div class="flex flex-col items-center w-4/12 lg:items-start lg:pl-4">
          <span class="text-gray-500">Цена</span>
          <span class="text-xl font-semibold text-white ">{{ model.price }}</span>
        </div>

        <div class="flex flex-col items-center w-4/12 lg:items-start lg:pl-4">
          <span class="text-gray-500">Стоимость</span>
          <span class="text-xl font-semibold text-white ">{{ model.total }}</span>
        </div>

        <!--        <div class="flex flex-col items-center w-4/12 lg:items-start lg:pl-4">-->
        <!--          <span class="text-gray-500">Продажникам</span>-->
        <!--          <span class="text-xl font-semibold text-white ">{{ model.sellersAmount }}</span>-->
        <!--        </div>-->

        <div class="flex flex-col items-center w-4/12 lg:items-start lg:pl-4">
          <span class="text-gray-500">Агентам</span>
          <span class="text-xl font-semibold text-white ">{{ model.agentsAmount }}</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    model: {
      cityFromId: '',
      cityToId: '',
      clearance: null,
      weight: '',
      volume: '',
      agentsAmount: 0,
      sellersAmount: 0,
      price: 0,
      total: 0,
    },
    toCities: [],
    fromCities: [],
    clearances: [],
  }),
  async mounted() {
    const fromCities = await this.$axios.$get('/api/from_cities')
    this.model.cityFromId = fromCities[0].id
    this.fromCities = fromCities

    const toCities = await this.$axios.$get('/api/to_cities')
    this.model.cityToId = toCities[0].id
    this.toCities = toCities

    const clearances = await this.$axios.$get('/api/clearances')
    this.model.clearance = clearances[0].id
    this.clearances = clearances
  },
  methods: {
    async calculate() {
      await this.$axios.$post('/api/calculate', {
        city_from: this.model.cityFromId,
        city_to: this.model.cityToId,
        clearance: this.model.clearance,
        weight: this.model.weight,
        volume: this.model.volume
      }).then((data) => {
        this.model.agentsAmount = data.agentsAmount
        this.model.sellersAmount = data.sellersAmount
        this.model.price = data.price
        this.model.total = data.total
      })
    }
  }
}
</script>
