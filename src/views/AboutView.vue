<template>
  <section class="p-8 lg:p-12">
    <div class="max-w-6xl mx-auto">

      <header class="text-center mb-10">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Mi Perfil Profesional
        </h2>
        <p class="text-xl text-white font-light">
          Licenciado en Gestión de Tecnología y Analista de Sistemas
        </p>
      </header>

      <div class="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-inner border border-gray-100 mb-10">

        <p class="text-lg text-gray-800 mb-4 leading-relaxed">
          ¡Hola! 💻⚡ Soy <span class="font-bold">Joan Manuel Romero</span>, un profesional con <span
            class="font-bold">motivación para el aprendizaje constante</span>,
          listo para desarrollar nuevas ideas ante los desafíos que se puedan presentar.
          Me considero una persona proactiva. La <span class="font-bold">comunicación</span>, la <span
            class="font-bold">responsabilidad</span> y la <span class="font-bold">constancia</span> definen mi forma de
          trabajo.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-4">
          Actualmente continúo formándome de manera autodidacta principalmente en <span class="font-bold">desarrollo
            front-end</span>.
        </p>
      </div>

      <div class="pt-6">
        <div class="pt-6">
          <h3 class="text-3xl font-bold text-blue-100 mb-8 text-center border-b pb-2">
            Skills
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">

            <div class="skill-group">
              <p class="font-semibold text-green-600 mb-2 flex items-center"><i class="pi pi-code mr-2"></i> Frameworks
                JS</p>
              <ul class="list-none space-y-1 text-gray-700">
                <li><i class="pi pi-code mr-2 text-red-500"></i> <span class="font-bold">Angular</span> </li>
                <li><i class="pi pi-code mr-2 text-green-500"></i> <span class="font-bold">Vue JS</span> </li>
              </ul>
            </div>

            <div class="skill-group">
              <p class="font-semibold text-green-600 mb-2 flex items-center"><i class="pi pi-code mr-2"></i> Lenguajes
              </p>
              <ul class="list-none space-y-1 text-gray-700">
                <li><i class="pi pi-code mr-2 text-yellow-600"></i> <span class="font-bold">JavaScript </span> </li>
                <li><i class="pi pi-code mr-2 text-blue-500"></i> <span class="font-bold">Typescript</span> </li>
              </ul>
            </div>

            <div class="skill-group">
              <p class="font-semibold text-green-600 mb-2 flex items-center"><i class="pi pi-palette mr-2"></i>
                Librerías/UI</p>
              <ul class="list-none space-y-1 text-gray-700">
                <li><i class="pi pi-palette mr-2 text-indigo-500"></i> <span class="font-bold">Bootstrap </span> </li>
                <li><i class="pi pi-palette mr-2 text-green-500"></i> <span class="font-bold">PrimeVue</span> </li>
                <li><i class="pi pi-palette mr-2 text-blue-400"></i> <span class="font-bold">Tailwind</span> </li>
                <li><i class="pi pi-palette mr-2 text-blue-700"></i> <span class="font-bold">Vuetify</span> </li>
              </ul>
            </div>

            <div class="skill-group">
              <p class="font-semibold text-green-600 mb-2 flex items-center"><i class="pi pi-star mr-2"></i> Control de
                Versiones</p>
              <ul class="list-none space-y-1 text-gray-700">
                <li><i class="pi pi-github mr-2 text-gray-800"></i> <span class="font-bold">GitHub</span> </li>
                <li><i class="pi pi-gitlab mr-2 text-orange-600"></i> <span class="font-bold">GitLab</span> </li>
              </ul>
            </div>

            <div class="skill-group">
              <p class="font-semibold text-green-600 mb-2 flex items-center"><i class="pi pi-bolt mr-2"></i>
                Metodologías</p>
              <ul class="list-none space-y-1 text-gray-700">
                <li><i class="pi pi-check-circle mr-2 text-blue-500"></i> <span class="font-bold">Ágiles (Scrum)</span>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.skill-group {
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>