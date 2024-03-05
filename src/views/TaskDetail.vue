<template>
    <section class="detail-page py-10">
        <div class="container">
           
            <div class="flex items-center justify-center flex-col"> 
              <div class="w-[50vw]">
                <h2 class="text-center mb-5 bg-[#BA5112] text-white text-2xl py-1 rounded-lg">{{ title }}</h2>

                <p class="bg-[#BA5112] text-white text-2xl p-2 rounded-lg">{{ text }}</p>
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

    const title = ref('');
    const text = ref('');
    

    const getDataById = async() => {

        try{
            const res = await database.getDocument(DB_ID, COLLECTION_TASK_ID, taskId)
            title.value = res.title
            text.value = res.text
        }catch(error){
            console.log(error)
        }
    }

    onMounted(() => {
        getDataById();
    })
</script>

<style scoped>
    .detail-page{
        height: calc(100vh - 160px);
    }
</style>