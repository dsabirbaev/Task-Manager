

<template>
   <Dialog :visible="visibleModalAdd" modal id="modal-add" :style="{ width: '40rem' }">
        <Toast />
        <div class="flex flex-col gap-y-4 mb-5">
            
            <InputText type="text" v-model.trim="title" class="shadow-lg border-none py-3" placeholder="Заголовок" />
      
            <Textarea v-model.trim="text" rows="10" cols="30" class="shadow-lg border-none" placeholder="Текст" />
           
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

    //// prime vue toast
    import { useToast } from "primevue/usetoast";
    const toast = useToast();


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
        
        if(data.title.length >= 1 && data.text.length >= 1) {
            try{
                await database.createDocument( DB_ID, COLLECTION_TASK_ID, unique_id, data);
                loader.value = false
                closeDialog();
                title.value = "";
                text.value = "";
                toast.add({ severity: 'success', detail: 'Добавлена ​​задача!', life: 1500 });
                listTaskStore.getTask();
            }catch(error){
                toast.add({ severity: 'error', detail: 'Упс, что-то пошло не так!', life: 2000 });
                loader.value = false
            } 
        }else {
            toast.add({ severity: 'error', detail: 'Заполнить поля!', life: 2000 });
            loader.value = false
        }
       
        
    }
</script>


<style>
   

    #modal-add .p-dialog-header .p-dialog-header-icons {
        display: none;
    }
</style>


