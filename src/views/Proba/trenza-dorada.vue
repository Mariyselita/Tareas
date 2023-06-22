<template>
    <vue-pdf-app style="height: 100vh" pdf="https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf"></vue-pdf-app>
</template>

<script>
    import VuePdfApp from 'vue3-pdf-app';
    // import this to use default icons for buttons
    import 'vue3-pdf-app/dist/icons/main.css';

    export default {
        components: {
            VuePdfApp,
        },
    };
</script>
