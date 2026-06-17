<template>
  <div class="min-h-screen bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-texto)] font-sans selection:bg-[var(--color-casamento-dourado)] selection:text-white pt-24 md:pt-32 pb-32 w-full relative">
    
    <!-- HEADER -->
    <header class="fixed top-0 left-0 w-full bg-[var(--color-casamento-fundo)] z-40 border-b border-[var(--color-casamento-dourado)] border-opacity-30 shadow-[0_4px_30px_rgba(197,160,128,0.15)] transition-all duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative overflow-hidden group">
        
        <svg class="hidden md:block absolute -top-8 -right-1 w-32 h-32 text-[var(--color-casamento-texto)] opacity-[0.05] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.10]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M195.765,7.529C87.647,7.529,0,95.176,0,203.294c0,65.361,32.041,123.232,81.263,158.789 c-3.9-17.176-5.969-35.039-5.969-53.378c0-12.862,1.031-25.486,2.982-37.808c-11.475-19.899-18.04-42.984-18.04-67.604 c0-74.851,60.678-135.529,135.529-135.529s135.529,60.678,135.529,135.529c0,63.143-43.183,116.201-101.626,131.254 c6.334,21.179,20.239,39.109,38.567,50.65c72.239-28.806,123.294-99.39,123.294-181.905 C391.529,95.176,303.883,7.529,195.765,7.529z"/>
          <path d="M430.737,149.917c3.9,17.176,5.969,35.039,5.969,53.378c0,12.866-1.021,25.498-2.973,37.823 c11.469,19.896,18.031,42.975,18.031,67.589c0,74.851-60.678,135.529-135.529,135.529s-135.529-60.678-135.529-135.529 c0-63.143,43.183-116.201,101.626-131.254c-6.334-21.179-20.239-39.109-38.567-50.65 c-72.239,28.806-123.294,99.39-123.294,181.905c0,108.118,87.647,195.765,195.765,195.765S512,416.824,512,308.706 C512,243.345,479.959,185.474,430.737,149.917z"/>
        </svg>

        <div class="relative z-10 flex flex-col justify-center overflow-hidden">
          <h1 class="text-sm sm:text-lg md:text-xl tracking-[0.2em] uppercase text-[#5A8BBF] font-medium leading-none truncate whitespace-nowrap">
            Painel dos Noivos
          </h1>
          <p class="text-[7px] sm:text-[8px] md:text-[9px] text-[var(--color-casamento-texto)] opacity-60 tracking-widest uppercase mt-1 truncate whitespace-nowrap">Gestão de Presentes & Mensagens</p>
        </div>

        <div class="hidden md:flex flex-row items-center gap-4 relative z-10">
          <button @click="adicionarPresente" class="px-6 py-2.5 bg-[var(--color-casamento-dourado)] border border-transparent text-white text-[9px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all duration-300 shadow-sm">
            + Adicionar Presente
          </button>
          <button @click="abrirGerenciadorCategorias" class="px-6 py-2.5 border border-[#5A8BBF] border-opacity-30 text-[#5A8BBF] text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#5A8BBF] hover:text-white transition-all duration-300">
            Gerenciar Categorias
          </button>
          <button @click="voltarParaConvite" class="px-6 py-2.5 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-[var(--color-casamento-texto)] hover:text-[var(--color-casamento-fundo)] transition-all duration-300">
            Voltar ao Convite
          </button>
          <button @click="sair" class="px-6 py-2.5 bg-transparent border border-red-400 border-opacity-30 text-red-400 text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-red-400 hover:text-white transition-all duration-300">
            Sair
          </button>
        </div>

        <button @click="menuAberto = true" class="md:hidden relative z-10 text-[var(--color-casamento-texto)] hover:text-[var(--color-casamento-dourado)] transition-colors p-2 focus:outline-none flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <div v-if="menuAberto" @click="menuAberto = false" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden transition-opacity"></div>

    <aside :class="menuAberto ? 'translate-x-0' : 'translate-x-full'" class="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[var(--color-casamento-fundo)] z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col">
      <div class="flex justify-between items-center p-6 border-b border-[var(--color-casamento-dourado)] border-opacity-20">
        <span class="text-[10px] tracking-[0.2em] uppercase text-[#5A8BBF] font-medium">Menu</span>
        <button @click="menuAberto = false" class="text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100 p-1">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="flex flex-col gap-4 p-6 mt-4">
        <button @click="adicionarPresente" class="w-full py-4 bg-[var(--color-casamento-dourado)] text-white text-[10px] tracking-[0.2em] uppercase rounded-sm shadow-sm transition-opacity active:opacity-80">
          + Adicionar Presente
        </button>
        <button @click="abrirGerenciadorCategorias" class="w-full py-4 border border-[#5A8BBF] border-opacity-30 text-[#5A8BBF] text-[10px] tracking-[0.2em] uppercase rounded-sm shadow-sm transition-colors active:bg-[#5A8BBF] active:text-white text-center">
          Gerenciar Categorias
        </button>
        <button @click="voltarParaConvite" class="w-full py-4 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] opacity-80 hover:opacity-100 text-[10px] tracking-[0.2em] uppercase rounded-sm transition-colors active:bg-[var(--color-casamento-texto)] active:text-white text-center">
          Voltar ao Convite
        </button>
        <button @click="sair" class="w-full py-4 mt-8 bg-transparent text-red-400 opacity-80 hover:opacity-100 text-[10px] tracking-[0.2em] uppercase font-medium transition-opacity text-center">
          Sair do Painel
        </button>
      </div>
    </aside>

    <main class="max-w-5xl mx-auto px-4 md:px-12 mt-2">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-[var(--color-casamento-dourado)] border-opacity-20 pb-6 gap-6 md:gap-0">
        
        <div class="flex items-center justify-center bg-white border border-[var(--color-casamento-texto)] border-opacity-10 rounded-full p-1 shadow-sm w-full md:w-auto max-w-[300px] md:max-w-none">
          <button @click="abaAtual = 'mensagens'" :class="abaAtual === 'mensagens' ? 'bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-dourado)] shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5' : 'text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100'" class="flex-1 px-4 sm:px-6 py-2.5 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-300 outline-none text-center">
            Mensagens
          </button>
          <button @click="abaAtual = 'presentes'" :class="abaAtual === 'presentes' ? 'bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-dourado)] shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5' : 'text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100'" class="flex-1 px-4 sm:px-6 py-2.5 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-300 outline-none text-center whitespace-nowrap">
            Presentes
          </button>
        </div>

        <div v-show="abaAtual === 'mensagens'" class="hidden md:flex flex-row items-center justify-end gap-6 animate-fade-in">
          <div class="flex flex-col items-end pr-6 border-r border-[var(--color-casamento-dourado)] border-opacity-40">
             <p class="text-[9px] tracking-[0.3em] uppercase opacity-50 text-[var(--color-casamento-texto)] mb-1">Recados</p>
             <p class="text-2xl text-[#5A8BBF] font-light tracking-wide">{{ mensagens.length }}</p>
          </div>
          <div class="flex flex-col items-end">
             <p class="text-[9px] tracking-[0.3em] uppercase opacity-50 text-[var(--color-casamento-texto)] mb-1">Arrecadado</p>
             <p class="text-2xl text-[var(--color-casamento-dourado)] font-light tracking-wide">{{ formatarMoeda(totalArrecadado) }}</p>
          </div>
        </div>

        <div v-show="abaAtual === 'presentes'" class="hidden md:flex flex-row items-center justify-end animate-fade-in">
          <div class="flex flex-col items-end">
             <p class="text-[9px] tracking-[0.3em] uppercase opacity-50 text-[var(--color-casamento-texto)] mb-1">Itens Cadastrados</p>
             <p class="text-2xl text-[#5A8BBF] font-light tracking-wide">{{ presentesPainel.length }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-end mb-6 w-full animate-fade-in">
        
        <div v-if="abaAtual === 'mensagens'" class="relative inline-block w-full md:w-56">
          <select v-model="filtroMensagens" class="w-full appearance-none bg-white border border-[var(--color-casamento-dourado)] border-opacity-20 text-[9px] tracking-[0.15em] text-[var(--color-casamento-texto)] opacity-80 uppercase pl-5 pr-10 py-3 rounded-full outline-none focus:border-[var(--color-casamento-dourado)] focus:ring-1 focus:ring-[var(--color-casamento-dourado)] cursor-pointer transition-all shadow-sm">
            <option value="recentes">Mais Recentes</option>
            <option value="antigos">Mais Antigos</option>
            <option value="maior_valor">Maior Valor</option>
            <option value="menor_valor">Menor Valor</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-[var(--color-casamento-dourado)]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        <div v-if="abaAtual === 'presentes'" class="relative inline-block w-full md:w-56">
          <select v-model="filtroPresentes" class="w-full appearance-none bg-white border border-[var(--color-casamento-dourado)] border-opacity-20 text-[9px] tracking-[0.15em] text-[var(--color-casamento-texto)] opacity-80 uppercase pl-5 pr-10 py-3 rounded-full outline-none focus:border-[var(--color-casamento-dourado)] focus:ring-1 focus:ring-[var(--color-casamento-dourado)] cursor-pointer transition-all shadow-sm">
            <option value="todos">Todos os Presentes</option>
            <option value="ativos">Apenas Ativos</option>
            <option value="inativos">Apenas Inativos</option>
            <option value="destaques">Destaques</option>
            <option value="maior_valor">Maior Valor</option>
            <option value="menor_valor">Menor Valor</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-[var(--color-casamento-dourado)]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

      </div>

      <div v-if="carregando" class="py-20 flex flex-col items-center">
        <div class="w-6 h-6 border-2 border-[var(--color-casamento-dourado)] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-[10px] tracking-[0.2em] uppercase opacity-40 text-[var(--color-casamento-texto)]">Sincronizando dados...</p>
      </div>

      <div v-if="!carregando && abaAtual === 'mensagens'">
        <div v-if="mensagens.length === 0" class="py-20 text-center animate-fade-in">
          <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum presente registrado ainda.</p>
          <p class="font-script mt-4 text-[var(--color-casamento-dourado)] text-4xl opacity-80">Aguardando as confirmações...</p>
        </div>

        <div v-else class="flex flex-col gap-4 animate-fade-in">
          <div v-for="msg in mensagensFiltradas" :key="msg.id" class="flex flex-col bg-white p-5 rounded-lg border border-[var(--color-casamento-texto)] border-opacity-5 hover:shadow-lg transition-all duration-300">
            
            <div class="md:hidden flex items-stretch justify-between w-full mb-3">
              <div class="flex flex-col justify-between w-[45%] text-left gap-2">
                <span class="text-xs font-semibold tracking-[0.1em] text-[#5A8BBF] uppercase truncate" :title="msg.nome">{{ msg.nome }}</span>
                <span class="text-[8px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">{{ formatarData(msg.data) }}</span>
              </div>
              <div class="w-[1px] bg-[var(--color-casamento-dourado)] opacity-30 mx-2"></div>
              <div class="flex flex-col justify-between w-[45%] text-right gap-2">
                <span class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] truncate" :title="msg.presente_titulo">{{ msg.presente_titulo }}</span>
                <span class="text-[10px] font-medium text-[var(--color-casamento-dourado)] tracking-widest">{{ formatarMoeda(msg.valor) }}</span>
              </div>
            </div>

            <div class="hidden md:flex flex-row justify-between items-center w-full mb-3">
               <div class="flex items-baseline gap-3">
                  <span class="text-sm font-semibold tracking-[0.1em] text-[#5A8BBF] uppercase truncate max-w-[250px]" :title="msg.nome">{{ msg.nome }}</span>
                  <span class="text-[9px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">• {{ formatarData(msg.data) }}</span>
               </div>
               <div class="flex items-center gap-3">
                  <span class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] truncate max-w-[200px]" :title="msg.presente_titulo">{{ msg.presente_titulo }}</span>
                  <span class="w-[1px] h-3 bg-[var(--color-casamento-dourado)] opacity-30"></span>
                  <span class="text-[11px] font-medium text-[var(--color-casamento-dourado)] tracking-widest">{{ formatarMoeda(msg.valor) }}</span>
               </div>
            </div>
            
            <div class="w-full mt-2 md:mt-1 pt-3 md:pt-2 border-t border-[var(--color-casamento-texto)] border-opacity-5">
              <p v-if="msg.mensagem && msg.mensagem !== 'Sem mensagem'" class="text-sm font-light leading-relaxed opacity-80 italic text-[var(--color-casamento-texto)] text-left">
                "{{ msg.mensagem }}"
              </p>
              <p v-else class="text-[9px] tracking-[0.2em] uppercase opacity-30 text-[var(--color-casamento-texto)] text-left">
                (Apenas presenteou, sem recado)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!carregando && abaAtual === 'presentes'">
        <div v-if="presentesPainel.length === 0" class="py-20 text-center animate-fade-in">
          <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum presente cadastrado.</p>
          <button @click="adicionarPresente" class="mt-6 px-6 py-2 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-casamento-dourado)] hover:text-white transition-all duration-300">
            Cadastrar o primeiro
          </button>
        </div>

        <div v-else class="flex flex-col gap-4 animate-fade-in">
          <!-- CIRÚRGICO: Adicionada classe 'group' para o hover do ícone na lista funcionar em uníssono -->
          <div v-for="item in presentesFiltrados" :key="item.id" class="flex flex-col md:flex-row items-center justify-between bg-white p-4 md:p-5 rounded-lg border border-[var(--color-casamento-texto)] border-opacity-5 shadow-sm hover:shadow-md transition-all duration-300 gap-4 md:gap-0 group" :class="{'opacity-50 grayscale': !item.ativo}">
            
            <div class="flex items-center gap-4 w-full md:w-auto">
              <!-- CIRÚRGICO: Atualizado para o novo padrão de UI da vitrine circular premium -->
              <div class="w-12 h-12 bg-[var(--color-casamento-fundo)] rounded-full flex items-center justify-center flex-shrink-0 border border-[#5A8BBF] border-opacity-40 overflow-hidden shadow-sm transition-all duration-300 group-hover:border-opacity-100">
                <img :src="(item.icone === '/gift_close_white.gif' || !item.icone) ? '/gift_close.gif' : item.icone" alt="Ícone do Presente" class="w-8 h-8 object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div class="flex flex-col text-left">
                <h3 class="text-xs md:text-sm font-semibold tracking-widest text-[var(--color-casamento-texto)] uppercase">{{ item.titulo }}</h3>
                <span class="text-[8px] tracking-[0.2em] uppercase text-[#5A8BBF]">{{ item.categoria }}</span>
              </div>
            </div>

            <div class="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-none border-[var(--color-casamento-texto)] border-opacity-10 pt-3 md:pt-0">
              <span class="text-sm text-[var(--color-casamento-dourado)] font-light tracking-widest">{{ formatarMoeda(item.valor) }}</span>
              
              <div class="flex items-center gap-3">
                <button @click="alternarDestaque(item)" class="p-2 rounded-full transition-colors" :class="item.destaque ? 'bg-[var(--color-casamento-dourado)] text-white shadow-sm' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'" :title="item.destaque ? 'Remover Destaque' : 'Adicionar aos Destaques'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
                
                <span class="w-[1px] h-4 bg-[var(--color-casamento-texto)] opacity-20"></span>
                
                <button @click="editarPresente(item)" class="text-[#5A8BBF] opacity-70 hover:opacity-100 transition-opacity p-1" title="Editar presente">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>

                <button @click="alternarStatus(item)" class="text-[var(--color-casamento-texto)] opacity-50 hover:opacity-100 transition-opacity p-1" :title="item.ativo ? 'Desativar presente' : 'Reativar presente'">
                  <svg v-if="item.ativo" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                </button>

                <button @click="excluirPresente(item.id)" class="text-red-400 opacity-70 hover:opacity-100 hover:text-red-600 transition-colors p-1" title="Excluir Permanentemente">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </main>

    <div v-if="modalCategoriasAberto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div class="bg-[var(--color-casamento-fundo)] rounded-sm shadow-2xl max-w-md w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto flex flex-col animate-fade-in">
        <button @click="fecharGerenciadorCategorias" class="absolute top-4 right-5 text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100 text-3xl font-light leading-none cursor-pointer transition-opacity z-10">&times;</button>
        
        <div class="flex flex-col items-center mb-6 w-full mt-2">
          <p class="font-sans text-[10px] tracking-widest uppercase text-center text-[#5A8BBF] font-medium mb-3">
            Gerenciar Categorias
          </p>
          <div class="h-[1px] bg-[var(--color-casamento-dourado)] w-16 opacity-60"></div>
        </div>

        <div v-if="categoriasCadastradas.length === 0" class="py-10 text-center">
           <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhuma categoria cadastrada.</p>
        </div>

        <ul v-else class="flex flex-col gap-3">
          <li v-for="(cat, i) in categoriasCadastradas" :key="i" class="bg-white border border-[var(--color-casamento-texto)] border-opacity-10 p-3 rounded-sm shadow-sm flex flex-col gap-2">
            
            <div v-if="categoriaSendoEditada !== cat" class="flex justify-between items-center w-full">
              <span class="text-xs font-semibold tracking-widest uppercase text-[var(--color-casamento-texto)]">{{ cat }}</span>
              <div class="flex gap-3">
                <button @click="iniciarEdicaoCategoria(cat)" class="text-[#5A8BBF] opacity-70 hover:opacity-100 transition-opacity" title="Renomear">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button @click="excluirCategoria(cat)" class="text-red-400 opacity-70 hover:opacity-100 transition-opacity" title="Excluir">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>

            <div v-else class="flex flex-col gap-2 w-full">
              <input v-model="novoNomeCategoria" type="text" class="w-full bg-gray-50 border border-[var(--color-casamento-dourado)] rounded-sm outline-none p-2 text-xs font-medium text-[var(--color-casamento-texto)] uppercase tracking-widest" @keyup.enter="salvarEdicaoCategoria(cat)" />
              <p v-if="erroEdicaoCategoria" class="text-[8px] text-red-500 uppercase tracking-widest">{{ erroEdicaoCategoria }}</p>
              <p class="text-[8px] text-[#5A8BBF] uppercase tracking-widest opacity-80">Atenção: Isso alterará todos os presentes vinculados a esta categoria.</p>
              <div class="flex justify-end gap-2 mt-1">
                <button @click="cancelarEdicaoCategoria" class="text-[9px] uppercase tracking-widest opacity-60 hover:opacity-100 text-[var(--color-casamento-texto)] px-2 py-1">Cancelar</button>
                <button @click="salvarEdicaoCategoria(cat)" :disabled="salvandoCategoria" class="text-[9px] uppercase tracking-widest bg-[var(--color-casamento-dourado)] text-white px-3 py-1 rounded-sm hover:opacity-90 disabled:opacity-50">Salvar</button>
              </div>
            </div>

          </li>
        </ul>
        <div class="w-full mt-6 flex justify-center">
            <button @click="fecharGerenciadorCategorias" class="px-6 py-3 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-casamento-texto)] hover:text-white transition-all duration-300">
              Fechar
            </button>
        </div>
      </div>
    </div>


    <div v-if="modalPresenteAberto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div class="bg-[var(--color-casamento-fundo)] rounded-sm shadow-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[95vh] overflow-y-auto flex flex-col">
        <button @click="fecharModalAdicionar" class="absolute top-4 right-5 text-[var(--color-casamento-texto)] opacity-40 hover:opacity-100 text-3xl font-light leading-none cursor-pointer transition-opacity z-10">&times;</button>
        
        <div class="flex flex-col items-center mb-6 w-full mt-2">
          <p class="font-sans text-[10px] tracking-widest uppercase text-center text-[#5A8BBF] font-medium mb-3">
            {{ presenteSendoEditado ? 'Editar Presente' : 'Adicionar Novo Presente' }}
          </p>
          <div class="h-[1px] bg-[var(--color-casamento-dourado)] w-16 opacity-60"></div>
        </div>

        <form @submit.prevent="salvarPresenteBD" class="flex flex-col gap-5 w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1">Título do Presente *</label>
              <input v-model="novoPresente.titulo" type="text" required placeholder="Ex: Viagem de Lua de Mel" class="w-full bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[var(--color-casamento-dourado)] focus:border-opacity-100 outline-none p-3 text-xs font-light text-[var(--color-casamento-texto)] transition-colors shadow-sm" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1">Valor Sugerido (R$) *</label>
              <input v-model="novoPresente.valor" type="number" step="0.01" min="0" required placeholder="Ex: 150.00" class="w-full bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[var(--color-casamento-dourado)] focus:border-opacity-100 outline-none p-3 text-xs font-light text-[var(--color-casamento-texto)] transition-colors shadow-sm" />
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1">Descrição *</label>
            <textarea v-model="novoPresente.descricao" required rows="2" placeholder="Ex: Garante seu lugar na fila do jantar antes da tia avó." class="w-full bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[var(--color-casamento-dourado)] focus:border-opacity-100 outline-none p-3 text-xs font-light text-[var(--color-casamento-texto)] resize-none transition-colors shadow-sm"></textarea>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1">Categoria * <span v-if="categoriasCadastradas.length >= 5" class="text-red-400 lowercase tracking-normal">(limite de 5 alcançado)</span></label>
              <select v-model="novoPresente.categoria" @change="verificarNovaCategoria" required class="w-full bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[var(--color-casamento-dourado)] focus:border-opacity-100 outline-none p-3 text-xs font-light text-[var(--color-casamento-texto)] transition-colors shadow-sm cursor-pointer appearance-none">
                <option value="" disabled>Selecione uma categoria...</option>
                <option v-for="(cat, i) in categoriasCadastradas" :key="i" :value="cat">{{ cat }}</option>
                <option v-if="categoriasCadastradas.length < 5" value="NOVA_CATEGORIA" class="font-bold text-[#5A8BBF]">+ Criar nova categoria</option>
              </select>
              
              <div v-if="mostrandoNovaCategoria" class="flex items-center gap-2 mt-2 bg-gray-50 p-2 rounded-sm border border-gray-200 animate-fade-in shadow-sm">
                 <input v-model="novaCategoriaNome" type="text" placeholder="Nome da nova categoria..." class="flex-1 bg-transparent outline-none text-xs font-medium text-[var(--color-casamento-texto)] px-2" @keyup.enter.prevent="adicionarNovaCategoria" />
                 <button @click.prevent="adicionarNovaCategoria" type="button" class="px-4 py-2 bg-[var(--color-casamento-dourado)] text-white text-[8px] tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">Salvar</button>
                 <button @click.prevent="cancelarNovaCategoria" type="button" class="px-2 py-2 text-red-400 text-[10px] font-bold hover:opacity-70 transition-opacity">&times;</button>
              </div>
            </div>
            
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1">URL da Imagem (Opcional)</label>
              <input v-model="novoPresente.icone" type="url" placeholder="Cole o link da foto do produto..." class="w-full bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[var(--color-casamento-dourado)] focus:border-opacity-100 outline-none p-3 text-xs font-light text-[var(--color-casamento-texto)] transition-colors shadow-sm" />
            </div>
          </div>

          <div class="flex flex-col gap-1.5 pt-2 border-t border-[var(--color-casamento-texto)] border-opacity-10 mt-2">
            <label class="text-[9px] uppercase tracking-widest opacity-60 text-[var(--color-casamento-texto)] ml-1 flex justify-between">
              <span>Links de Sugestão (Opcional)</span><span>{{ novoPresente.links.length }} / 5</span>
            </label>
            <div class="flex items-center gap-2" v-if="novoPresente.links.length < 5">
               <input v-model="novoLinkInput" type="url" placeholder="https://www.loja.com.br/produto" class="flex-1 w-[50%] bg-white border border-[var(--color-casamento-texto)] border-opacity-20 rounded-sm focus:border-[#5A8BBF] focus:border-opacity-100 outline-none p-2 sm:p-3 text-[10px] sm:text-xs font-light text-[var(--color-casamento-texto)] transition-colors shadow-sm" @keyup.enter.prevent="adicionarLink" />
               <button @click.prevent="adicionarLink" type="button" class="px-2 sm:px-4 py-2 sm:py-3 bg-[#5A8BBF] text-white text-[8px] sm:text-[9px] tracking-[0.1em] sm:tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity shadow-sm flex-shrink-0 whitespace-nowrap">Adicionar</button>
            </div>
            <ul v-if="novoPresente.links.length > 0" class="flex flex-col gap-2 mt-2">
               <li v-for="(link, i) in novoPresente.links" :key="i" class="flex justify-between items-center bg-white p-2 rounded-sm border border-[var(--color-casamento-texto)] border-opacity-10 text-[10px] shadow-sm">
                 <span class="truncate w-[85%] text-[#5A8BBF] underline font-light"><a :href="link" target="_blank">{{ link }}</a></span>
                 <button @click.prevent="removerLink(i)" class="text-red-400 hover:text-red-600 transition-colors cursor-pointer" title="Remover link"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button>
               </li>
            </ul>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-[var(--color-casamento-texto)] border-opacity-10 mt-2">
            <label class="flex items-center gap-2 cursor-pointer group">
              <div class="w-4 h-4 border border-[var(--color-casamento-texto)] border-opacity-40 flex items-center justify-center rounded-sm transition-colors" :class="{'bg-[var(--color-casamento-dourado)] border-[var(--color-casamento-dourado)]': novoPresente.destaque}">
                <svg v-if="novoPresente.destaque" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <input type="checkbox" v-model="novoPresente.destaque" class="hidden" />
              <span class="text-[10px] tracking-widest uppercase opacity-80 text-[var(--color-casamento-texto)] group-hover:text-[var(--color-casamento-dourado)] transition-colors">
                Destacar na página inicial <span class="opacity-50 text-[8px]">(Máximo 6)</span>
              </span>
            </label>
          </div>
          <div class="w-full pt-4 mt-2">
            <button type="submit" :disabled="salvandoPresente" class="w-full py-4 bg-[var(--color-casamento-dourado)] text-white text-[10px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 flex justify-center items-center shadow-md">
              <span v-if="salvandoPresente">Processando...</span>
              <span v-else>{{ presenteSendoEditado ? 'Atualizar Presente' : 'Salvar Presente' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="md:hidden fixed bottom-0 left-0 w-full z-30 transition-transform duration-300" :class="menuAberto || modalPresenteAberto || modalCategoriasAberto ? 'translate-y-full' : 'translate-y-0'">
      <div class="bg-white/85 backdrop-blur-xl border-t border-[var(--color-casamento-dourado)] border-opacity-20 shadow-[0_-10px_40px_rgba(197,160,128,0.1)] px-6 pt-5 pb-safe flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-[8px] tracking-[0.3em] uppercase opacity-50 text-[var(--color-casamento-texto)] mb-1">Total Arrecadado</span>
          <span class="text-2xl text-[var(--color-casamento-dourado)] font-light tracking-wide leading-none pb-1">{{ formatarMoeda(totalArrecadado) }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-[8px] tracking-[0.3em] uppercase opacity-50 text-[var(--color-casamento-texto)] mb-1">{{ abaAtual === 'mensagens' ? 'Recados' : 'Presentes' }}</span>
          <span class="text-2xl text-[#5A8BBF] font-light tracking-wide leading-none pb-1">{{ abaAtual === 'mensagens' ? mensagens.length : presentesPainel.length }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { db } from '../firebase.js';
import { collection, getDocs, query, orderBy, addDoc, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const router = useRouter();

const abaAtual = ref('mensagens');
const mensagens = ref([]);
const presentesPainel = ref([]);
const carregando = ref(true);
const menuAberto = ref(false);

const filtroMensagens = ref('recentes');
const filtroPresentes = ref('todos');

watch(menuAberto, (novoValor) => {
  if (novoValor) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const buscarDados = async () => {
  carregando.value = true;
  try {
    const qMensagens = query(collection(db, "mensagens"), orderBy("data", "desc"));
    const snapshotMensagens = await getDocs(qMensagens);
    const msgs = [];
    snapshotMensagens.forEach((doc) => msgs.push({ id: doc.id, ...doc.data() }));
    mensagens.value = msgs;

    const qPresentes = query(collection(db, "presentes"), orderBy("data_criacao", "desc"));
    const snapshotPresentes = await getDocs(qPresentes);
    const press = [];
    const categoriasDoBanco = []; 

    snapshotPresentes.forEach((doc) => {
      const data = doc.data();
      press.push({ id: doc.id, ativo: data.ativo !== false, ...data }); 
      if (data.categoria && !categoriasDoBanco.includes(data.categoria)) {
        categoriasDoBanco.push(data.categoria);
      }
    });
    
    presentesPainel.value = press;
    categoriasCadastradas.value = categoriasDoBanco;

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    alert("Erro ao conectar com o banco de dados.");
  } finally {
    carregando.value = false;
  }
};

const totalArrecadado = computed(() => {
  return mensagens.value.reduce((total, msg) => total + (Number(msg.valor) || 0), 0);
});

const mensagensFiltradas = computed(() => {
  let resultado = [...mensagens.value];
  if (filtroMensagens.value === 'recentes') {
  } else if (filtroMensagens.value === 'antigos') {
    resultado.reverse();
  } else if (filtroMensagens.value === 'maior_valor') {
    resultado.sort((a, b) => Number(b.valor) - Number(a.valor));
  } else if (filtroMensagens.value === 'menor_valor') {
    resultado.sort((a, b) => Number(a.valor) - Number(b.valor));
  }
  return resultado;
});

const presentesFiltrados = computed(() => {
  let resultado = [...presentesPainel.value];
  
  if (filtroPresentes.value === 'ativos') {
    resultado = resultado.filter(p => p.ativo);
  } else if (filtroPresentes.value === 'inativos') {
    resultado = resultado.filter(p => !p.ativo);
  } else if (filtroPresentes.value === 'destaques') {
    resultado = resultado.filter(p => p.destaque);
  } else if (filtroPresentes.value === 'maior_valor') {
    resultado.sort((a, b) => Number(b.valor) - Number(a.valor));
  } else if (filtroPresentes.value === 'menor_valor') {
    resultado.sort((a, b) => Number(a.valor) - Number(b.valor));
  }
  
  return resultado;
});

const formatarMoeda = (valor) => {
  if (!valor) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

const formatarData = (dataIso) => {
  if (!dataIso) return '';
  return new Intl.DateTimeFormat('pt-BR', { 
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(new Date(dataIso)).replace(',', ' às');
};

const padronizarTexto = (texto) => {
  if (!texto) return '';
  const preposicoes = ['de', 'da', 'do', 'das', 'dos', 'com', 'para', 'e'];
  return texto
    .trim()
    .toLowerCase()
    .split(/\s+/) 
    .map((palavra, index) => {
      if (index === 0 || !preposicoes.includes(palavra)) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
      }
      return palavra;
    })
    .join(' ');
};

const padronizarDescricao = (texto) => {
  if (!texto) return '';
  const limpo = texto.trim();
  return limpo.charAt(0).toUpperCase() + limpo.slice(1);
};


const voltarParaConvite = () => {
  document.body.style.overflow = '';
  router.push('/');
};

const sair = () => {
  document.body.style.overflow = '';
  sessionStorage.removeItem('noivos_auth');
  router.push('/login');
};

const alternarDestaque = async (presente) => {
  try {
    if (!presente.destaque) {
      const q = query(collection(db, "presentes"), where("destaque", "==", true));
      const destaquesSnapshot = await getDocs(q);
      if (destaquesSnapshot.size >= 6) {
        alert("Você já possui 6 presentes em destaque. Remova a estrela de outro presente primeiro.");
        return;
      }
    }
    const presenteRef = doc(db, "presentes", presente.id);
    await updateDoc(presenteRef, { destaque: !presente.destaque });
    presente.destaque = !presente.destaque;
  } catch (error) {
    console.error("Erro ao atualizar destaque:", error);
    alert("Erro ao alterar o destaque.");
  }
};

const alternarStatus = async (presente) => {
  try {
    const presenteRef = doc(db, "presentes", presente.id);
    await updateDoc(presenteRef, { ativo: !presente.ativo });
    presente.ativo = !presente.ativo;
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    alert("Erro ao alterar o status do presente.");
  }
};

const excluirPresente = async (id) => {
  if(confirm("Tem certeza que deseja excluir este presente DEFINITIVAMENTE? Essa ação não pode ser desfeita.")) {
    try {
      await deleteDoc(doc(db, "presentes", id));
      presentesPainel.value = presentesPainel.value.filter(p => p.id !== id);
    } catch (error) {
      console.error("Erro ao excluir:", error);
      alert("Erro ao excluir o presente.");
    }
  }
};


const modalCategoriasAberto = ref(false);
const categoriaSendoEditada = ref(null);
const novoNomeCategoria = ref('');
const salvandoCategoria = ref(false);
const erroEdicaoCategoria = ref('');

const abrirGerenciadorCategorias = () => {
  menuAberto.value = false;
  document.body.style.overflow = 'hidden';
  modalCategoriasAberto.value = true;
};

const fecharGerenciadorCategorias = () => {
  modalCategoriasAberto.value = false;
  document.body.style.overflow = '';
  categoriaSendoEditada.value = null;
  erroEdicaoCategoria.value = '';
};

const iniciarEdicaoCategoria = (cat) => {
  categoriaSendoEditada.value = cat;
  novoNomeCategoria.value = cat;
  erroEdicaoCategoria.value = '';
};

const cancelarEdicaoCategoria = () => {
  categoriaSendoEditada.value = null;
  novoNomeCategoria.value = '';
  erroEdicaoCategoria.value = '';
};

const salvarEdicaoCategoria = async (nomeAntigo) => {
  const nomeNovo = padronizarTexto(novoNomeCategoria.value);
  
  if (!nomeNovo) {
    erroEdicaoCategoria.value = "O nome não pode ficar vazio.";
    return;
  }
  
  if (nomeNovo === nomeAntigo) {
    cancelarEdicaoCategoria();
    return;
  }

  if (categoriasCadastradas.value.includes(nomeNovo)) {
    erroEdicaoCategoria.value = "Esta categoria já existe.";
    return;
  }

  salvandoCategoria.value = true;
  erroEdicaoCategoria.value = '';

  try {
    const presentesAfetados = presentesPainel.value.filter(p => p.categoria === nomeAntigo);
    
    for (const presente of presentesAfetados) {
      const presenteRef = doc(db, "presentes", presente.id);
      await updateDoc(presenteRef, { categoria: nomeNovo });
      presente.categoria = nomeNovo;
    }

    const index = categoriasCadastradas.value.indexOf(nomeAntigo);
    if (index !== -1) {
      categoriasCadastradas.value[index] = nomeNovo;
    }

    cancelarEdicaoCategoria();
    alert(`Categoria atualizada! ${presentesAfetados.length} presente(s) alterado(s).`);

  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    erroEdicaoCategoria.value = "Erro ao salvar no banco de dados.";
  } finally {
    salvandoCategoria.value = false;
  }
};

const excluirCategoria = (nomeCat) => {
  const presentesNestaCategoria = presentesPainel.value.filter(p => p.categoria === nomeCat);
  
  if (presentesNestaCategoria.length > 0) {
    alert(`ERRO: Você não pode excluir "${nomeCat}" pois há ${presentesNestaCategoria.length} presente(s) vinculado(s) a ela.\n\nPor favor, edite ou exclua os presentes primeiro.`);
    return;
  }

  if (confirm(`Tem certeza que deseja remover a categoria "${nomeCat}"?`)) {
     const index = categoriasCadastradas.value.indexOf(nomeCat);
     if (index !== -1) {
       categoriasCadastradas.value.splice(index, 1);
     }
  }
};


const modalPresenteAberto = ref(false);
const salvandoPresente = ref(false);
const presenteSendoEditado = ref(null); 

// CIRÚRGICO: Fallback para o ícone no modal
const novoPresente = ref({ titulo: '', valor: '', descricao: '', categoria: '', links: [], destaque: false, icone: '' });
const categoriasCadastradas = ref([]); 
const mostrandoNovaCategoria = ref(false);
const novaCategoriaNome = ref('');
const novoLinkInput = ref('');

const adicionarPresente = () => {
  presenteSendoEditado.value = null; 
  novoPresente.value = { titulo: '', valor: '', descricao: '', categoria: '', links: [], destaque: false, icone: '' };
  menuAberto.value = false; 
  document.body.style.overflow = 'hidden'; 
  modalPresenteAberto.value = true;
};

const editarPresente = (item) => {
  presenteSendoEditado.value = item.id;
  novoPresente.value = {
    titulo: item.titulo,
    valor: item.valor,
    descricao: item.descricao,
    categoria: item.categoria,
    links: [...(item.links || [])],
    destaque: item.destaque || false,
    icone: item.icone && item.icone !== '/gift_close_white.gif' && item.icone !== '/gift_close.gif' ? item.icone : ''
  };
  
  if (item.categoria && !categoriasCadastradas.value.includes(item.categoria)) {
    categoriasCadastradas.value.push(item.categoria);
  }

  document.body.style.overflow = 'hidden'; 
  modalPresenteAberto.value = true;
};

const fecharModalAdicionar = () => {
  modalPresenteAberto.value = false;
  document.body.style.overflow = ''; 
  setTimeout(() => {
    presenteSendoEditado.value = null;
    novoPresente.value = { titulo: '', valor: '', descricao: '', categoria: '', links: [], destaque: false, icone: '' };
    novoLinkInput.value = '';
    mostrandoNovaCategoria.value = false;
    novaCategoriaNome.value = '';
  }, 300);
};

const verificarNovaCategoria = (e) => {
  if (e.target.value === 'NOVA_CATEGORIA') { mostrandoNovaCategoria.value = true; novoPresente.value.categoria = ''; } 
  else { mostrandoNovaCategoria.value = false; }
};

const adicionarNovaCategoria = () => {
  const cat = novaCategoriaNome.value.trim();
  if (cat && categoriasCadastradas.value.length < 5) {
    categoriasCadastradas.value.push(padronizarTexto(cat)); 
    novoPresente.value.categoria = padronizarTexto(cat); 
    mostrandoNovaCategoria.value = false; novaCategoriaNome.value = '';
  }
};

const cancelarNovaCategoria = () => { mostrandoNovaCategoria.value = false; novaCategoriaNome.value = ''; novoPresente.value.categoria = ''; };

const adicionarLink = () => {
  const link = novoLinkInput.value.trim();
  if (link && novoPresente.value.links.length < 5) {
    if (link.startsWith('http://') || link.startsWith('https://')) { novoPresente.value.links.push(link); novoLinkInput.value = ''; } 
    else { alert("Por favor, insira um link válido começando com http:// ou https://"); }
  }
};

const removerLink = (index) => { novoPresente.value.links.splice(index, 1); };

const salvarPresenteBD = async () => {
  if (!novoPresente.value.titulo || !novoPresente.value.valor || !novoPresente.value.descricao || !novoPresente.value.categoria) { alert("Preencha todos os campos obrigatórios."); return; }
  salvandoPresente.value = true;
  
  try {
    if (novoPresente.value.destaque) {
      const q = query(collection(db, "presentes"), where("destaque", "==", true));
      const destaquesSnapshot = await getDocs(q);
      
      const itemAtual = presenteSendoEditado.value ? presentesPainel.value.find(p => p.id === presenteSendoEditado.value) : null;
      const jaEraDestaque = itemAtual ? itemAtual.destaque : false;

      if (!jaEraDestaque && destaquesSnapshot.size >= 6) { 
        alert("Você já possui 6 destaques. Desmarque para continuar."); 
        salvandoPresente.value = false; 
        return; 
      }
    }

    const tituloPadronizado = padronizarTexto(novoPresente.value.titulo);
    const descricaoPadronizada = padronizarDescricao(novoPresente.value.descricao);
    const categoriaPadronizada = padronizarTexto(novoPresente.value.categoria);
    const valorNumerico = Number(novoPresente.value.valor);
    
    // CIRÚRGICO: Sempre salva a imagem padrão original se nenhuma URL for colada.
    const iconeFinal = novoPresente.value.icone.trim() || '/gift_close.gif';

    if (presenteSendoEditado.value) {
      const presenteRef = doc(db, "presentes", presenteSendoEditado.value);
      const atualizacao = {
        titulo: tituloPadronizado,
        descricao: descricaoPadronizada,
        valor: valorNumerico,
        categoria: categoriaPadronizada,
        links: novoPresente.value.links,
        destaque: novoPresente.value.destaque,
        icone: iconeFinal
      };
      
      await updateDoc(presenteRef, atualizacao);

      const index = presentesPainel.value.findIndex(p => p.id === presenteSendoEditado.value);
      if (index !== -1) {
        presentesPainel.value[index] = { ...presentesPainel.value[index], ...atualizacao };
      }
      alert("Presente atualizado com sucesso!");

    } else {
      const docRef = await addDoc(collection(db, "presentes"), {
        titulo: tituloPadronizado,
        descricao: descricaoPadronizada,
        valor: valorNumerico,
        categoria: categoriaPadronizada,
        links: novoPresente.value.links,
        icone: iconeFinal, 
        destaque: novoPresente.value.destaque,
        ativo: true, 
        data_criacao: new Date().toISOString()
      });

      presentesPainel.value.unshift({
        id: docRef.id,
        titulo: tituloPadronizado,
        descricao: descricaoPadronizada,
        valor: valorNumerico,
        categoria: categoriaPadronizada,
        links: novoPresente.value.links,
        icone: iconeFinal, 
        destaque: novoPresente.value.destaque,
        ativo: true
      });
      alert("Presente cadastrado com sucesso!");
    }

    fecharModalAdicionar();

  } catch (error) {
    console.error("Erro ao salvar presente:", error);
    alert("Houve um erro ao processar o presente.");
  } finally {
    salvandoPresente.value = false;
  }
};

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  buscarDados();
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .pb-safe {
    padding-bottom: calc(2rem + env(safe-area-inset-bottom, 0px));
  }
}
</style>