<template>
    <section class="detail-page">
        <div v-if="loader" class="flex items-center justify-center detail-page bg-red-50">
            <i class="pi pi-spin pi-spinner text-4xl text-[#BA5112]"></i>
        </div>

        <div v-else class="container">
            
            <div class="flex items-center justify-center flex-col py-10"> 
              <div class="w-[50vw]">
                <h2 class="text-center mb-5 bg-[#BA5112] text-white text-2xl py-1 rounded-lg">{{ title }}</h2>

                <p class="bg-[#BA5112] text-white text-[18px] p-2 rounded-lg">{{ text }}</p>
              </div>
            </div>

           
        </div>
    </section>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    //// appwrite
    import {database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js";

    const route = useRoute(); 
    const taskId = route.params.id;

    const loader = ref(false);
    const title = ref('');
    const text = ref('');
    

    const getDataById = async() => {
        loader.value = true
        try{
            const res = await database.getDocument(DB_ID, COLLECTION_TASK_ID, taskId)
            title.value = res.title
            text.value = res.text
            loader.value = false
        }catch(error){
            console.log(error)
            loader.value = false;
        }
    }

    onMounted(() => {
        getDataById();
    })
</script>

<style scoped>
    .detail-page{
        min-height: calc(100vh - 160px);
    }
</style>