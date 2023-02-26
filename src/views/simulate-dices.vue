<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">Simulación de dados</h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/dices.svg"
                                alt="daditos"
                                class="rtl:rotate-y-0 mx-auto w-full max-w-[560px]"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="py-6 dark:bg-gray-dark lg:py-6">
            <div class="container">
                <div class="relative z-10 lg:flex">
                    <form action="" class="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-full">
                        <div class="grid gap-10 sm:grid-cols-2">
                            <div class="relative">
                                <input
                                    type="number"
                                    v-model="inputData.diceNumber"
                                    :min="inputData.minDiceNumber"
                                    :max="inputData.maxDiceNumber"
                                    @change="simulations = undefined"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <span class="ml-2 text-sm text-error" v-if="inputData.diceNumber < inputData.minDiceNumber">
                                    El valor mínimo es de {{ inputData.minDiceNumber }}
                                </span>
                                <span class="ml-2 text-sm text-error" v-if="inputData.diceNumber > inputData.maxDiceNumber">
                                    El valor máximo es de {{ inputData.maxDiceNumber }}
                                </span>
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Número de dados</label
                                >
                                <!--NUM DADOS ICON-->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#7880a1"
                                    viewBox="0 0 32 32"
                                    width="32px"
                                    height="32px"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M 12 1 L 0 13 L 12 25 L 24 13 L 12 1 z M 12 3.8007812 L 21.199219 13 L 12 22.199219 L 2.8007812 13 L 12 3.8007812 z M 12 8 A 1 1 0 0 0 12 10 A 1 1 0 0 0 12 8 z M 8 12 A 1 1 0 0 0 8 14 A 1 1 0 0 0 8 12 z M 12 12 A 1 1 0 0 0 12 14 A 1 1 0 0 0 12 12 z M 16 12 A 1 1 0 0 0 16 14 A 1 1 0 0 0 16 12 z M 26.800781 13 L 24.800781 15 L 30 15 L 30 27 L 18 27 L 18 21.800781 L 16 23.800781 L 16 29 L 32 29 L 32 13 L 26.800781 13 z M 12 16 A 1 1 0 0 0 12 18 A 1 1 0 0 0 12 16 z M 24 20 A 1 1 0 0 0 24 22 A 1 1 0 0 0 24 20 z"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="number"
                                    v-model="inputData.launches"
                                    @change="simulations = undefined"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <span class="ml-2 text-sm text-error" v-if="inputData.launches < inputData.minLaunches">
                                    El valor mínimo es de {{ inputData.minLaunches }}
                                </span>
                                <span class="ml-2 text-sm text-error" v-if="inputData.launches > inputData.maxLaunches">
                                    El valor máximo es de {{ inputData.maxLaunches.toLocaleString() }}
                                </span>
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Número de lanzamientos</label
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    fill="#7880a1"
                                    viewBox="0 0 30 30"
                                    style="enable-background: new 0 0 30 30"
                                    xml:space="preserve"
                                    width="32px"
                                    height="32px"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        class="st0"
                                        d="M26.22,3.99c-2.96-2.96-7.72-0.96-10.01,1.33l-4.44,4.44L9.16,8.9C8.3,8.61,7.37,8.83,6.73,9.47l-4.17,4.17  c-0.18,0.18-0.28,0.42-0.28,0.68c0,0.26,0.1,0.5,0.28,0.68l0.23,0.23c0.13,0.13,0.3,0.23,0.49,0.26l2.69,0.54  c0.09,0.02,0.19,0.03,0.28,0.03c0.09,0,0.18-0.01,0.27-0.03c0.06,0.23,0.18,0.45,0.36,0.63l2.32,2.32L8.89,19.3  c-0.56,0.56-0.56,1.46,0,2.02c0.27,0.27,0.63,0.42,1.01,0.42c0.38,0,0.74-0.15,1.01-0.42L11.23,21l2.32,2.32  c0.18,0.18,0.41,0.3,0.64,0.36c-0.03,0.18-0.04,0.36-0.01,0.55l0.54,2.69c0.04,0.19,0.13,0.36,0.26,0.49l0.23,0.23  c0.19,0.19,0.43,0.28,0.68,0.28c0.25,0,0.49-0.09,0.68-0.28l4.17-4.17c0.64-0.64,0.86-1.57,0.57-2.43l-0.87-2.6L24.88,14  C27.17,11.71,29.17,6.95,26.22,3.99z M6.58,14.95c-0.11,0.11-0.26,0.15-0.41,0.12l-2.69-0.53l-0.23-0.21l4.17-4.17  c0.38-0.38,0.92-0.5,1.43-0.34l2.14,0.71l-3.43,3.43L6.58,14.95z M7.58,15.97c-0.09-0.09-0.13-0.2-0.13-0.32  c0-0.12,0.05-0.23,0.13-0.32l0.32-0.32l2.64,2.64L9.9,18.29L7.58,15.97z M10.22,20.63c-0.17,0.17-0.47,0.17-0.64,0  c-0.18-0.18-0.18-0.46,0-0.64L14.57,15c0.09-0.09,0.2-0.13,0.32-0.13c0.12,0,0.23,0.05,0.32,0.13c0.18,0.18,0.18,0.46,0,0.64  L10.22,20.63L10.22,20.63z M11.92,20.31l0.64-0.64l2.64,2.64l-0.11,0.11l-0.21,0.21c-0.18,0.18-0.46,0.18-0.64,0L11.92,20.31z   M20.04,22.78l-4.14,4.17l-0.23-0.22l-0.54-2.69c-0.03-0.15,0.02-0.3,0.12-0.41l0.31-0.31c0,0,0,0,0,0l0.33-0.33l0,0l3.77-3.77  l0.71,2.14C20.55,21.86,20.42,22.41,20.04,22.78z M17.22,20.28l-1.32-1.32l-0.69,0.69l1.32,1.32l-0.64,0.64l-2.64-2.64l2.65-2.65  c0.56-0.56,0.56-1.46,0-2.02c-0.54-0.54-1.48-0.54-2.02,0l-2.65,2.65l-2.64-2.64l0.64-0.64L10.55,15l0.69-0.69l-1.32-1.32l6.97-6.97  c2.09-2.09,6.25-3.71,8.63-1.33c2.38,2.38,0.76,6.54-1.33,8.63L17.22,20.28z"
                                    />
                                    <path
                                        class="st0"
                                        d="M17.87,8.98c-0.92,0.92-0.92,2.43,0,3.35c0.45,0.45,1.04,0.69,1.68,0.69s1.23-0.25,1.68-0.69  c0.92-0.92,0.92-2.43,0-3.35C20.3,8.06,18.8,8.06,17.87,8.98z M20.53,11.64c-0.53,0.53-1.44,0.53-1.97,0  c-0.54-0.54-0.54-1.43,0-1.97c0.27-0.27,0.63-0.41,0.99-0.41s0.71,0.14,0.99,0.41C21.08,10.22,21.08,11.1,20.53,11.64z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <input
                                type="number"
                                v-model="inputData.faceNumber"
                                @change="simulations = undefined"
                                class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <span class="ml-2 text-sm text-error" v-if="inputData.faceNumber < inputData.minFaceNumber">
                                El valor mínimo es de {{ inputData.minFaceNumber }}
                            </span>
                            <span class="ml-2 text-sm text-error" v-if="inputData.faceNumber > inputData.maxFaceNumber">
                                El valor máximo es de {{ inputData.maxFaceNumber }}
                            </span>
                            <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                >Número de caras</label
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#7880a1"
                                viewBox="0 0 32 32"
                                width="32px"
                                height="32px"
                                class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 8 A 2 2 0 0 0 11 12 A 2 2 0 0 0 11 8 z M 21 8 A 2 2 0 0 0 21 12 A 2 2 0 0 0 21 8 z M 11 14 A 2 2 0 0 0 11 18 A 2 2 0 0 0 11 14 z M 21 14 A 2 2 0 0 0 21 18 A 2 2 0 0 0 21 14 z M 11 20 A 2 2 0 0 0 11 24 A 2 2 0 0 0 11 20 z M 21 20 A 2 2 0 0 0 21 24 A 2 2 0 0 0 21 20 z"
                                />
                            </svg>
                        </div>
                        <div class="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button
                                type="button"
                                class="btn w-full bg-gray px-12 capitalize text-white disabled:cursor-not-allowed disabled:bg-gray disabled:opacity-80 dark:bg-white dark:text-black dark:hover:bg-secondary"
                                :disabled="!enableSimulateButton"
                                @click="generateSimulations"
                            >
                                Simular
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <template v-if="simulations">
            <section class="bg-black py-12 lg:py-24">
                <div class="bg-center bg-no-repeat">
                    <div class="container">
                        <div class="heading text-center">
                            <h6>Lanzamiento {{ simulationIndexSelected + 1 }} de {{ inputData.diceNumber }} dado{{ inputData.diceNumber === 1 ? '' : 's' }}</h6>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                class="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                v-for="(dices, key) in simulations[simulationIndexSelected]"
                                :key="key"
                            >
                                <div>
                                    <h6>Dado {{ key + 1 }}</h6>
                                    <h4 class="text-lg font-bold text-white">{{ dices }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-14 flex w-full justify-evenly">
                    <button class="btn" v-if="simulationIndexSelected" @click="simulationIndexSelected -= 1">Anterior</button>
                    <button class="btn" @click="simulationIndexSelected += 1" v-if="simulationIndexSelected + 1 < simulations.length">Siguiente</button>
                </div>
            </section>
            <section class="pt-12 lg:pt-24">
                <div class="container">
                    <div class="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
                        <div class="text-center ltr:md:text-left rtl:md:text-right">
                            <h6 class="mb-3 text-lg font-extrabold text-primary sm:mb-4">HISTOGRAMA</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-14 dark:!bg-none lg:py-24">
                <div class="container w-full overflow-auto">
                    <apexchart type="bar" :height="300" :options="chartOptions" :width="simulations.length * 100" :series="series"></apexchart>
                </div>
            </section>
        </template>
    </div>
</template>
<script>
    import VueApexCharts from 'vue3-apexcharts';
    import { useAppStore } from '@/stores/index';
    export default {
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                store: useAppStore(),
                simulations: undefined,
                simulationIndexSelected: 0,
                inputData: {
                    diceNumber: 1,
                    minDiceNumber: 1,
                    maxDiceNumber: 6,
                    minFaceNumber: 3,
                    maxFaceNumber: 120,
                    minLaunches: 1,
                    maxLaunches: 100000,
                    faceNumber: 3,
                    launches: 10,
                },
                chartOptions: {
                    dataLabels: {
                        enabled: false,
                    },
                    xaxis: {
                        categories: [],
                    },
                },
                series: [],
            };
        },
        computed: {
            enableSimulateButton() {
                return (
                    this.inputData.diceNumber >= this.inputData.minDiceNumber &&
                    this.inputData.diceNumber <= this.inputData.maxDiceNumber &&
                    this.inputData.faceNumber >= this.inputData.minFaceNumber &&
                    this.inputData.faceNumber <= this.inputData.maxFaceNumber &&
                    this.inputData.launches >= this.inputData.minLaunches &&
                    this.inputData.launches <= this.inputData.maxLaunches
                );
            },
        },
        methods: {
            generateSimulations() {
                const simulations = [];
                const categories = [];
                const series = Array.from(Array(this.inputData.diceNumber).keys()).map((element) => ({
                    name: `Dado ${element + 1}`,
                    data: [],
                }));
                //Iterando a partir de launches
                for (let index = 0; index < this.inputData.launches; index++) {
                    categories.push(`L${index + 1}`);
                    const diceValues = [];
                    //por cada launch tira n dados
                    for (let indexDice = 0; indexDice < this.inputData.diceNumber; indexDice++) {
                        const min = Math.ceil(1);
                        const max = Math.floor(this.inputData.faceNumber);
                        const valueDice = Math.floor(Math.random() * (max - min + 1)) + min;
                        diceValues.push(valueDice);
                        series[indexDice].data.push(valueDice);
                    }
                    simulations.push(diceValues);
                }
                this.simulationIndexSelected = 0;
                this.chartOptions.xaxis.categories = categories;
                this.series = series;
                this.simulations = simulations;
            },
        },
    };
</script>
