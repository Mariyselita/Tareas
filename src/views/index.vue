<template>
    <div class="overflow-x-hidden pb-4">
        <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] lg:-mx-[150px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative pt-4 pb-10">
                        <h3><b>Centro de Investigación en Computación</b></h3>
                        <h3>Alumna: <b>Marisela Cadena Cosmes</b></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="relative pt-2 pb-0 lg:pt-20">
                <h3 class="text-3xl font-extrabold">Contenidos</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div class="pt-4 pb-2">
                        <h4 class="font-bold text-xl pb-2">Probabilidad, procesos aleatorios e inferencia</h4>
                        <h5 class="font-semibold pt-6 pb-2">Tareas</h5>
                        <ul>
                            <li><router-link to="/simulate-dices">Simulación de dados</router-link></li>
                            <li><router-link to="/equilateral-triangle">Triángulo de Sierpinski</router-link></li>
                            <li>Cifras significativas de Pi</li>
                            <li><router-link to="/bayesian-classifier">Clasificador Bayesiano</router-link></li>
                            <li>Serie geométricaa de familias de variables aleatorias (a qué converge)</li>
                            <li>Paradoja de Monty Hall</li>
                            <li>Kurtosis (k-ésimo momento)</li>
                            <li>Skewness</li>
                            <li>Demostración: Encontrar la varianza de la E.</li>
                            <li>Función generadora de momentos: 1ro y 2do (continuas y discretas)</li>
                            <li>Función generadora de momentos: 3ro y 4to</li>
                            <li>Pares de 73 problemas</li>
                        </ul>
                        <h5 class="font-semibold pt-6 pb-2">Lecturas</h5>
                        <ul>
                            <li>Los dragones del Edén</li>
                            <li>Aproximación de Stirling</li>
                            <li>La falsa medida del hombre (Stephen J. Gould)</li>
                            <li>El tío Petros y la Paradoja de Goldbach</li>
                        </ul>
                    </div>
                    <div class="pt-4 pb-2">
                        <h4 class="font-bold text-xl pb-2">Teoría de la computación</h4>
                        <h5 class="font-semibold pt-6 pb-2">Tareas</h5>
                        <ul>
                            <li>Ejercicios del 1.1 al 1.6</li>
                            <li>Ejercicios del 1.7 al 1.10</li>
                            <li>Hacer ejemplo de una intersección y complemento</li>
                            <li>Programa de estados</li>
                            <li>Juego de canicas</li>
                            <li>DFA cap. 2 pg. 51</li>
                            <li>¿Qué es la máquina de Moore y Mealy?</li>
                            <li>pg. 46, 47</li>
                            <li>¿Qué dispositivos reales tienen flechas epsilon?</li>
                            <li>Descripción formal del autómata M1 (Tabla de transición)</li>
                            <li>¿Qué es un compilador?</li>
                            <li>Forma Normal de Noam Chomsky</li>
                            <li>Programar la GLC de los números arábigos a romanos</li>
                        </ul>
                        <h5 class="font-semibold pt-6 pb-2">Lecturas</h5>
                        <ul>
                            <li>Historia de la computación y sus pioneros</li>
                            <li>Godel. Escher. Bach: Una trenza de oro eterna </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    a:hover{
        color: #b376e4;
        font-weight: bold;
    }
</style>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

    const activeTab = ref('all');
</script>
