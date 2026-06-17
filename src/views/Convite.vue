<template>
  <main class="min-h-screen bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-texto)] overflow-x-hidden">
    
    <section class="relative min-h-[100svh] w-full flex flex-col items-center justify-center text-center px-4 py-4 md:py-10">
      
      <img src="/fundoHeader.png" alt="Moldura Floral" class="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />
      
      <div class="max-w-4xl w-full flex flex-col items-center relative z-10 reveal">
        
        <div class="w-full flex justify-center mt-2 mb-10 sm:mb-14 md:mb-20">
          <div class="flex flex-col items-center max-w-[95%]">
            <p class="font-script text-2xl sm:text-3xl md:text-4xl text-[var(--color-casamento-texto)] opacity-80 text-center leading-tight">
              "Assim, eles já não são dois, mas sim uma só carne."
            </p>
            <p class="font-sans text-[10px] sm:text-[12px] md:text-sm text-[var(--color-casamento-texto)] opacity-70 mt-2">
              (Mateus 19.6)
            </p>
          </div>
        </div>
        
        <h1 class="font-script text-[8.5vw] sm:text-5xl md:text-6xl lg:text-8xl text-[var(--color-casamento-texto)] mb-4 sm:mb-6 md:mb-8 flex items-center justify-center gap-2 md:gap-4 drop-shadow-sm whitespace-nowrap w-full">
          Maria Júlia <span class="font-script-alt text-[6.5vw] sm:text-4xl md:text-5xl lg:text-7xl mt-1 md:mt-3 text-[var(--color-casamento-texto)]">&</span> William
        </h1>
        
        <p class="font-sans text-[11px] sm:text-sm md:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-[var(--color-casamento-texto)] font-medium">
          Convidam para a cerimônia religiosa de seu casamento,<br class="hidden md:block">
          a realizar-se às <strong class="font-bold">16 horas</strong> do dia <strong class="font-bold">11 de setembro de 2027</strong> na Igreja Matriz.<br>
          <span class="font-normal opacity-80 text-[10px] sm:text-xs mt-1 md:mt-2 inline-block">Praça da Matriz, 200, Elói Mendes-MG</span>
        </p>

        <div class="mb-10 sm:mb-20 md:mb-24 mt-2 flex items-center justify-center">
          <div v-if="chegouOpc" class="animate-fade-in">
            <p class="font-script text-3xl sm:text-4xl text-[var(--color-casamento-dourado)]">
              Chegou o grande dia! Viva os noivos!
            </p>
          </div>
          
          <div v-else class="flex gap-3 sm:gap-4 text-center font-sans text-[var(--color-casamento-texto)]">
            <div class="flex flex-col items-center">
              <span class="text-2xl sm:text-3xl md:text-4xl font-light">{{ dias }}</span>
              <span class="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-70 mt-1">Dias</span>
            </div>
            <span class="text-xl sm:text-2xl mt-1 opacity-50 font-light">:</span>
            <div class="flex flex-col items-center">
              <span class="text-2xl sm:text-3xl md:text-4xl font-light">{{ horas }}</span>
              <span class="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-70 mt-1">Hrs</span>
            </div>
            <span class="text-xl sm:text-2xl mt-1 opacity-50 font-light">:</span>
            <div class="flex flex-col items-center">
              <span class="text-2xl sm:text-3xl md:text-4xl font-light">{{ minutos }}</span>
              <span class="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-70 mt-1">Min</span>
            </div>
            <span class="text-xl sm:text-2xl mt-1 opacity-50 font-light">:</span>
            <div class="flex flex-col items-center w-10 sm:w-12">
              <span class="text-2xl sm:text-3xl md:text-4xl font-light">{{ segundos }}</span>
              <span class="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-70 mt-1">Seg</span>
            </div>
          </div>
        </div>

        </div>
    </section>
    
    <section class="py-24 px-4 bg-white text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-script text-[12vw] sm:text-5xl md:text-7xl text-[var(--color-casamento-texto)] mb-16 reveal whitespace-nowrap">
          Local e Horário
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-[var(--color-casamento-texto)]">
          <div class="reveal flex flex-col items-center justify-center space-y-4 p-10 bg-[var(--color-casamento-fundo)] rounded-sm border border-transparent hover:border-[var(--color-casamento-dourado)] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
            <h3 class="font-semibold text-sm tracking-widest uppercase opacity-70">A Cerimônia</h3>
            <p class="text-3xl font-light">11 de Setembro de 2027</p>
            <div class="w-8 h-[1px] bg-[var(--color-casamento-dourado)] my-2 opacity-50 group-hover:w-16 transition-all duration-500"></div>
            <p class="text-lg">Às 16 horas</p>
          </div>
          
          <div class="reveal delay-200 flex flex-col items-center justify-center space-y-4 p-10 bg-[var(--color-casamento-fundo)] rounded-sm border border-transparent hover:border-[var(--color-casamento-dourado)] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
            <h3 class="font-semibold text-sm tracking-widest uppercase opacity-70">Igreja Matriz</h3>
            <p class="text-xl font-light">Praça da Matriz, 200</p>
            <p class="text-base">Elói Mendes - MG</p>
            <div class="w-8 h-[1px] bg-[var(--color-casamento-dourado)] my-2 opacity-50 group-hover:w-16 transition-all duration-500"></div>
            <a href="https://maps.google.com/?q=Praça+da+Matriz,+200,+Elói+Mendes+-+MG" target="_blank" class="mt-6 px-8 py-3 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] hover:bg-[var(--color-casamento-dourado)] hover:text-white transition-all duration-300 tracking-widest text-xs uppercase cursor-pointer flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.41,42.29,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,8.52,0,254.19,254.19,0,0,0,41.45-38.3c27.78-31.84,42.29-64.85,42.29-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
              Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </section>

   <section class="py-24 px-4 bg-white text-center flex flex-col items-center justify-center">
      <div class="max-w-6xl mx-auto w-full">
        <h2 class="font-script text-[11vw] sm:text-6xl md:text-7xl text-[var(--color-casamento-texto)] mb-6 reveal whitespace-nowrap">
          Lista de Presentes
        </h2>
        
        <div class="mb-8 max-w-2xl mx-auto text-[var(--color-casamento-texto)] tracking-widest uppercase reveal delay-100">
          <p class="text-sm opacity-80 mb-2">Sua presença é nosso maior presente.</p>
          <p class="text-[10px] md:text-xs opacity-60 font-light">Caso deseje nos presentear, separamos algumas sugestões:</p>
        </div>
        
        <div v-if="carregandoDestaques" class="flex justify-center py-10 opacity-50">
           <div class="w-6 h-6 border-2 border-[var(--color-casamento-dourado)] border-t-transparent rounded-full animate-spin"></div>
        </div>

        <div v-else-if="presentesDestaque.length === 0" class="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
          <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum presente disponível no momento.</p>
          <p class="font-script mt-4 text-[var(--color-casamento-dourado)] text-4xl opacity-80">Em breve novidades!</p>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 mt-12">
          
          <div v-for="(presente, index) in presentesDestaque" :key="presente.id" 
               class="reveal bg-[var(--color-casamento-fundo)] px-8 py-16 min-h-[380px] rounded-sm border border-transparent hover:border-[var(--color-casamento-dourado)] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 flex flex-col items-center group"
               :style="{ transitionDelay: `${index * 150}ms` }">
           
            <div class="w-24 h-24 rounded-full bg-[var(--color-casamento-fundo)] border border-[#5A8BBF] border-opacity-40 flex items-center justify-center mb-8 mx-auto overflow-hidden shadow-inner grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-opacity-100">
              <img :src="presente.icone || '/gift_close.gif'" alt="Ícone do Presente" class="w-14 h-14 object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            
            <h3 class="mt-2 font-sans font-semibold text-sm tracking-widest uppercase text-[var(--color-casamento-texto)] text-center">
              {{ presente.titulo }}
            </h3>
            
            <div class="w-full flex flex-col items-center mt-auto pt-6">
              <p class="text-[10px] opacity-60 text-[var(--color-casamento-texto)] font-light italic line-clamp-2 mb-3 px-2 text-center">
                {{ presente.descricao }}
              </p>
              
              <div class="w-8 h-[1px] bg-[var(--color-casamento-dourado)] opacity-50 mb-5 group-hover:w-16 transition-all duration-500"></div>
              
              <div class="w-full">
                <button @click="abrirModal(presente.id)" class="w-full py-3 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[10px] tracking-[0.2em] uppercase rounded-sm hover:bg-[var(--color-casamento-dourado)] hover:text-white transition-colors duration-300 cursor-pointer">
                  Presentear
                </button>
              </div>
            </div>
          </div>
          
        </div>

        <div class="reveal delay-300 w-full flex justify-center mt-8">
           <button @click="verListaCompleta" class="px-10 py-4 bg-[var(--color-casamento-dourado)] text-white text-[10px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity cursor-pointer shadow-md">
              Ver Lista Completa
           </button>
        </div>

      </div>
    </section>

    <section class="py-24 px-4 bg-[var(--color-casamento-fundo)] text-center group reveal">
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        
        <h2 class="font-script text-[11vw] sm:text-6xl md:text-7xl text-[var(--color-casamento-texto)] mb-6 whitespace-nowrap">
          Guia de Elói Mendes
        </h2>

        <div class="mb-8 text-[var(--color-casamento-dourado)] opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.41,42.29,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,8.52,0,254.19,254.19,0,0,0,41.45-38.3c27.78-31.84,42.29-64.85,42.29-96.25A88.1,88.1,0,0,0,128,16Zm0,112a24,24,0,1,1,24-24A24,24,0,0,1,128,128Z"></path>
          </svg>
        </div>

        <p class="text-sm md:text-base leading-relaxed mb-12 font-light px-2 text-[var(--color-casamento-texto)] max-w-2xl">
          Preparamos algumas sugestões com muito carinho para que sua estadia na nossa cidade seja a mais confortável e proveitosa possível.
        </p>

        <div class="w-full text-left flex flex-col">
          
          <div v-for="(dica, index) in guiaLocal" :key="dica.id" 
               class="border-b border-[var(--color-casamento-dourado)] border-opacity-40 overflow-hidden transition-all duration-300"
               :class="{'border-t': index === 0}"> 
            
            <button @click="alternarDica(dica.id)" class="w-full py-6 flex items-center justify-between cursor-pointer hover:opacity-60 transition-opacity outline-none">
              
              <span class="text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold text-[var(--color-casamento-texto)]">
                {{ dica.titulo }}
              </span>
              
              <span class="text-[var(--color-casamento-dourado)] transform transition-transform duration-500" :class="{'rotate-180': dicaAberta === dica.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
              </span>
            </button>
            
            <div v-show="dicaAberta === dica.id" class="pb-8 pr-8 text-[var(--color-casamento-texto)] opacity-70 font-light text-xs md:text-sm leading-relaxed tracking-wide" v-html="dica.conteudo">
            </div>

          </div>

        </div>

      </div>
    </section>

    <footer class="relative py-32 px-4 bg-white text-center reveal overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-casamento-dourado)] to-transparent opacity-30"></div>

      <div class="max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
        
        <h2 class="font-script text-[14vw] sm:text-77xl md:text-8xl text-[var(--color-casamento-texto)] mb-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full leading-none whitespace-nowrap">
          <span>Maria Júlia</span>
          
          <span @click="acessarPainelSecreto" class="font-script-alt text-[10vw] sm:text-6xl md:text-7yl mt-2 sm:mt-0 opacity-100 cursor-default select-none hover:opacity-80 transition-opacity">&</span>
          
          <span>William</span>
        </h2>

        <div class="w-[1px] h-12 bg-[var(--color-casamento-dourado)] opacity-50 mb-10"></div>

        <p class="text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.3em] uppercase text-[var(--color-casamento-texto)] opacity-80 mb-6 font-semibold px-2">
          11 de Setembro de 2027 • Elói Mendes - MG
        </p>

        <p class="text-[9px] sm:text-xs tracking-widest uppercase text-[var(--color-casamento-texto)] opacity-70 font-light px-2">
          Esperamos vocês para celebrar esse dia inesquecível
        </p>
        
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'; 
import { db } from '../firebase.js';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';

const router = useRouter(); 

const dataCasamento = new Date('2027-09-11T16:00:00').getTime();

const dias = ref(0);
const horas = ref(0);
const minutos = ref(0);
const segundos = ref(0);
const chegouOpc = ref(false); 
let timer = null;

const atualizarCronometro = () => {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  if (distancia < 0) {
    chegouOpc.value = true;
    clearInterval(timer);
    return;
  }

  dias.value = Math.floor(distancia / (1000 * 60 * 60 * 24));
  horas.value = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutos.value = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  segundos.value = Math.floor((distancia % (1000 * 60)) / 1000);
};

const presentesDestaque = ref([]);
const carregandoDestaques = ref(true);

const buscarDestaques = async () => {
  try {
    const q = query(
      collection(db, "presentes"), 
      where("destaque", "==", true),
      where("ativo", "==", true),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    const lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    presentesDestaque.value = lista;
    
  } catch (error) {
    console.error("Erro ao carregar destaques:", error);
  } finally {
    carregandoDestaques.value = false;
    
    nextTick(() => {
        observarElementos();
    });
  }
};

const abrirModal = (presenteId) => {
  if (presenteId) {
    sessionStorage.setItem('presentePreSelecionado', presenteId);
  }
  router.push('/lista-presentes');
};

const verListaCompleta = () => {
  router.push('/lista-presentes');
};


let observer = null;

const observarElementos = () => {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });
  }

  document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
    observer.observe(el);
  });
};

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  atualizarCronometro();
  timer = setInterval(atualizarCronometro, 1000);
  
  buscarDestaques();
  
  setTimeout(observarElementos, 100); 
});

onUnmounted(() => {
  clearInterval(timer);
  if (observer) observer.disconnect(); 
});


const dicaAberta = ref(null); 

const alternarDica = (id) => {
  dicaAberta.value = dicaAberta.value === id ? null : id;
};

const guiaLocal = ref([
  {
    id: 'hospedagem',
    titulo: 'Onde se Hospedar',
    conteudo: 'Como principais indicações, sugerimos o <strong><a href="https://maps.app.goo.gl/wqdc4imgzh6BYKV36" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Fratelli Premium Hotel</a></strong> e o <strong><a href="https://maps.app.goo.gl/JbpfzqTVuJTNpfF69 " target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Hotel Central Palace</a></strong>. Além deles, recomendamos também o <strong><a href="https://maps.app.goo.gl/qHHZiyWNZKc7oqXT8" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Hotel Mário Armando</a></strong>.'
  },
  {
    id: 'almoco',
    titulo: 'Para Almoçar',
    conteudo: 'Se estiver buscando um ambiente gostoso para o almoço, indicamos o <strong><a href="https://maps.app.goo.gl/FAvv6rZEX4YKEvog6" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Restaurante do Edgar</a></strong> e o <strong><a href="https://maps.app.goo.gl/QKXHSpceekEoG3Hs7" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Restaurante J&J</a></strong>.'
  },
  {
    id: 'noite',
    titulo: 'Lanches & Pizzas',
    conteudo: 'Bateu a fome à noite? Para pizzas excelentes, sugerimos a <strong><a href="https://maps.app.goo.gl/cfWWeKgtcvdHFSrS7" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Dom Carlito Pizzaria</a></strong> e a <strong><a href="https://maps.app.goo.gl/aoWSk6BEmzjVwrf8A" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">A&M Vip Pizzaria</a></strong>. Se preferir um lanche, vá de <strong><a href="https://maps.app.goo.gl/UJWSXqpbA3zY77oWA" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">JC Burguer</a></strong>, <strong><a href="https://maps.app.goo.gl/Ndcu8VLJdAykAq6K6" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">El Forte Hamburgueria</a></strong> ou <strong><a href="https://maps.app.goo.gl/5JNzrm8y4V8xcGh87" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Burguer House Delivery</a></strong>.'
  },
  {
    id: 'chopp',
    titulo: 'Chopp & Descontração',
    conteudo: 'Para relaxar, jogar conversa fora e tomar um chopp bem gelado, os melhores locais da cidade são o <strong><a href="https://maps.app.goo.gl/QKXHSpceekEoG3Hs7" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Restaurante J&J</a></strong> e o <strong><a href="https://maps.app.goo.gl/PgRmowo8hHACgYGH6" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Decks Beer</a></strong>.'
  },
  {
    id: 'delivery',
    titulo: 'Delivery no Hotel',
    conteudo: 'Cansado da viagem e prefere comer no conforto do quarto? Baixe os aplicativos <strong><a href="https://play.google.com/store/apps/details?id=com.vanuatu.aiqfome" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Aiqfome</a></strong> ou <strong><a href="https://play.google.com/store/apps/details?id=com.uairango" target="_blank" class="underline text-[var(--color-casamento-dourado)] hover:opacity-100 opacity-90 transition-opacity">Uairango</a></strong> para pedir.'
  }
]);

const acessarPainelSecreto = () => {
  router.push('/login');
};
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; 
}
.reveal {
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
  will-change: opacity; 
}
.reveal.revealed {
  opacity: 1;
}
</style>