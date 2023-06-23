<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">Triángulo de Sierpinski</h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/Sierpinski_triangle_evolution.svg"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto mb-8 w-full max-w-[560px] md:mb-0"
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
                <div class="block">
                    <h1 class="text-xl font-bold">Wacław Franciszek Sierpiński</h1>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="sm:col-span-2 col-span-12">
                            <div class="text-justify">
                                <p class="mt-2">
                                    El polaco Wacław Franciszek Sierpiński (1882 - 1969) fue un matemático que hizo importantes descubrimientos en teoría de
                                    conjuntos, teoría de números, análisis y topologías, publicando más de 700 artículos y 50 libros.
                                </p>
                                <p class="mt-2">
                                    También inventó muchos fractales populares, incluidos el triángulo de Sierpinski, la alfombra de Sierpinski y la curva de
                                    Sierpinski. Los números de Sierpinski son números naturales impares k de modo que k·2n+1 es compuesto para todos los números
                                    naturales n. El problema de Sierpinski está tratando de encontrar los números más pequeños de Sierpinski. El número más
                                    pequeño conocido es 78,557, pero aún se desconoce si hay otros más pequeños.
                                </p>
                                <h1 class="my-4 text-xl font-bold">Fractales</h1>
                                <p>
                                    Un <b>fractal</b> es una forma geométrica que tiene una <i>dimensión fraccional</i>. Muchos fractales famosos son
                                    <i>auto-similares</i>, lo que significa que consisten en copias más pequeñas de sí mismos. Los fractales contienen patrones
                                    en cada nivel de aumento, y se pueden crear repitiendo un procedimiento o iterando una ecuación infinitamente muchas veces.
                                </p>
                            </div>
                        </div>
                        <div class="hidden col-span-1 sm:flex">
                            <img class="mx-auto h-80 " src="/assets/images/proba/dude.jpeg" alt="dude" />
                        </div>
                    </div>
                    <img class="m-auto" src="/assets/images/helechito.gif" alt="helecho" />

                    <div class="grid gap-4 sm:grid-cols-2"></div>
                </div>
                <div class="mt-10">
                    <h1 class="text-center text-xl font-bold">Simulación de triángulo de Sierpinski</h1>
                </div>
                <div class="relative z-10 lg:flex">
                    <form action="" class="rounded-3xl px-4 py-12 lg:w-full">
                        <div class="grid gap-10 sm:grid-cols-2">
                            <div class="relative" v-if="false">
                                <input
                                    type="number"
                                    v-model="inputData.triangles"
                                    :min="inputData.minTriangles"
                                    :max="inputData.maxTriangles"
                                    @change="simulate = undefined"
                                    :disabled="true"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <span class="ml-2 text-sm text-error" v-if="inputData.triangles < inputData.minTriangles">
                                    El valor mínimo es de {{ inputData.minTriangles }}
                                </span>
                                <span class="ml-2 text-sm text-error" v-if="inputData.triangles > inputData.maxTriangles">
                                    El valor máximo es de {{ inputData.maxTriangles }}
                                </span>
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Número de triángulos</label
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
                        <div class="mt-2 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button
                                type="button"
                                class="btn w-full bg-gray px-12 capitalize text-white disabled:cursor-not-allowed disabled:bg-gray disabled:opacity-80 dark:bg-white dark:text-black dark:hover:bg-secondary"
                                :disabled="!enableSimulateButton"
                                @click="generateTriangles"
                            >
                                Simular
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="flex w-full justify-center bg-white py-12 lg:py-24" v-show="simulate">
            <canvas id="myCanvas" width="401" height="401"></canvas>
        </section>
    </div>
</template>
<script>
    import { useAppStore } from '@/stores/index';

    export default {
        data() {
            return {
                store: useAppStore(),
                simulate: undefined,
                inputData: {
                    triangles: 10, //59049 --- 3¨n
                    minTriangles: 1,
                    maxTriangles: 10,
                },
                c: undefined,
                ctx: undefined,
                delay1: 0,
                delay2: 0,
            };
        },
        computed: {
            enableSimulateButton() {
                return this.inputData.triangles >= this.inputData.minTriangles && this.inputData.triangles <= this.inputData.maxTriangles;
            },
        },
        methods: {
            generateTriangles() {
                this.simulate = true;
                this.c = document.getElementById('myCanvas');
                this.ctx = this.c.getContext('2d');
                this.ctx.clearRect(0, 0, 401, 401);
                // this.drawFract({ x: 0, y: 400 }, { x: 200, y: 0 }, { x: 400, y: 400 }, this.inputData.triangles);
                this.drawFract({ x: 0, y: 400 }, { x: 200, y: 0 }, { x: 400, y: 400 }, this.inputData.triangles > 10 ? 10 : this.inputData.triangles);
            },
            drawLine(p0, p1, color = 'black') {
                if (this.ctx) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p0.x, p0.y);
                    this.ctx.lineTo(p1.x, p1.y);
                    this.ctx.strokeStyle = color;
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();
                }
            },
            drawTriangle(p0, p1, p2) {
                this.drawLine(p0, p1);
                this.drawLine(p1, p2);
                this.drawLine(p2, p0);
            },
            drawFract(p0, p1, p2, nivel) {
                if (nivel > 0) {
                    /*Calcular nuevos vértices intermedios*/
                    const pA = {
                            x: p0.x + (p1.x - p0.x) / 2,
                            y: p0.y - (p0.y - p1.y) / 2,
                        },
                        pB = {
                            x: p1.x + (p2.x - p1.x) / 2,
                            y: p1.y - (p1.y - p2.y) / 2,
                        },
                        pC = {
                            x: p0.x + (p2.x - p0.x) / 2,
                            y: p0.y,
                        };

                    /*Dibujar los tres triángulos intermedios*/
                    this.drawFract(p0, pA, pC, nivel - 1);
                    setTimeout(() => {
                        this.drawFract(pA, p1, pB, nivel - 1);
                    }, this.delay1);
                    setTimeout(() => {
                        this.drawFract(pC, pB, p2, nivel - 1);
                    }, this.delay2);
                } else {
                    /*Triangulo principal*/
                    this.drawTriangle(p0, p1, p2);
                }
            },
        },
    };
</script>
