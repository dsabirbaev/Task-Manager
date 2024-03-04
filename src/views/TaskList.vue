


<template>
    <section class="py-10">
        <div class="container">
            

            <div class="flex flex-col"> 
                <button @click="openModalAdd" class="btn-add cursor-pointer w-fit self-end border-none bg-transparent flex items-center gap-x-2 text-xl px-4 py-2 rounded-lg">Добавить <i class="pi pi-plus-circle text-xl" ></i></button>
                <ModalAdd :visibleModalAdd="visibleModalAdd" @closeModalAdd="closeModalAdd" />
                <div> 
                    <h2 class="text-center font-bold text-xl mb-5">Список задач</h2>

                    <div class="flex items-center justify-center"> 
                        
                        
                    </div>    
                </div>
            </div>    
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import ModalAdd  from "@/components/UI/ModalAdd.vue";
    import Card from "@/components/UI/Card.vue";
   
    const visibleModalAdd = ref(false);
    const openModalAdd = () => {
        visibleModalAdd.value = true;
    };

    const closeModalAdd = () => {
        visibleModalAdd.value = false;
    };



</script>

<style scoped>
    .btn-add {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
    }

    .card {
        box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        
    }
</style>