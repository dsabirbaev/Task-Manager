
import { defineStore } from 'pinia'
import { ref, watch } from "vue";
import { database, DB_ID, COLLECTION_TASK_ID } from "@/lib/appwrite.js"


export const useTaskStore = defineStore("task", () => {
    const listTasks = ref([])
    const loader = ref(false)

    const getTask = async() => {
        loader.value = true
        try {
          const response = await database.listDocuments(DB_ID, COLLECTION_TASK_ID);
          listTasks.value = response.documents;
          loader.value = false
         
        } catch (error) {
          console.error('Error fetching tasks:', error);
          loader.value = false
        }
    };

   
    return {
        listTasks,
        getTask,
        loader
    };
})