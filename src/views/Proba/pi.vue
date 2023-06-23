<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">Cifras significativas de Pi</h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/pi.svg"
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
                <div class="my-12 block">
                    <h1 class="my-2 text-xl font-bold">Ejemplo de Implementación</h1>
                    <p class="my-1">Este código implementa un algoritmo para calcular los dígitos de Pi con una precisión especificada y utiliza
                         la fórmula de la serie de Bailey-Borwein-Plouffe (BBP) para calcular los dígitos de Pi.</p>
                    <img class="m-auto p-4" src="/assets/images/proba/BBP.svg" alt="bbp"/>
                    <p>La fórmula específica utilizada en este código es la siguiente:</p>
                    <p class="my-2">$$\pi = $$ residuo / piece_total </p>
                    <p class="p-2">
                        Donde: 
                        <ul class="p-2 lista">
                            <li>residuo es el valor constante 426880 multiplicado por la raíz cuadrada de 10005.</li>
                            <li>piece_total es la suma parcial de los términos calculados en cada iteración del bucle.</li>
                            <li>El bucle calcula los términos adicionales necesarios para obtener la precisión deseada.</li>
                            <li>Los términos adicionales se agregan a piece_total utilizando la función "formul" en cada iteración.</li>
                            <li>El bucle itera un número de veces determinado por interaction_count, que se calcula a partir de la sensibilidad deseada.</li>
                            <li>Al final, el resultado se devuelve como una cadena de texto.</li>
                        </ul>
                    </p>
                    <iframe class="my-6" src="https://replit.com/@Mariyselita/Pi?embed=true" width="100%" height="600px" />
                    <p>El ejemplo anterior fue adaptado y en parte traducido al español.</p>
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
<style type=”text/css”>
.lista {
  list-style-type: square;
}
</style>