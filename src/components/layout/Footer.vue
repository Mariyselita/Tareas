<template>
    <footer class="bg-black py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Contacto</h3>
            <ul class="text-gray-600">
              <li><i class="fas fa-envelope mr-2"></i> email: mcadenac2023@cic.ipn.mx</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 py-2 mt-6">
        <div class="container mx-auto px-4">
          <p class="text-center text-gray-600">© 2023 Centro de Investigación en Computación</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Component options
  }
  </script>
  
  <style scoped>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  /* Custom styles */
  
  i {
    @apply mr-2;
  }
  </style>