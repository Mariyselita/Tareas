<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                ¿Qué es el clasificador bayesiano?
                            </h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/bayesiano.png"
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
                    <h1 class="mt-4 text-xl font-bold">¿Qué es el clasificador bayesiano?</h1>
                    <div>
                        <p>Antes de hablar del Clasificador Bayesiano, es prudente comentar acerca del Teorema de Bayes para entrar en contexto.</p>
                        <h1 class="mt-6 text-xl font-bold">Teorema de Bayes</h1>
                        <p>
                            Considérese el espacio muestral S y una partición de eventos mutuamente excluyentes A1, A2, ..., An. Sea un evento B de S que
                            contiene parte de los Ai, esto es Naive Bayes es el algoritmo más sencillo que se puede aplicar a los datos. Como su nombre indica,
                            este algoritmo asume que todas las variables del conjunto de datos son "naive", es decir, no están correlacionadas entre sí.
                        </p>

                        <p class="my-2">
                            Los clasificadores bayesianos son muy populares porque se utilizan principalmente para obtener la precisión base del conjunto de datos.
                        </p>
                        <h1 class="mt-6 text-lg font-bold">Ventajas</h1>
                        <ul>
                            <li>Es fácil y rápido predecir la clase del conjunto de datos de prueba. También funciona bien en la predicción multiclase.</li>
                            <li>
                                Cuando se cumple el supuesto de independencia, el clasificador Naive Bayes funciona mejor que otros modelos, como la regresión
                                logística, y necesita menos datos de entrenamiento.
                            </li>
                            <li>Funciona bien en el caso de las variables de entrada categóricas en comparación con las variables numéricas.</li>
                        </ul>
                        <h1 class="mt-6 text-lg font-bold">Desventajas</h1>
                        <ul>
                            <li>
                                Si la variable categórica tiene una categoría (en el conjunto de datos de prueba), que no se observó en el conjunto de datos de
                                entrenamiento, entonces el modelo asignará una probabilidad 0 (cero) y no podrá hacer una predicción.
                            </li>
                            <li>
                                Otra limitación de Naive Bayes es la suposición de predictores independientes. En la vida real, es casi imposible que obtengamos
                                un conjunto de predictores que sean completamente independientes.
                            </li>
                        </ul>
                        <h1 class="mt-6 text-lg font-bold">Aplicaciones</h1>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="...">
                            <img
                                src="/assets/images/proba/ficheros.svg"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto h-48 max-w-[560px]"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                            <p class="text-center">Clasificación de textos</p>
                        </div>
                        <div class="...">
                            <img
                                src="/assets/images/proba/filtrado.svg"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto h-48 max-w-[560px]"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                            <p class="text-center">Filtrado de spam</p>
                        </div>
                        <div class="...">
                            <img
                                src="/assets/images/proba/feelings.svg"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto h-48 max-w-[560px]"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                            <p class="text-center">Análisis de sentimientos</p>
                        </div>
                    </div>
                </div>
                <div class="my-12 block">
                    <h1 class="my-2 text-xl font-bold">Ejemplo de Implementación</h1>
                    <p>
                        Aquí hay un ejemplo de implementación simple de un clasificador Bayesiano realizado en Python. La intención de este ejercicio es tomar
                        la decisión de batear o lanzar con características de clima y humedad. Etiquetaremos esas características inicialmente, las entrenaremos
                        y usaremos el modelo entrenado para obtener los resultados previstos.
                    </p>
                    <iframe class="my-6" src="https://replit.com/@Mariyselita/classifier-bayes?embed=true" width="100%" height="600px" />
                    <p>El ejemplo anterior fue adaptado y traducido al español. La fuente se deja en las referencias.</p>
                </div>
                <div class="relative z-10 lg:block">
                    <h1 class="my-3 text-xl font-bold">Fuentes</h1>
                    <ul>
                        <li>
                            <i>Método Supervisado-Clasificación-Naive Bayes. </i>(s.f.). Comunidad Huawei Enterprise.
                            https://forum.huawei.com/enterprise/es/m%C3%A9todo-supervisado-clasificaci%C3%B3n-naive-bayes/thread/872753-100757
                        </li>
                        <li>
                            Borrego, Á. (2021b, noviembre 2).
                            <i>Capítulo 4 Clasificadores bayesianos | Introducción a la ciencia de datos para estudiantes de Información y Documentación. </i
                            >https://bookdown.org/angelborrego/ciencia_datos/clasificadores-bayesianos.html
                        </li>
                        <li>
                            Varangaonkar, S. (2021, December 12).<i> Naive Bayes Classifier using Python - Analytics Vidhya. </i>Medium.
                            https://medium.com/analytics-vidhya/naive-bayes-classifier-a-beginners-guide-to-master-the-fastest-and-simplest-classification-d6a368e6b737
                        </li>
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
            };
        },
    };
</script>
