<template>
    <vue-pdf-app style="height: 100vh" :pdf="pdfPath"></vue-pdf-app>
</template>

<script>
    import VuePdfApp from 'vue3-pdf-app';

    export default {
        components: {
            VuePdfApp,
        },
        data() {
            return {
                pdfPath: '/Godel.pdf', // Ruta relativa al archivo PDF en la carpeta "public"
            };
        },
    };
</script>
