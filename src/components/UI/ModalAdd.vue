

<template>
   <Dialog :visible="visibleModalAdd" modal id="modal-add" :style="{ width: '40rem' }">
        
        <div class="flex flex-col gap-y-4 mb-5">
            
            <InputText type="text" v-model="title" class="shadow-lg border-none py-3" placeholder="Заголовок" />
      
            <Textarea v-model="text" rows="10" cols="30" class="shadow-lg border-none" placeholder="Текст" />
           
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="closeDialog"></Button>
            <Button type="button" label="Cохранять" @click="postTask"></Button>
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
    
    import { defineProps, defineEmits } from 'vue';

    const { visibleModalAdd } = defineProps(['visibleModalAdd']);
    const emit = defineEmits();

    const closeDialog = () => {
        emit('closeModalAdd');
    };
    const title = ref('');
    const text = ref('');

    const postTask = async() => {
        console.log(title.value)
        const data = {
            title: title.value,
            text: text.value
        }
        try{

            const res = await database.createDocument( DB_ID, COLLECTION_TASK_ID, unique_id, data);
            console.log(res)

            closeDialog();
        }catch(error){
            console.log(error)
        }
    }
</script>


<style>
   

    #modal-add .p-dialog-header .p-dialog-header-icons {
        display: none;
    }
</style>


