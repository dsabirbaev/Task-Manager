


<template>
    <section class="py-10">
        <div class="container">
            

            <div class="flex flex-col"> 
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
    import {database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js";


    const listTasks = ref([]);
    const visibleModalAdd = ref(false);
    const openModalAdd = () => {
        visibleModalAdd.value = true;
    };

    const closeModalAdd = () => {
        visibleModalAdd.value = false;
    };

    
    const getTask = async() => {
        try{
            const response = await database.listDocuments(DB_ID, COLLECTION_TASK_ID);
            listTasks.value = response.documents;
            
        }catch(error){
            console.log(error)
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

</style>, onMountedimport { document } from 'postcss';
