



<template>
    <Dialog :visible="visibleModalEdit" modal id="modal-add" :style="{ width: '40rem' }">
        
        <div class="flex flex-col gap-y-4 mb-5">
            
            <InputText v-model.trim="title" :value="title" type="text"  class="shadow-lg border-none py-3"  />
      
            <Textarea v-model.trim="text" :value="text" rows="10" cols="30" class="shadow-lg border-none"  />
           
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="closeDialog"></Button>
            <Button type="button"  @click="editTask" :disabled="loader">
                <template v-if="loader">
				    <i class="pi pi-spin pi-spinner"></i>
			    </template>
			    <template v-else>Pедактировать</template>
            </Button>
        </div>
    </Dialog>

</template>

<script setup>
    import { ref, onMounted } from 'vue';

    //// prime vue ui
    import Dialog from 'primevue/dialog';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';

    //// appwrite
    import {database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js";

     //// prime vue toast
    import { useToast } from "primevue/usetoast";
    const toast = useToast();

    //// store Pinia
    import { useTaskStore } from "@/stores/taskStore";
    const listTaskStore = useTaskStore(); 

    //// modal window settings
    import { defineProps, defineEmits } from 'vue';
    const { visibleModalEdit, taskId } = defineProps(['visibleModalEdit', 'taskId']);
    const emit = defineEmits();

    const closeDialog = () => {
        emit('closeModalEdit');
    };

    ////
    const loader = ref(false)
    const title = ref('');
    const text = ref('');



    const editTask = async() => {
        loader.value = true
        const data = {
            title: title.value,
            text: text.value
        }
        if(data.title.length >= 1 && data.text.length >= 1) {
            try{
                await database.updateDocument(DB_ID, COLLECTION_TASK_ID, taskId, data)
                loader.value = false
                closeDialog();
                toast.add({ severity: 'success', detail: 'Задача отредактирована!', life: 1500 });
                listTaskStore.getTask();
            }catch(error){
                toast.add({ severity: 'error', detail: 'Упс, что-то пошло не так!', life: 2000 });
                loader.value = false
            }
        }else{
            toast.add({ severity: 'error', detail: 'Заполнить поля!', life: 2000 });
            loader.value = false
        }

       
    }

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

</style>