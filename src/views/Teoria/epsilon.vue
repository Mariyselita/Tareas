<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                ¿Qué dispositivos reales utilizan epsilon?
                            </h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/teoria/epsilon.png"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto mb-6 w-48 max-w-[560px] md:mb-0"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="py-6 dark:bg-gray-dark lg:py-6">
            <div class="container text-justify">
                <div class="relative z-10 lg:block">
                    <div>
                        <p>Hay varios dispositivos que utilizan la flecha epsilon en su funcionamiento o representación, algunos ejemplos incluyen:</p>
                        <h1 class="mt-6 text-xl font-bold">Transductores electrónicos</h1>
                        La flecha epsilon se utiliza para representar la precisión y la linealidad de los transductores electrónicos.
                        <img src="/assets/images/teoria/a.png" class="m-auto h-60" />
                        <h1 class="mt-6 text-base font-bold">Funcionamiento de los transductores</h1>
                        <p>
                            La función de un transductor es la de convertir una variable física en otra que tiene un dominio diferente, no estoy segura de qué
                            quiere decir eso, pero bueno.
                        </p>
                        <h1 class="mt-6 text-base font-bold">Tipos de transductores:</h1>
                        <ul>
                            <li>Transductores de entrada que forman parte de un sistema de sensado.</li>
                            <li>Transductores de salida que forman parte de un sistema de actuación.</li>
                        </ul>
                        <h1 class="mt-6 text-base font-bold">Ejemplos de transductores:</h1>
                        <h2 class="mt-6 text-sm font-bold">Actuadores de transductores:</h2>
                        <p>
                            Estos son dispositivos con la capacidad de generar una fuerza que ejerce un cambio de posición, velocidad o estado físico sobre un
                            elemento mecánico a partir de la transformación de energía. Por ello, los actuadores se clasifican con base en el tipo de energía
                            que utilizan: neumático, hidráulico y eléctrico; o bien, por el tipo de movimiento que generan: rotatorio o lineal.
                        </p>
                        <img src="/assets/images/teoria/actuadores.png" class="m-auto h-96" />
                        <h2 class="mt-6 text-sm font-bold">Instrumentos de medición</h2>
                        <p>
                            Algunos instrumentos de medición, como los calibradores de presión, utilizan la flecha epsilon para indicar la precisión y el rango
                            de medición.
                        </p>
                        <h2 class="mt-6 text-sm font-bold">Sistemas de control</h2>
                        <p>La flecha epsilon también se utiliza en la representación de sistemas de control en control automático.</p>
                        <h2 class="mt-6 text-sm font-bold">Matemáticas y cálculo</h2>
                        <p>En matemáticas y cálculo, la flecha epsilon se utiliza como una notación para indicar una cantidad pequeña o un valor aproximado.</p>
                    </div>
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
            };
        },
    };
</script>
