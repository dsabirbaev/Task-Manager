

<template>
    <div class="card w-[900px] p-4 flex items-center justify-between"> 
        <router-link :to="{ path: 'task-list' + '/' + data?.$id }">
            {{ data?.title }}
        </router-link>
        <div class="flex gap-x-4"> 
            
            
            <Button @click="openModalEdit" label="Save"  title="Edit" outlined>
                <i class="pi pi-pencil text-md"/>
            </Button>
            <ModalEdit :visibleModalEdit="visibleModalEdit" :taskId="data?.$id" @closeModalEdit="closeModalEdit" />

            <Button @click="deleteTask(data?.$id)"  label="Delete" severity="danger" title="Delete" outlined>
                <i class="pi pi-trash text-md"/>
            </Button>
    
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Button from 'primevue/button';
    const props = defineProps(['data'])
    import ModalEdit  from "@/components/UI/ModalEdit.vue";

    //// appwrite
    import {database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js";

    //// store Pinia
    import { useTaskStore } from "@/stores/taskStore";
    const listTaskStore = useTaskStore(); 

    //// modal window
    const visibleModalEdit = ref(false);
    const openModalEdit = () => {
        visibleModalEdit.value = true;
    };

    const closeModalEdit = () => {
        visibleModalEdit.value = false;
    };


    const deleteTask = async(id) => {
        try{
            await database.deleteDocument(DB_ID, COLLECTION_TASK_ID, id)
            listTaskStore.getTask();
        }catch(error){
            console.log(error)
        }
    }


   

</script>



<style scoped>
   
    .card {
        box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        
    }
</style>

