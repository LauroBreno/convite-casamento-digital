<template>
  <div class="min-h-screen bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-texto)] font-sans selection:bg-[var(--color-casamento-dourado)] selection:text-white flex items-center justify-center p-6">
    <div class="relative bg-transparent border border-[var(--color-casamento-dourado)] border-opacity-30 rounded-sm p-10 md:p-16 max-w-md w-full overflow-hidden shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-shadow duration-700">
      
      <div class="relative z-10 flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl tracking-[0.3em] uppercase text-[#5A8BBF] font-medium text-center ml-[0.3em]">Login</h2>
        <div class="w-16 h-[1px] bg-[var(--color-casamento-dourado)] mt-4 mb-12 opacity-80"></div>

        <div class="w-full space-y-8 mb-10">
          <div class="relative">
            <p class="text-[9px] tracking-[0.2em] uppercase text-[#5A8BBF] mb-2 opacity-80 pl-1">E-mail</p>
            <input type="email" v-model="email" @keyup.enter="fazerLogin" class="w-full bg-transparent border-b border-[#5A8BBF] border-opacity-30 focus:border-opacity-100 outline-none pb-2 text-sm font-light text-[#5A8BBF] transition-colors pl-1" />
          </div>
          
          <div class="relative">
            <p class="text-[9px] tracking-[0.2em] uppercase text-[#5A8BBF] mb-2 opacity-80 pl-1">Senha</p>
            <input type="password" v-model="senha" @keyup.enter="fazerLogin" class="w-full bg-transparent border-b border-[#5A8BBF] border-opacity-30 focus:border-opacity-100 outline-none pb-2 text-sm font-light text-[#5A8BBF] transition-colors pl-1 tracking-widest" />
          </div>
        </div>

        <p v-if="erroLogin" class="text-[10px] text-red-400 mb-6 italic font-light tracking-wide text-center">E-mail ou senha inválidos.</p>

        <button @click="fazerLogin" :disabled="carregando" class="w-full py-4 bg-[var(--color-casamento-dourado)] text-white text-[10px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity cursor-pointer shadow-md disabled:opacity-50">
          {{ carregando ? 'Acessando...' : 'Acessar Painel' }}
        </button>

        <button @click="voltarParaConvite" class="mt-8 text-[9px] tracking-[0.1em] uppercase text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100 transition-opacity underline cursor-pointer">
          Voltar ao Convite
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importação nova

const router = useRouter();
const email = ref('');
const senha = ref('');
const erroLogin = ref(false);
const carregando = ref(false);

const fazerLogin = async () => {
  carregando.value = true;
  erroLogin.value = false;
  const auth = getAuth();
  
  try {
    // Valida com o Firebase Real
    await signInWithEmailAndPassword(auth, email.value, senha.value);
    sessionStorage.setItem('noivos_auth', 'liberado');
    router.push('/painel-noivos-secreto');
  } catch (error) {
    erroLogin.value = true;
  } finally {
    carregando.value = false;
  }
};

const voltarParaConvite = () => router.push('/');
</script>