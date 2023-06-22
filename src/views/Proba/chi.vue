<template>
    <div id="app">
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                Chi cuadrada usando un dataset del Titanic
                            </h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/Titanic/Titanic.png"
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
                    <h1 class="text-xl font-bold mb-4">Chi cuadrada</h1>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-11">
                            <p class="mb-2 text-justify">
                                La distribución Chi cuadrada es una distribución de probabilidad que se utiliza en estadística para analizar datos y realizar
                                pruebas de hipótesis, es importante porque es la base de varios procesos de inferencia estadística debido a su relación con la
                                Distribución Normal.
                            </p>
                            <p class="mb-2 text-justify">
                                La distribución chi cuadrada se denota como χ² y tiene un parámetro llamado <b>"grados de libertad"</b>. El número de grados de
                                libertad está relacionado con la cantidad de variables categóricas en la tabla de contingencia utilizada en la prueba de chi
                                cuadrada.
                            </p>
                            <h2 class="text-lg font-bold mt-4">Definición</h2>
                            <div>
                                <p class="text-justify">
                                    Sea <i>v</i> un entero positivo. Se dice que una variable aleatoria <i>X</i> tiene una distribución chi-cuadrada con
                                    parámetro <i>v</i> si la función de densidad de probabilidad de <i>X</i> es la densidad gamma con $$\alpha = \frac{v}{2}$$ y
                                    $$\beta={2}$$. La función de densidad de probabilidad de una variable aleatoria Chi cuadrada es entonces:
                                </p>
                                <p class="mt-2 text-center">
                                    $$χ^2(x; v) = (\frac{1}{2^{(\frac{v}{2})}* Γ(\frac{v}{2})}) * (x^{((\frac{v}{2})-1)}* e^{(\frac{-x}{2})} )$$
                                </p>
                                <p>
                                    Donde:
                                    <ul>
                                        <li>
                                        \(\Gamma\) es la función gamma,
                                        </li>
                                        <li>
                                        \(v\) es el número de grados de libertad, y
                                        </li>
                                        <li>
                                        \(e\) es la constante de Euler.
                                        </li>
                                    </ul>
                                </p>
                                <p class="my-2 text-justify">
                                    El parámetro <i>v</i> se llama <b>grados de libertad</b> (gl) de <i>X</i>. A menudo se utiliza el símbolo $$χ^{2}$$.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="col-span-11 text-justify">
                            <h2 class="text-lg font-bold">Análisis de Chi cuadrado</h2>
                            <p class="my-2">
                                Se usa un análisis de chi-cuadrado cuando nuestros datos están en forma de recuentos sin procesar para dos o más grupos
                                categóricos, por ejemplo, guisantes amarillos o semillas de guisantes verdes, tasa de supervivencia de ratones si tomaron el
                                medicamento A o B, etc. Cada observación independiente definitivamente debe pertenecer a un grupo o al otro, y no debe haber
                                réplicas. Es decir, para cada categoría solo tenemos un recuento.
                            </p>
                            <p>
                                Lo que hacemos es comparar las cuentas que obtuvimos con algún valor esperado de acuerdo con el azar o con alguna teoría previa.
                                Por ejemplo: Si lanzáramos una moneda justa 1000 veces, esperaríamos 500 caras y 500 cruces, es decir, cara y cruz en la
                                proporción 1:1. Si lanzáramos un dado justo un gran número de veces, esperaríamos que cada resultado posible, del 1 al 6,
                                ocurriera el mismo número de veces. es decir, cada puntaje ocurriría 1/6 del tiempo. Si la idea básica de la herencia mendeliana
                                es correcta, esperaríamos que si cruzáramos dos plantas de guisantes que fueran heterocigotas para el color de las semillas
                                amarillo y verde, siendo el amarillo el dominante, entonces la descendencia tendría semillas amarillas: verdes en la proporción
                                3: 1 (YY, YG, GY serían todos amarillos, GG sería verde). En una prueba de chi-cuadrado, nuestra hipótesis nula es que las
                                ideas/teoría detrás de nosotros que obtienen las proporciones esperadas son correctas. Le damos estas proporciones esperadas y
                                también los números que realmente obtuvimos. Luego nos da un valor p, una probabilidad, de qué tan probable es que obtengamos
                                esos valores si esa hipótesis nula fuera correcta. Si este valor p es demasiado pequeño y, por lo general, queremos decir menos
                                de 0,05, entonces rechazamos la hipótesis nula. Ejemplo Supongamos que hemos cruzado dos plantas de guisantes que eran
                                heterocigotas para el color de la semilla amarillo/verde. Obtenemos 176 crías, de las cuales 130 fueron amarillas y 46 verdes.
                                Los datos aquí son conteos sin procesar, y la descendencia de una planta de guisante individual contribuye al conteo amarillo o
                                al conteo verde, pero no a ambos. Nuestros conteos esperados de amarillo y verde se encuentran simplemente dividiendo el conteo
                                total, 76, en la proporción 3:1, lo que nos da 132 plantas amarillas esperadas y 44 plantas verdes esperadas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <p>
                El conjunto de datos del Titanic es un conjunto de datos que contiene detalles de los pasajeros a bordo del Titanic cuando encontró su destino
                en 1912. En este cuaderno, compararemos cómo la clase del pasajero afecta la probabilidad (ambos son categóricos) con la prueba de chi cuadrado.
                Para la Introducción a la prueba de chi-cuadrado, consulte mi cuaderno anterior y este video.
            </p>
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
