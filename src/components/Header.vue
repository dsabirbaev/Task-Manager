<template>
    <header class="bg-[#EDB046]">
        <div class="container">
            <div class="h-[80px] flex items-center justify-between"> 
                <router-link to="/" title="Bosh sahifa" class="text-grey-700  text-[22px] font-['InterBold']">
                    T.Manager
                </router-link>
                <ul class="flex items-center gap-x-6">
                    <li>
                        <router-link to="/" title="Bosh sahifa" class="text-white font-['InterMedium'] text-[18px]">
                            Главная
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/task-list" title="Bosh sahifa" class="text-white font-['InterMedium'] text-[18px]">
                            Список задач
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/statistic" title="Bosh sahifa" class="text-white font-['InterMedium'] text-[18px]">
                            Статистика
                        </router-link>
                    </li>
            
                </ul>

                <Button icon="pi pi-sign-in" label="Вход" severity="primary" class="flex gap-x-2" />
            </div>    
        </div>
    </header>
</template>

<script setup>
    import Button from 'primevue/button';

</script>

<style lang="scss" scoped>

</style>