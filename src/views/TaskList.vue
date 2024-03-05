


<template>
    <section class="task-list-page">
        <div v-if="loader" class="flex items-center justify-center task-list-page bg-red-50">
            <i class="pi pi-spin pi-spinner text-4xl text-[#BA5112]"></i>
        </div>
        <div v-else class="container">
            <div class="flex flex-col py-10"> 
                <button @click="openModalAdd" class="btn-add cursor-pointer w-fit self-end border-none bg-transparent flex items-center gap-x-2 text-xl px-4 py-2 rounded-lg">Добавить <i class="pi pi-plus-circle text-xl" ></i></button>
                <ModalAdd :visibleModalAdd="visibleModalAdd" @closeModalAdd="closeModalAdd" />
                <div> 
                    <h2 class="text-center font-bold text-xl mb-5">Список задач</h2>

                    <div class="flex flex-col gap-y-5 items-center justify-center"> 
                        <Card v-for="item, index in listTasks" :key="index" :data="item" />
                        
                    </div>    
                </div>
            </div>    
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import ModalAdd  from "@/components/UI/ModalAdd.vue";
    import Card from "@/components/UI/Card.vue";

    //// appwrite
    import {database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js";


    const listTasks = ref([]);
    const loader = ref(false);

    //// modal window
    const visibleModalAdd = ref(false);
    const openModalAdd = () => {
        visibleModalAdd.value = true;
    };

    const closeModalAdd = () => {
        visibleModalAdd.value = false;
    };

    ////
    
    const getTask = async() => {
        loader.value = true
        try{
            const response = await database.listDocuments(DB_ID, COLLECTION_TASK_ID);
            listTasks.value = response.documents;
            loader.value = false
        }catch(error){
            console.log(error)
            loader.value = false
        }
    }

    onMounted(() => {
        getTask();
    })

</script>

<style scoped>
    .btn-add {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
    }

    .task-list-page{
        min-height: calc(100vh - 160px);
    }
</style>
