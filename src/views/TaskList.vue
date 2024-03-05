


<template>
    <section class="task-list-page">
        <Toast />
        <div v-if="listTaskStore.loader" class="flex items-center justify-center task-list-page bg-red-50">
            <i class="pi pi-spin pi-spinner text-4xl text-[#BA5112]"></i>
        </div>
        <div  v-else class="container">
            <div class="flex flex-col py-10"> 
                <button @click="openModalAdd" class="btn-add cursor-pointer w-fit self-end border-none bg-transparent flex items-center gap-x-2 text-xl px-4 py-2 rounded-lg">Добавить <i class="pi pi-plus-circle text-xl" ></i></button>
                <ModalAdd :visibleModalAdd="visibleModalAdd" @closeModalAdd="closeModalAdd" />
                <div> 
                    <h2 class="text-center font-bold text-xl mb-5">Список задач</h2>

                    <div class="flex flex-col gap-y-5 items-center justify-center"> 
                        <Card v-for="item, index in listTaskStore.listTasks" :key="index" :data="item" />
                        
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

   
    //// store Pinia
    import { useTaskStore } from "@/stores/taskStore";
    const listTaskStore = useTaskStore(); 
    

    //// modal window
    const visibleModalAdd = ref(false);
    const openModalAdd = () => {
        visibleModalAdd.value = true;
    };

    const closeModalAdd = () => {
        visibleModalAdd.value = false;
    };

    ////
    
   

    onMounted(() => {
        listTaskStore.getTask();
    })

</script>

<style scoped>
    .btn-add {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
    }

    .task-list-page{
        min-height: calc(100vh - 160px);
    }
</style>import { useTaskStore } from '@/stores/task.store';
useTaskStore, useTaskStore, useTaskStore, 
