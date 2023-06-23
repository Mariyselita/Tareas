<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                Gramática Libre de Contexto de Números arábigos a romanos
                            </h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/teoria/b.png"
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
                        <!-- Código omitido por brevedad -->
                        <h1 class="mt-6 text-xl font-bold">Proceso</h1>
                        <p class="my-2">
                            La Gramática Libre de Contexto (GLC) para la conversión de números arábigos a números romanos se puede representar de la siguiente
                            manera:
                        </p>
                        <p>1. Definir los símbolos no terminales para que sean un solo carácter cada uno:</p>
                        <div class="language my-2">
                            <code class="language-rust" v-html="formattedCode"></code>
                        </div>
                        <p>2. Redefinir los símbolos terminales y las reglas de producción correspondientes:</p>
                        <div class="language my-2">
                            <code class="language-rust" v-html="formattedCodeB"></code>
                        </div>
                        <p>3. Algoritmo:</p>
                        <iframe class="my-6" src="https://replit.com/@Mariyselita/GLC-Rom-greaterAra?embed=true" width="100%" height="600px" />
                        <p>El algoritmo realiza la conversión ajustado a la FNC.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { useAppStore } from '@/stores/index';
    import Prism from 'prismjs';

    import 'prismjs/themes/prism.css';
    import 'prismjs/components/prism-python';
    import 'prismjs/components/prism-rust';

    export default {
        data() {
            return {
                store: useAppStore(),
                codeA: `
                  S -> R\n
                  R -> THO\n
                  T -> M | MM | MMM | ε\n
                  H -> C | CC | CCC | CD | D | DC | DCC | DCCC | CM | ε\n
                  O -> X | XX | XXX | XL | L | LX | LXX | LXXX | XC | ε`,
                codeB: `
                M -> "M"
                C -> "C"
                D -> "D"
                X -> "X"
                `,
            };
        },
        computed: {
            formattedCode() {
                return Prism.highlight(this.codeA.trim(), Prism.languages.rust, 'rust').replace(/\n/g, '<br>');
            },
            formattedCodeB() {
                return Prism.highlight(this.codeB.trim(), Prism.languages.rust, 'rust').replace(/\n/g, '<br>');
            },
        },
    };
</script>
