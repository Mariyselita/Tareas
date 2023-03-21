<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">Kurtosis</h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/kurtosis.svg"
                                alt="Sierpinski-triangle"
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
                    <h1>¿Qué es la kurtosis?</h1>
                    <p></p>
                    <h4></h4>
                    <h1>Fuentes</h1>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
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
