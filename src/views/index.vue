<template>
    <div class="overflow-x-hidden">
        <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                        <h3>Marisela Cadena Cosmes MCC</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

    const activeTab = ref('all');
</script>
