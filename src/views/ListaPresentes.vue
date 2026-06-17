<template>
  <div class="min-h-screen bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-texto)] font-sans selection:bg-[var(--color-casamento-dourado)] selection:text-white relative flex flex-col">
    
    <header class="w-full pt-16 md:pt-14 pb-6 px-6 relative z-10 flex flex-col md:flex-row md:justify-center items-center">
      <button @click="voltar" class="absolute left-4 top-6 md:left-8 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100 hover:text-[var(--color-casamento-dourado)] transition-all cursor-pointer p-2 md:p-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="hidden sm:inline">Voltar ao Convite</span>
      </button>

      <div class="flex flex-col items-center mt-2 md:mt-0">
        <h1 class="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--color-casamento-texto)] mb-2">Lista de Presentes</h1>
        <div class="h-[1px] w-24 md:w-32 bg-[var(--color-casamento-dourado)] opacity-50"></div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 md:px-8 mt-4 w-full pb-20 min-h-[100svh] flex flex-col">
      
      <div v-if="carregando" class="flex-1 flex flex-col items-center justify-center animate-fade-in pb-32">
        <div class="w-8 h-8 border-2 border-[var(--color-casamento-dourado)] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-[10px] tracking-[0.2em] uppercase opacity-40 text-[var(--color-casamento-texto)]">Preparando a vitrine...</p>
      </div>

      <div v-else-if="presentes.length === 0" class="flex-1 flex flex-col items-center justify-center text-center animate-fade-in pb-32">
        <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum presente disponível no momento.</p>
        <p class="font-script mt-4 text-[var(--color-casamento-dourado)] text-4xl opacity-80">Em breve novidades!</p>
      </div>

      <div v-else class="relative w-full mt-4 flex-1">
        
        <transition name="fade" mode="out-in">
          <div v-if="!presenteSelecionado" key="grid" class="w-full">
            
            <div class="flex flex-col mb-10 w-full">
              
              <div class="relative w-full border-b border-[var(--color-casamento-texto)] border-opacity-10 pb-5 mb-5">
                <div class="absolute left-0 top-0 bottom-5 w-6 bg-gradient-to-r from-[var(--color-casamento-fundo)] to-transparent z-10 pointer-events-none md:hidden"></div>
                <div class="absolute right-0 top-0 bottom-5 w-6 bg-gradient-to-l from-[var(--color-casamento-fundo)] to-transparent z-10 pointer-events-none md:hidden"></div>

                <div class="flex overflow-x-auto w-full gap-3 scrollbar-hide hide-scroll px-2 md:px-0">
                  <button v-for="cat in categoriasUnicas" :key="cat" @click="categoriaSelecionada = cat" 
                    :class="categoriaSelecionada === cat ? 'bg-[var(--color-casamento-dourado)] text-white border-transparent shadow-md' : 'bg-transparent text-[var(--color-casamento-texto)] border-[var(--color-casamento-texto)] border-opacity-20 opacity-60 hover:opacity-100 hover:border-opacity-40'" 
                    class="px-5 py-2.5 border rounded-full text-[9px] tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 outline-none">
                    {{ cat }}
                  </button>
                </div>
              </div>

              <div class="flex justify-center md:justify-end w-full">
                <div class="flex items-center gap-4">
                  <button @click="mudarOrdem('asc')" :class="ordenacao === 'asc' ? 'text-[var(--color-casamento-dourado)] font-semibold' : 'text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100'" class="text-[9px] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer outline-none">
                    Mais em conta
                  </button>
                  <span class="text-[var(--color-casamento-texto)] opacity-20">|</span>
                  <button @click="mudarOrdem('desc')" :class="ordenacao === 'desc' ? 'text-[var(--color-casamento-dourado)] font-semibold' : 'text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100'" class="text-[9px] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer outline-none">
                    Chutando o balde
                  </button>
                </div>
              </div>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <div v-for="presente in presentesFiltrados" :key="presente.id" class="bg-white p-8 md:py-16 md:min-h-[350px] rounded-xl shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group cursor-pointer h-full" @click="selecionarPresente(presente)">
                
                <div class="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden border border-[#5A8BBF] border-opacity-40 bg-[var(--color-casamento-fundo)] transition-all duration-300 shadow-sm">
                  <img :src="presente.icone || '/gift_close.gif'" alt="Ícone do Presente" class="w-14 h-14 object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                
                <h3 class="font-sans font-medium text-sm tracking-widest uppercase text-[var(--color-casamento-texto)] mb-2 opacity-90 leading-snug">
                  {{ presente.titulo }}
                </h3>

                <div class="mt-auto flex flex-col items-center w-full pt-4">
                  <p class="text-[10px] font-light italic opacity-60 text-[var(--color-casamento-texto)] line-clamp-2 mb-4 px-2">
                    {{ presente.descricao }}
                  </p>
                  <div class="w-8 h-[1px] bg-[var(--color-casamento-dourado)] opacity-50 mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <p class="text-xl text-[var(--color-casamento-dourado)] font-light mb-8">
                    {{ formatarMoeda(presente.valor) }}
                  </p>
                  <button class="w-full py-3.5 bg-transparent border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-[0.2em] uppercase rounded-sm group-hover:bg-[var(--color-casamento-dourado)] group-hover:text-white transition-colors duration-300">
                    Presentear
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else key="checkout" class="w-full flex flex-col items-center">
            
            <div class="w-full max-w-5xl flex justify-center md:justify-start mb-8 px-4">
              <button @click="limparSelecao" class="px-6 py-2 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100 text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-casamento-texto)] hover:text-[var(--color-casamento-fundo)] transition-all duration-300 flex items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Escolher outro presente
              </button>
            </div>

            <div class="w-full max-w-5xl px-4">
              
              <div v-if="!mensagemEnviada" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                <div class="flex flex-col w-full">
                  
                  <div class="w-full bg-white p-6 rounded-xl shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5 flex items-center gap-6 mb-10">
                    <div class="h-16 w-16 bg-[var(--color-casamento-fundo)] flex-shrink-0 flex items-center justify-center rounded-full border border-[#5A8BBF] border-opacity-40 overflow-hidden shadow-sm">
                      <img :src="presenteSelecionado.icone || '/gift_close.gif'" alt="Ícone" class="w-10 h-10 object-contain filter grayscale opacity-90" />
                    </div>
                    <div class="flex flex-col flex-1 text-left">
                      <span class="text-[8px] tracking-[0.2em] text-[#5A8BBF] uppercase mb-1">{{ presenteSelecionado.categoria }}</span>
                      <h2 class="text-lg font-light tracking-wide text-[var(--color-casamento-texto)] mb-1 leading-tight">{{ presenteSelecionado.titulo }}</h2>
                      <p class="text-xl text-[var(--color-casamento-dourado)] font-medium">{{ formatarMoeda(presenteSelecionado.valor) }}</p>
                    </div>
                  </div>

                  <h3 class="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#5A8BBF] font-medium mb-6">
                    Seu Recado
                  </h3>

                  <div class="w-full relative mb-6 transition-all duration-300" :class="{'opacity-40 grayscale pointer-events-none': envioAnonimo}">
                    <input type="text" v-model="nomeConvidado" placeholder="Seu Nome Completo" :disabled="envioAnonimo" 
                      style="background-color: rgba(90, 139, 191, 0.08);"
                      class="w-full border border-transparent focus:border-[var(--color-casamento-dourado)] focus:ring-1 focus:ring-[var(--color-casamento-dourado)] outline-none px-4 py-4 text-sm font-light text-[var(--color-casamento-texto)] placeholder:opacity-40 transition-all rounded-lg" />
                  </div>
                  
                  <div class="w-full relative mb-6 transition-all duration-300" :class="{'opacity-40 grayscale pointer-events-none': envioAnonimo}">
                    <textarea v-model="mensagemConvidado" placeholder="Escreva uma mensagem especial para os noivos..." 
                      style="background-color: rgba(90, 139, 191, 0.08);"
                      class="w-full border border-transparent focus:border-[var(--color-casamento-dourado)] focus:ring-1 focus:ring-[var(--color-casamento-dourado)] outline-none px-4 py-4 text-sm font-light text-[var(--color-casamento-texto)] placeholder:opacity-40 resize-none transition-all h-32 rounded-lg block"></textarea>
                  </div>

                  <div class="w-full flex flex-col justify-start">
                    <label class="flex items-center gap-3 cursor-pointer group w-fit">
                      <div class="relative w-10 h-6 rounded-full transition-colors duration-300" :style="envioAnonimo ? 'background-color: var(--color-casamento-dourado)' : 'background-color: rgba(0,0,0,0.1)'">
                        <div class="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 shadow-sm" :class="{'translate-x-4': envioAnonimo}"></div>
                      </div>
                      <input type="checkbox" v-model="envioAnonimo" class="hidden" />
                      <span class="text-[10px] font-sans tracking-[0.1em] uppercase text-[var(--color-casamento-texto)] opacity-60 group-hover:opacity-100 transition-opacity">Desejo enviar de forma anônima</span>
                    </label>
                  </div>
                </div>

                <div class="flex flex-col w-full bg-white p-8 md:p-10 rounded-2xl shadow-md border border-[var(--color-casamento-texto)] border-opacity-5">
                  
                  <h3 class="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-casamento-dourado)] opacity-90 mb-8 font-medium text-center md:text-left">
                    Pagamento Pix
                  </h3>
                    
                  <div class="w-full flex flex-col items-center mb-6">
                    <div class="w-32 h-32 md:w-40 md:h-40 bg-[var(--color-casamento-fundo)] flex items-center justify-center rounded-xl border border-solid border-[var(--color-casamento-texto)] border-opacity-10 mb-6">
                      <span class="text-[var(--color-casamento-texto)] opacity-30 text-[9px] uppercase tracking-widest text-center px-2">QR Code Pix</span>
                    </div>
                    <button @click="copiarChavePix" class="w-full max-w-[220px] py-3.5 bg-[var(--color-casamento-dourado)] text-white text-[9px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      Copiar Chave Pix
                    </button>
                  </div>
                  
                  <div class="w-full flex justify-center mb-10">
                    <button @click="abrirCartao" class="text-[8px] md:text-[9px] font-sans tracking-[0.1em] uppercase text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-center underline decoration-[var(--color-casamento-texto)] decoration-opacity-20 underline-offset-4 whitespace-nowrap">
                      Pagar com Cartão de Crédito
                    </button>
                  </div>

                  <div v-if="presenteSelecionado.links && presenteSelecionado.links.length > 0" class="w-full pt-6 border-t border-[var(--color-casamento-texto)] border-opacity-5">
                    <button @click="mostrarLinks = !mostrarLinks" class="w-full flex justify-between items-center group cursor-pointer outline-none mb-2">
                      <span class="font-sans text-[9px] tracking-[0.1em] uppercase text-[var(--color-casamento-texto)] opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sugestões de Lojas</span>
                      <svg :class="{'rotate-180': mostrarLinks}" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[var(--color-casamento-texto)] opacity-40 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    
                    <transition name="slide-fade">
                      <div v-show="mostrarLinks" class="w-full flex flex-col gap-2 mt-4">
                        <a v-for="(link, i) in presenteSelecionado.links" :key="i" :href="link" target="_blank" class="flex items-center justify-between p-3 bg-[var(--color-casamento-fundo)] bg-opacity-50 border border-[var(--color-casamento-texto)] border-opacity-5 rounded-md hover:border-[var(--color-casamento-dourado)] transition-all group">
                          <span class="text-[10px] text-[var(--color-casamento-texto)] opacity-70 truncate font-light w-[85%]">{{ link }}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[var(--color-casamento-dourado)] opacity-50 group-hover:opacity-100 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    </transition>
                  </div>

                </div>

              </div>

              <div v-else class="w-full flex flex-col items-center justify-center text-center animate-fade-in py-24">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-[#5A8BBF] mb-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 class="font-script text-5xl text-[var(--color-casamento-texto)] mb-4">Com carinho,</h3>
                <p class="text-sm font-light opacity-70 italic text-[var(--color-casamento-texto)] max-w-md">Sua mensagem foi guardada para os noivos.</p>
              </div>

              <div v-if="!mensagemEnviada" class="w-full flex justify-center pb-8 pt-6 mt-8 lg:mt-12">
                <button @click="confirmarPresente" :disabled="enviandoMensagem" class="w-full max-w-md py-4 bg-[var(--color-casamento-dourado)] text-white text-[11px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 flex justify-center items-center shadow-lg">
                  <span v-if="enviandoMensagem">Enviando...</span>
                  <span v-else>Confirmar Presente</span>
                </button>
              </div>

            </div>
          </div>
        </transition>

      </div>
    </main>

    <footer class="w-full mt-auto relative py-32 px-4 bg-white text-center overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-casamento-dourado)] to-transparent opacity-30"></div>
      <div class="max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
        <h2 class="font-script text-[14vw] sm:text-7xl md:text-8xl text-[var(--color-casamento-texto)] mb-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full leading-none whitespace-nowrap">
          <span>Maria Júlia</span>
          <span @click="acessarPainelSecreto" class="font-script-alt text-[10vw] sm:text-6xl md:text-7xl mt-2 sm:mt-0 opacity-100 cursor-default select-none hover:opacity-80 transition-opacity">&</span>
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

    <transition name="fade">
      <button v-show="mostrarBotaoTopo" :class="presenteSelecionado ? 'md:hidden' : ''" @click="voltarAoTopo" class="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-[var(--color-casamento-dourado)] border-opacity-20 flex items-center justify-center text-[var(--color-casamento-dourado)] hover:bg-[var(--color-casamento-dourado)] hover:text-white transition-all duration-300 cursor-pointer z-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { db } from '../firebase.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const router = useRouter();
const carregando = ref(true);
const presentes = ref([]);
const ordenacao = ref('asc'); 

const categoriaSelecionada = ref('Todas');
const presenteSelecionado = ref(null);
const mostrarLinks = ref(false);

const nomeConvidado = ref('');
const mensagemConvidado = ref('');
const envioAnonimo = ref(false);
const enviandoMensagem = ref(false);
const mensagemEnviada = ref(false);

const mostrarBotaoTopo = ref(false);

onMounted(async () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  window.addEventListener('scroll', gerenciarScroll);
  
  try {
    const querySnapshot = await getDocs(collection(db, "presentes"));
    const lista = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.ativo !== false) { 
        lista.push({ id: doc.id, ...data });
      }
    });
    presentes.value = lista;

    const idSalvo = sessionStorage.getItem('presentePreSelecionado');
    if (idSalvo) {
      const presentePreviamenteClicado = presentes.value.find(p => p.id === idSalvo);
      if (presentePreviamenteClicado) {
        selecionarPresente(presentePreviamenteClicado);
      }
      sessionStorage.removeItem('presentePreSelecionado');
    }

  } catch (error) {
    console.error("Erro ao buscar presentes:", error);
    alert("Erro ao carregar a lista de presentes.");
  } finally {
    carregando.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', gerenciarScroll);
});

const categoriasUnicas = computed(() => {
  const cats = presentes.value.map(p => p.categoria).filter(Boolean);
  return ['Todas', ...new Set(cats)];
});

const presentesFiltrados = computed(() => {
  let filtrados = presentes.value;
  
  if (categoriaSelecionada.value !== 'Todas') {
    filtrados = filtrados.filter(p => p.categoria === categoriaSelecionada.value);
  }
  
  return filtrados.sort((a, b) => {
    if (ordenacao.value === 'asc') {
      return Number(a.valor) - Number(b.valor);
    } else {
      return Number(b.valor) - Number(a.valor);
    }
  });
});

const mudarOrdem = (ordem) => {
  ordenacao.value = ordem;
};

const formatarMoeda = (valor) => {
  if (!valor) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

const selecionarPresente = (presente) => {
  presenteSelecionado.value = presente;
  nomeConvidado.value = '';
  mensagemConvidado.value = '';
  envioAnonimo.value = false;
  mensagemEnviada.value = false;
  mostrarLinks.value = false; 
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const limparSelecao = () => {
  presenteSelecionado.value = null;
};

const voltar = () => {
  router.push('/');
};

const acessarPainelSecreto = () => {
  router.push('/login');
};

const copiarChavePix = () => {
  navigator.clipboard.writeText('CHAVE_PIX_DOS_NOIVOS_AQUI');
  alert('Chave Pix copiada com sucesso!');
};

const abrirCartao = () => {
  alert(`No futuro, isso abrirá um link seguro de pagamento para ${formatarMoeda(presenteSelecionado.value.valor)}.`);
};

const confirmarPresente = async () => {
  if (!envioAnonimo.value && !nomeConvidado.value.trim()) {
    alert("Por favor, preencha o seu nome ou marque a option 'Anônimo'.");
    return;
  }

  enviandoMensagem.value = true;

  try {
    const nomeFinal = envioAnonimo.value ? "Anônimo" : nomeConvidado.value.trim();
    
    await addDoc(collection(db, "mensagens"), {
      nome: nomeFinal,
      mensagem: mensagemConvidado.value.trim() || "Sem mensagem",
      presente_id: presenteSelecionado.value.id,
      presente_titulo: presenteSelecionado.value.titulo,
      valor: presenteSelecionado.value.valor,
      data: new Date().toISOString()
    });

    mensagemEnviada.value = true;
    
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    alert("Houve um erro ao enviar seu recado.");
  } finally {
    enviandoMensagem.value = false;
  }
};

const gerenciarScroll = () => {
  mostrarBotaoTopo.value = window.scrollY > 700;
};

const voltarAoTopo = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.hide-scroll::-webkit-scrollbar {
  display: none;
}
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>