<template>
  <section class="h-full flex items-center justify-center text-center p-8 overflow-hidden relative">

    <div class="relative z-10 flex flex-col items-center justify-center h-full w-full p-8">

      <div
        class="relative z-10 w-full max-w-5xl p-6 md:p-8 rounded-xl shadow-3xl bg-white/10 backdrop-blur-md border border-gray-700">
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div class="flex-shrink-0">
            <img src="../assets/img/perfil.jpg" alt="Foto de perfil de Joan Manuel Romero"
              class="h-48 w-48 md:h-48 md:w-48 rounded-full object-cover border-4 border-gray-600 shadow-lg">
          </div>
          <div class="text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2 min-h-[3rem] md:min-h-[3.5rem]"
              data-aos="fade-up" data-aos-duration="1000">
              <span v-html="displayedLines[0]"></span>
              <span v-if="currentLineIndex === 0" class="blinking-cursor">|</span>
            </h1>

            <p class="text-lg font-light text-gray-200 mb-2 min-h-[3rem]" data-aos="fade-up" data-aos-delay="200"
              data-aos-duration="1000">
              <span v-html="displayedLines[1]"></span>
              <span v-if="currentLineIndex === 1" class="blinking-cursor">|</span>
            </p>

            <p class="text-lg text-gray-300 mb-2 leading-relaxed min-h-[3rem]" data-aos="zoom-in" data-aos-delay="400"
              data-aos-duration="800">
              <span v-html="displayedLines[2]"></span>
              <span v-if="currentLineIndex === 2" class="blinking-cursor">|</span>
            </p>

            <p class="text-md text-blue-100 mb-6 leading-relaxed min-h-[3rem]" data-aos="zoom-in" data-aos-delay="400"
              data-aos-duration="800">
              <span v-html="displayedLines[3]"></span>
              <span v-if="currentLineIndex === 3" class="blinking-cursor">|</span>
            </p>
            <p class="text-md text-blue-100 mb-2 leading-relaxed min-h-[6rem]" data-aos="zoom-in" data-aos-delay="400"
              data-aos-duration="800">
              <span v-html="displayedLines[4]"></span>
              <span v-if="currentLineIndex === 4" class="blinking-cursor">|</span>
            </p>
          </div>
        </div>

        <div v-if="showButtons" class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-8">
          <a href="/CV-JoanManuelRomero.pdf" download="CV-JoanManuelRomero.pdf">
            <Button label="Descargar CV" icon="pi pi-download" severity="secondary" raised rounded
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </a>
          <a href="https://www.linkedin.com/in/joanmanuelromero/" target="_blank">
            <Button label="LinkedIn" icon="pi pi-linkedin" severity="info" raised rounded
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </a>
          <RouterLink to="/projects">
            <Button label="Ver Mis Proyectos" icon="pi pi-check-square" severity="success"
              raised rounded class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </RouterLink>
        </div>
      </div>

      <div class="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat rounded-xl"
        style="background-image: url('../assets/img/perfil.jpg');"></div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const textLines = [
  'Hola, soy <span class="text-green-400">Joan Manuel Romero</span>',
  '<span class="font-semibold text-white">Desarrollador Frontend</span> especializado en Vue.js y soluciones web modernas.',
  'Transformo ideas en productos digitales funcionales y escalables.',
  'Me centro en la <span class="font-semibold text-green-400">experiencia de usuario</span> y la <span class="font-semibold text-green-400">calidad del código</span>.',
  '<i class="pi pi-graduation-cap text-green-400"></i> Licenciado en Gestión de Tecnología y Analista de Sistemas'
];

const displayedLines = ref(['', '', '', '']);
const currentLineIndex = ref(0);
const showButtons = ref(false);
let typingInterval;

const typeWriter = () => {
  const lineToType = textLines[currentLineIndex.value];
  let i = 0;

  typingInterval = setInterval(() => {
    if (i < lineToType.length) {
      displayedLines.value[currentLineIndex.value] = lineToType.substring(0, i + 1);
      i++;
    } else {
      clearInterval(typingInterval);
      if (currentLineIndex.value < textLines.length - 1) {
        currentLineIndex.value++;
        setTimeout(typeWriter, 300);
      } else {
        currentLineIndex.value = -1;
        showButtons.value = true;
      }
    }
  }, 40);
};

onMounted(() => {
  typeWriter();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>

<style scoped>
.p-button-success {
  color:white !important;
}

.p-button-info {
  color:white !important;
}

.p-button-success:hover {
  color:darkgreen !important;
}

.p-button-info {
  color:white !important;
}

.p-button-info:hover {
  color:rgb(91, 121, 255) !important;
}

.blinking-cursor {
  font-weight: 300;
  color: #4ade80;
  animation: blink 1s step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #4ade80;
  }
}


.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-background {
  background-color: transparent;
}

.profile-background::before {
  content: none;
}

</style>