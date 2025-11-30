<template>
<section class="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12">

        <header class="text-center mb-8 sm:mb-12">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Formación académica
            </h2>
        </header>

        <div class="space-y-6 sm:space-y-8">

            <div
                class="bg-white p-5 sm:p-6 rounded-xl shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition duration-300">
                
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                        Licenciatura en Gestión de Tecnología
                    </h3>
                    <p class="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full self-start sm:self-auto">
                        UNIVERSITARIO
                    </p>
                </div>

                <p class="text-base sm:text-lg font-medium text-gray-600 mb-2">
                    <i class="pi pi-building mr-2 text-gray-500"></i> Universidad Nacional de La Matanza
                </p>

                <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <i class="pi pi-calendar mr-2 text-gray-500"></i> Marzo de 2022 hasta diciembre de 2023
                </p>

                <div class="pt-3 sm:pt-4 border-t border-gray-200">
                    <p class="font-semibold text-gray-700 mb-2">Aptitudes Clave:</p>
                    <div class="flex flex-wrap gap-2">
                        <Tag value="Java" icon="pi pi-code" severity="success" class="font-medium" />
                        <Tag value="Angular" icon="pi pi-code" severity="success" class="font-medium" />
                        <Tag value="SQL" icon="pi pi-database" severity="info" class="font-medium" />
                        <Tag value="Jira" icon="pi pi-list" severity="warn" class="font-medium" />
                        <Tag value="Trello" icon="pi pi-list" severity="warn" class="font-medium" />
                    </div>
                </div>
            </div>

            <div
                class="bg-white p-5 sm:p-6 rounded-xl shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition duration-300">
                
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                        Tecnicatura Superior en Análisis de Sistemas
                    </h3>
                    <p class="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full self-start sm:self-auto">
                        TÉCNICO
                    </p>
                </div>

                <p class="text-base sm:text-lg font-medium text-gray-600 mb-2">
                    <i class="pi pi-building mr-2 text-gray-500"></i> Instituto de Formación Técnica Superior N° 11
                </p>

                <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <i class="pi pi-calendar mr-2 text-gray-500"></i> Marzo de 2019 hasta diciembre de 2021
                </p>

                <div class="pt-3 sm:pt-4 border-t border-gray-200">
                    <div class="flex flex-wrap gap-2">
                        <Tag value="C#" icon="pi pi-code" severity="success" class="font-medium" />
                        <Tag value="Angular" icon="pi pi-code" severity="success" class="font-medium" />
                        <Tag value="SQL" icon="pi pi-database" severity="info" class="font-medium" />
                        <Tag value="Firebase" icon="pi pi-database" severity="info" class="font-medium" />
                        <Tag value="Jira" icon="pi pi-list" severity="warn" class="font-medium" />
                        <Tag value="Trello" icon="pi pi-list" severity="warn" class="font-medium" />
                    </div>
                </div>
            </div>

            <div
                class="bg-white p-5 sm:p-6 rounded-xl shadow-xl border-l-4 border-yellow-500 hover:shadow-2xl transition duration-300">
                
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                        Formación en Testing de Software
                    </h3>
                    <p class="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full self-start sm:self-auto">
                        CERTIFICACIÓN
                    </p>
                </div>

                <p class="text-base sm:text-lg font-medium text-gray-600 mb-2">
                    <i class="pi pi-briefcase mr-2 text-gray-500"></i> Proyecto Nahual
                </p>

                <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <i class="pi pi-calendar mr-2 text-gray-500"></i> Marzo de 2018 hasta julio de 2018
                </p>
                
                <div class="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-gray-200">
                    <div class="pb-3 border-b border-gray-100"> 
                        <p class="font-semibold text-gray-700 mb-2">Contenidos:</p>
                        <ul class="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                            <li>Armado y ejecución de casos de pruebas.</li>
                            <li>Detección y reporte de errores.</li>
                            <li>Introducción a SQL.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <div class="flex flex-wrap gap-2">
                            <Tag value="SQL" icon="pi pi-database" severity="info" class="font-medium" />
                            <Tag value="Jira" icon="pi pi-list" severity="warn" class="font-medium" />
                            <Tag value="Trello" icon="pi pi-list" severity="warn" class="font-medium" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
// Asegúrate de importar Tag de PrimeVue
import Tag from 'primevue/tag';
</script>