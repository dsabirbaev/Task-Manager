

<template>
   <section class="home-page py-10">
        <div class="container">
            <div class="flex items-center justify-around gap-x-5">
                <div class="flex flex-col gap-y-10">
                    <div class="text-center text-gray-400">
                        <h2 class="font-bold block mb-5 text-4xl text-black font-['InterBold']">Добро пожаловать!</h2>
                        Что вы хотите сделать сегодня?
                    </div>

                    <img src="@/assets/images/user.png" alt="user" class="self-start">
                </div>
                <Calendar inline showWeek/>
            </div>
        </div>
   </section>
    
</template>

<script setup>
    
    import Calendar from 'primevue/calendar';
    

</script>

<style scoped>
    
    .home-page{
        min-height: calc(100vh - 160px);
    }
</style>
import { space } from 'postcss/lib/list';
import { space } from 'postcss/lib/list';

