

<template>
   <Dialog :visible="visibleModalAdd" modal id="modal-add" :style="{ width: '40rem' }">
        
        <div class="flex flex-col gap-y-4 mb-5">
            
            <InputText type="text" v-model="value" class="shadow-lg border-none py-3" placeholder="Заголовок" />
      
            <Textarea v-model="value" rows="10" cols="30" class="shadow-lg border-none" placeholder="Текст" />
           
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="closeDialog"></Button>
            <Button type="button" label="Cохранять" @click="visible = false"></Button>
        </div>
    </Dialog>
</template>

<script setup>
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
</script>


<style>
   

    #modal-add .p-dialog-header .p-dialog-header-icons {
        display: none;
    }
</style>


