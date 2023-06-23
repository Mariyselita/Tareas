<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">Curtosis</h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/kurtosis.svg"
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
                    <h1 class="text-xl font-bold">Tipos de Curtosis</h1>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-12 sm:col-span-2">
                            <div class="text-justify">
                                <p class="mt-2">
                                    Las distribuciones pueden adoptar diferentes formas. Por ejemplo, la Campana de Gauss presenta una forma distintiva.
                                </p>
                                <p class="mt-2">
                                    Cuando las variables siguen esta forma, tienen un pico llamado unimodal. Sin embargo, en ocasiones este pico puede ser más
                                    de uno, lo que se conoce como multimodal, lo que indica la presencia de dos poblaciones diferentes con sus respectivas
                                    medias dentro del conjunto de datos.
                                </p>
                                <p class="mt-2">
                                    La curtosis es una medida estadística que describe la forma de una distribución de datos. Se refiere a la concentración de
                                    los datos alrededor de la media y la forma de las colas de la distribución. En otras palabras, la curtosis nos indica qué
                                    tan puntiaguda o aplanada es una distribución en comparación con la distribución normal, que se considera como referencia.
                                </p>
                                <p class="mt-2">
                                    Antes de abordar el tema de la curtosis, es importante mencionar que cuando hablamos de medidas de forma, existen
                                    distribuciones simétricas y asimétricas. Una distribución simétrica ocurre cuando la dispersión es igual tanto a la derecha
                                    como a la izquierda de la media. Por otro lado, en las variables donde los valores no están uniformemente distribuidos hacia
                                    el final de la distribución, se presenta asimetría.
                                </p>
                                <p class="mt-2">
                                    Frecuentemente, se define la curtosis como una forma que "roza el techo" en los datos, o bien como la "puntiagudez" de la
                                    distribución.
                                </p>
                                <p class="mt-2 mb-4">A continuación, se presentan los tres tipos principales de curtosis.</p>
                                <ul>
                                    <li>
                                        <b>Leptocurtosis:</b> el término "lepto" proviene del griego y significa "delgado". En la leptocurtosis, el valor de
                                        curtosis es alto. Platicurtosis: el término "plati" se refiere a algo "grande" o "plano".
                                    </li>
                                    <li><b>Platicurtosis:</b>En la platicurtosis, el valor de curtosis es bajo.</li>
                                    <li><b>Mesocurtosis: </b>El término "meso" significa "medio" o "entre". La distribución normal es mesocúrtica.</li>
                                </ul>
                                <p class="mt-2">
                                    La curtosis estadística y la curtosis probabilística son dos enfoques diferentes para medir la forma de una distribución de
                                    datos. Aunque ambos conceptos están relacionados, difieren en la manera en que se calculan y se interpretan.
                                </p>
                                <p class="mt-2">
                                    La curtosis estadística se basa en datos observados y se calcula utilizando fórmulas que involucran momentos estadísticos,
                                    como la media y la desviación estándar. Se utiliza para medir la concentración de datos y la forma de las colas de la
                                    distribución en relación con la distribución normal. La curtosis estadística puede tener valores positivos o negativos, lo
                                    que indica una distribución más puntiaguda o más aplanada respectivamente en comparación con la distribución normal.
                                </p>
                                <p class="mt-2">
                                    La curtosis probabilística, por otro lado, se basa en una función de densidad de probabilidad (<i>f(x)</i>) teórica y se
                                    utiliza para describir la forma de la distribución teórica. Se calcula a partir de la función de densidad de probabilidad y
                                    puede proporcionar información sobre la forma de las colas y la concentración de datos. La curtosis probabilística también
                                    puede tener valores positivos o negativos, reflejando una distribución más puntiaguda o más aplanada en relación con una
                                    distribución de referencia, como la distribución normal.
                                </p>
                                <p class="mt-2">
                                    Ambos enfoques, tanto la curtosis estadística como la curtosis probabilística, proporcionan medidas de la forma de una
                                    distribución, pero se basan en diferentes enfoques y cálculos. La curtosis estadística se enfoca en datos observados,
                                    mientras que la curtosis probabilística se basa en la función de densidad de probabilidad teórica. Es importante tener en
                                    cuenta estas diferencias al interpretar y comparar medidas de curtosis en diferentes contextos.
                                </p>
                            </div>
                        </div>
                        <div class="col-span-1 hidden sm:block">
                            <img class="mx-auto h-80" src="/assets/images/proba/kurtosis/Leptocurtosis.svg" alt="lep" />
                            <img class="mx-auto h-80" src="/assets/images/proba/kurtosis/Platicurtosis.svg" alt="pla" />
                            <img class="mx-auto h-80" src="/assets/images/proba/kurtosis/Mesocurtosis.svg" alt="eso" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { useAppStore } from '@/stores/index';
    import MathLive from 'mathlive';

    export default {
        name: 'app',
        components: {},
        data: function () {
            return {
                formula: 'f(x)',
                config: {
                    smartMode: false,
                    virtualKeyboardMode: 'manual',
                },
                store: useAppStore(),
            };
        },
        mounted() {
            MathLive.renderMathInDocument();

            const spanElements = document.querySelectorAll('span[data-original-content]');
            spanElements.forEach((spanElement) => {
                spanElement.style.display = 'none';
            });
        },
    };
</script>
