

<template>
   <Dialog :visible="visibleModalAdd" modal id="modal-add" :style="{ width: '40rem' }">
        
        <div class="flex flex-col gap-y-4 mb-5">
            
            <InputText type="text" v-model="title" class="shadow-lg border-none py-3" placeholder="Заголовок" />
      
            <Textarea v-model="text" rows="10" cols="30" class="shadow-lg border-none" placeholder="Текст" />
           
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="closeDialog"></Button>
            <Button type="button"  @click="postTask" :disabled="loader">
                <template v-if="loader">
				    <i class="pi pi-spin pi-spinner"></i>
			    </template>
			    <template v-else>Cохранять</template>
            </Button>
        </div>
    </Dialog>
</template>

<script setup>
    import { ref } from "vue";
    import {database, DB_ID, COLLECTION_TASK_ID, unique_id} from "@/lib/appwrite.js";

    //// prime vue ui
    import Dialog from 'primevue/dialog';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';

    //// store Pinia
    import { useTaskStore } from "@/stores/taskStore";
    const listTaskStore = useTaskStore(); 
    
    //// modal window
    import { defineProps, defineEmits } from 'vue';
    const { visibleModalAdd } = defineProps(['visibleModalAdd']);
    const emit = defineEmits();

    const closeDialog = () => {
        emit('closeModalAdd');
    };

    ////
    const loader = ref(false)
    const title = ref('');
    const text = ref('');

    const postTask = async() => {
        loader.value = true
        const data = {
            title: title.value,
            text: text.value
        }
        try{
            await database.createDocument( DB_ID, COLLECTION_TASK_ID, unique_id, data);
            loader.value = false
            closeDialog();
            title.value = "";
            text.value = "";

            listTaskStore.getTask();
        }catch(error){
            console.log(error)
            loader.value = false
        }
    }
</script>


<style>
   

    #modal-add .p-dialog-header .p-dialog-header-icons {
        display: none;
    }
</style>


