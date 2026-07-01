<template>
  <div class="min-h-screen bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-texto)] font-sans selection:bg-[var(--color-casamento-dourado)] selection:text-white pt-24 md:pt-32 pb-48 md:pb-32 w-full relative overflow-x-hidden">
    
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
          <button @click="adicionarPresente" class="px-6 py-2.5 bg-[var(--color-casamento-dourado)] border border-transparent text-white text-[9px] tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all duration-300 shadow-sm cursor-pointer">
            + Adicionar Presente
          </button>
          <button @click="abrirGerenciadorCategorias" class="px-6 py-2.5 border border-[#5A8BBF] border-opacity-30 text-[#5A8BBF] text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#5A8BBF] hover:text-white transition-all duration-300 cursor-pointer">
            Gerenciar Categorias
          </button>
          <button @click="voltarParaConvite" class="px-6 py-2.5 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-[var(--color-casamento-texto)] hover:text-[var(--color-casamento-fundo)] transition-all duration-300 cursor-pointer">
            Voltar ao Convite
          </button>
          <button @click="sair" class="px-6 py-2.5 bg-transparent border border-red-400 border-opacity-30 text-red-400 text-[9px] tracking-[0.2em] uppercase rounded-sm hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer">
            Sair
          </button>
        </div>

        <button @click="menuAberto = true" class="md:hidden relative z-10 text-[var(--color-casamento-texto)] hover:text-[var(--color-casamento-dourado)] transition-colors p-2 focus:outline-none flex-shrink-0 cursor-pointer">
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
        <button @click="menuAberto = false" class="text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100 p-1 cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="flex flex-col gap-4 p-6 mt-4">
        <button @click="adicionarPresente" class="w-full py-4 bg-[var(--color-casamento-dourado)] text-white text-[10px] tracking-[0.2em] uppercase rounded-sm shadow-sm transition-opacity active:opacity-80 cursor-pointer">
          + Adicionar Presente
        </button>
        <button @click="abrirGerenciadorCategorias" class="w-full py-4 border border-[#5A8BBF] border-opacity-30 text-[#5A8BBF] text-[10px] tracking-[0.2em] uppercase rounded-sm shadow-sm transition-colors active:bg-[#5A8BBF] active:text-white text-center cursor-pointer">
          Gerenciar Categorias
        </button>
        <button @click="voltarParaConvite" class="w-full py-4 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] opacity-80 hover:opacity-100 text-[10px] tracking-[0.2em] uppercase rounded-sm transition-colors active:bg-[var(--color-casamento-texto)] active:text-white text-center cursor-pointer">
          Voltar ao Convite
        </button>
        <button @click="sair" class="w-full py-4 mt-8 bg-transparent text-red-400 opacity-80 hover:opacity-100 text-[10px] tracking-[0.2em] uppercase font-medium transition-opacity text-center cursor-pointer">
          Sair do Painel
        </button>
      </div>
    </aside>

    <main class="max-w-5xl mx-auto px-4 md:px-12 mt-2 w-full">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-[var(--color-casamento-dourado)] border-opacity-20 pb-6 gap-6 md:gap-0">
        
        <div class="flex items-center justify-center bg-white border border-[var(--color-casamento-texto)] border-opacity-10 rounded-full p-1 shadow-sm w-full md:w-auto max-w-[300px] md:max-w-none">
          <button @click="abaAtual = 'mensagens'" :class="abaAtual === 'mensagens' ? 'bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-dourado)] shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5' : 'text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100'" class="flex-1 px-4 sm:px-6 py-2.5 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-300 outline-none text-center cursor-pointer">
            Mensagens
          </button>
          
          <button @click="abaAtual = 'presentes'" :class="abaAtual === 'presentes' ? 'bg-[var(--color-casamento-fundo)] text-[var(--color-casamento-dourado)] shadow-sm border border-[var(--color-casamento-texto)] border-opacity-5' : 'text-[var(--color-casamento-texto)] opacity-60 hover:opacity-100'" class="flex-1 px-4 sm:px-6 py-2.5 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-300 outline-none text-center flex items-center justify-center cursor-pointer">
            <span class="relative inline-flex items-center pr-1.5">
              Presentes
              <span v-if="presentesPendentes.length > 0" class="absolute -top-1.5 -right-3.5 flex items-center justify-center bg-[#B87C70] text-white text-[8px] font-bold h-[16px] w-[16px] rounded-full shadow-sm pt-[1px]" style="line-height: 1;">
                {{ presentesPendentes.length }}
              </span>
            </span>
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

      <div class="flex justify-end mb-6 w-full animate-fade-in pr-0 md:pr-5">
        
        <div v-if="abaAtual === 'mensagens'" class="relative inline-block w-full md:w-[260px]">
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

        <div v-if="abaAtual === 'presentes'" class="relative inline-block w-full md:w-[260px]">
          <select v-model="filtroPresentes" class="w-full appearance-none bg-white border border-[var(--color-casamento-dourado)] border-opacity-20 text-[9px] tracking-[0.15em] text-[var(--color-casamento-texto)] opacity-80 uppercase pl-5 pr-10 py-3 rounded-full outline-none focus:border-[var(--color-casamento-dourado)] focus:ring-1 focus:ring-[var(--color-casamento-dourado)] cursor-pointer transition-all shadow-sm">
            <option value="todos">Todos os Presentes</option>
            <option value="reservados">Aguardando Confirmação</option>
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
        <div v-if="mensagensPaginadas.length === 0" class="py-20 text-center animate-fade-in">
          <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum recado encontrado.</p>
        </div>

        <div v-else class="flex flex-col gap-4 animate-fade-in w-full">
          
          <div v-for="msg in mensagensPaginadas" :key="msg.id" class="flex flex-col bg-white p-5 rounded-lg border border-[var(--color-casamento-texto)] border-opacity-5 hover:shadow-lg transition-all duration-300 relative group w-full">
            
            <div class="w-full flex justify-between items-start mb-5">
              <div>
                <span v-if="getStatusMensagem(msg.presente_id, msg.nome) === 'comprado'" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#8CA894]/20 to-transparent rounded-sm border-l-2 border-[#8CA894]">
                  <svg class="w-3.5 h-3.5 text-[#8CA894]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span class="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8CA894]">Recebido</span>
                </span>
                <span v-else-if="getStatusMensagem(msg.presente_id, msg.nome) === 'reservado'" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[var(--color-casamento-dourado)]/20 to-transparent rounded-sm border-l-2 border-[var(--color-casamento-dourado)]">
                  <svg class="w-3.5 h-3.5 text-[var(--color-casamento-dourado)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--color-casamento-dourado)]">Pendente</span>
                </span>
                <span v-else-if="['cancelado', 'expirado'].includes(getStatusMensagem(msg.presente_id, msg.nome))" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-400/10 to-transparent rounded-sm border-l-2 border-red-400 opacity-90">
                  <svg class="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span class="text-[9px] font-semibold tracking-[0.2em] uppercase text-red-400">Expirado</span>
                </span>
              </div>
              <button @click="excluirMensagem(msg.id)" class="text-red-400 opacity-40 hover:opacity-100 hover:bg-red-50 rounded p-1.5 transition-all flex-shrink-0 cursor-pointer" title="Excluir Recado">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-3 border-b border-[var(--color-casamento-texto)] border-opacity-5 pb-3 gap-2 md:gap-0">
              
              <div class="flex items-baseline gap-2 md:gap-3 w-full md:w-auto overflow-hidden">
                <span class="text-xs md:text-sm font-semibold tracking-[0.1em] text-[#5A8BBF] uppercase truncate max-w-[150px] md:max-w-[250px]" :title="msg.nome">{{ msg.nome }}</span>
                <span class="text-[8px] md:text-[9px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)] flex-shrink-0">• {{ formatarData(msg.data) }}</span>
              </div>
              
              <div class="flex items-center justify-between md:justify-end gap-2 md:gap-3 w-full md:w-auto overflow-hidden mt-1 md:mt-0">
                <span class="text-[9px] uppercase tracking-widest text-[var(--color-casamento-texto)] truncate text-left md:text-right" 
                      :class="['cancelado', 'expirado'].includes(getStatusMensagem(msg.presente_id, msg.nome)) ? 'line-through opacity-40' : 'opacity-70'" 
                      :title="msg.presente_titulo">
                  {{ msg.presente_titulo }}
                </span>
                <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  <span class="w-[1px] h-3 bg-[var(--color-casamento-dourado)] opacity-30"></span>
                  <span class="text-[10px] md:text-[11px] font-medium text-[var(--color-casamento-dourado)] tracking-widest" 
                        :class="['cancelado', 'expirado'].includes(getStatusMensagem(msg.presente_id, msg.nome)) ? 'line-through opacity-40' : ''">
                    {{ formatarMoeda(msg.valor) }}
                  </span>
                </div>
              </div>

            </div>
            
            <div class="w-full">
              <p v-if="msg.mensagem && msg.mensagem !== 'Sem mensagem'" class="text-sm font-light leading-relaxed opacity-80 italic text-[var(--color-casamento-texto)] text-left">
                "{{ msg.mensagem }}"
              </p>
              <p v-else class="text-[9px] tracking-[0.2em] uppercase opacity-30 text-[var(--color-casamento-texto)] text-left">
                (Apenas presenteou, sem recado)
              </p>
            </div>
          </div>

          <!-- Paginação Desktop Mensagens -->
          <div v-if="totalPaginasMensagens > 1" class="hidden md:flex justify-between items-center w-full mt-8 border-t border-[var(--color-casamento-texto)] border-opacity-10 pt-6">
            <button @click="paginaMensagens--" :disabled="paginaMensagens === 1" class="px-5 py-2.5 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-widest uppercase rounded-sm transition-all disabled:opacity-30 hover:bg-[var(--color-casamento-dourado)] hover:text-white cursor-pointer">Anterior</button>
            <span class="text-[10px] tracking-widest uppercase text-[var(--color-casamento-texto)] opacity-60">Página {{ paginaMensagens }} de {{ totalPaginasMensagens }}</span>
            <button @click="paginaMensagens++" :disabled="paginaMensagens === totalPaginasMensagens" class="px-5 py-2.5 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-widest uppercase rounded-sm transition-all disabled:opacity-30 hover:bg-[var(--color-casamento-dourado)] hover:text-white cursor-pointer">Próxima</button>
          </div>
          
        </div>
      </div>

      <div v-if="!carregando && abaAtual === 'presentes'">
        <div v-if="presentesPaginados.length === 0" class="py-20 text-center animate-fade-in">
          <p class="text-[10px] tracking-widest uppercase opacity-40 text-[var(--color-casamento-texto)]">Nenhum presente encontrado.</p>
          <button @click="adicionarPresente" class="mt-6 px-6 py-2 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-casamento-dourado)] hover:text-white transition-all duration-300 cursor-pointer">
            Cadastrar Novo
          </button>
        </div>

        <div v-else class="flex flex-col gap-4 animate-fade-in w-full overflow-hidden px-1 py-1">
          
          <div v-for="item in presentesPaginados" :key="item.id" 
               class="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 rounded-lg border shadow-sm transition-all duration-300 gap-4 md:gap-0 group w-full" 
               :class="[
                 !item.ativo ? 'opacity-50 grayscale border-[var(--color-casamento-texto)] border-opacity-5 bg-white' : '',
                 item.status === 'reservado' ? 'bg-[var(--color-casamento-fundo)] border-[var(--color-casamento-dourado)] border-opacity-50 shadow-md' : '',
                 item.status === 'comprado' ? 'bg-[#FDFBF7] border-[var(--color-casamento-dourado)] border-opacity-40 shadow-[0_4px_20px_rgba(197,160,128,0.25)] relative overflow-hidden' : '',
                 (!item.ativo || item.status === 'reservado' || item.status === 'comprado') ? '' : 'bg-white border-[var(--color-casamento-texto)] border-opacity-5 hover:shadow-md'
               ]">
            
            <div v-if="item.status === 'comprado'" class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--color-casamento-dourado)] to-[#D9B78A] opacity-90 rounded-l-lg"></div>
            
            <div class="flex items-center gap-4 md:gap-5 w-full md:flex-1" :class="item.status === 'comprado' ? 'pl-2 py-1' : ''">
              
              <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 bg-white"
                   :class="item.status === 'comprado' ? 'border-[var(--color-casamento-dourado)] shadow-sm text-[var(--color-casamento-dourado)]' : 'border-[#5A8BBF] border-opacity-40 group-hover:border-opacity-100 text-[#5A8BBF] opacity-70 group-hover:opacity-100'">
                 <svg v-if="!item.icone || item.icone === '/gift_close_white.gif' || item.icone === '/gift_close.gif'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="'url(#metallicGradient-' + item.id + ')'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 transition-all duration-300 animate-float" :class="{'opacity-100': item.status === 'comprado' || item.status === 'reservado'}">
                  <defs>
                    <linearGradient :id="'metallicGradient-' + item.id" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="currentColor" stop-opacity="0.8"/>
                      <stop offset="30%" stop-color="currentColor" stop-opacity="1"/>
                      <stop offset="50%" stop-color="white" stop-opacity="0.7"/>
                      <stop offset="70%" stop-color="currentColor" stop-opacity="1"/>
                      <stop offset="100%" stop-color="currentColor" stop-opacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
                <img v-else :src="item.icone" alt="Ícone do Presente" class="w-7 h-7 object-contain transition-all duration-300" :class="{'grayscale-0 opacity-100': item.status === 'comprado' || item.status === 'reservado', 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100': item.status !== 'comprado' && item.status !== 'reservado'}" />
              </div>
              
              <div class="flex flex-col text-left justify-center">
                <h3 class="text-xs md:text-sm font-semibold tracking-widest uppercase" :class="item.status === 'comprado' ? 'text-[var(--color-casamento-dourado)]' : 'text-[var(--color-casamento-texto)]'">{{ item.titulo }}</h3>
                <span class="text-[8px] tracking-[0.2em] uppercase text-[#5A8BBF] mb-1.5">{{ item.categoria }}</span>
                
                <span v-if="item.status === 'reservado'" class="text-[9px] tracking-[0.1em] text-[var(--color-casamento-dourado)] font-medium uppercase">Reservado por: {{ item.reservado_por }}</span>
                
                <span v-if="item.status === 'reservado' && isExpirado(item.data_reserva)" class="text-[8px] tracking-widest text-[#B87C70] font-bold mt-1 flex items-center gap-1 uppercase">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  EXPIRADO
                </span>
                <span v-else-if="item.status === 'reservado'" class="text-[8px] tracking-widest text-[#B87C70] opacity-80 mt-1 flex items-center gap-1 uppercase">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {{ calcularTempoRestante(item.data_reserva) }}
                </span>
                
                <span v-else-if="item.status === 'comprado'" class="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-casamento-dourado)] text-white text-[8px] tracking-[0.15em] font-bold uppercase rounded-full shadow-sm w-fit mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                  Presenteado por {{ item.reservado_por }}
                </span>
                
                <template v-else>
                  <span class="text-[9px] tracking-[0.1em] text-[#5A8BBF] font-medium uppercase mt-0.5">Disponível para os convidados</span>
                  <span v-if="item.data_criacao" class="text-[8px] tracking-widest text-[var(--color-casamento-texto)] opacity-50 mt-1 flex items-center gap-1 uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Adicionado em {{ formatarDataCurta(item.data_criacao) }}
                  </span>
                </template>
              </div>
            </div>

            <!-- CIRÚRGICO 1: Expansão do espaço do preço com w-1/3 flex-1 para não ser espremido pelos botões. -->
            <div class="flex flex-row flex-nowrap items-center justify-between border-t md:border-none border-[var(--color-casamento-texto)] border-opacity-10 pt-3 md:pt-0 mt-2 md:mt-0 gap-x-2 md:gap-x-10 w-full md:w-auto">
              <span class="text-[11px] sm:text-xs md:text-sm font-light tracking-widest whitespace-nowrap text-left md:text-left w-1/3 md:w-auto flex-1 min-w-0 truncate" :title="formatarMoeda(item.valor)" :class="item.status === 'comprado' ? 'text-[var(--color-casamento-dourado)] font-medium' : 'text-[var(--color-casamento-dourado)]'">{{ formatarMoeda(item.valor) }}</span>
              
              <div class="flex items-center justify-end w-[165px] sm:w-[200px] md:w-[260px] relative z-10 flex-shrink-0">
                
                <template v-if="item.status === 'reservado'">
                  <div v-if="isExpirado(item.data_reserva)" class="flex items-center gap-2 md:gap-3 w-full">
                    <button @click="renovarReserva(item)" class="py-2 px-1 md:py-2.5 md:px-3 bg-[#5A8BBF] text-white rounded-sm hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-1 md:gap-1.5 flex-1 cursor-pointer" title="Renovar Prazo (24h)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      <span class="text-[7.5px] md:text-[8px] tracking-widest uppercase font-medium">Renovar</span>
                    </button>
                    <button @click="cancelarReserva(item)" class="py-2 px-1 md:py-2.5 md:px-3 bg-transparent border border-[#B87C70] text-[#B87C70] rounded-sm hover:bg-[#B87C70] hover:text-white transition-colors flex items-center justify-center gap-1 md:gap-1.5 flex-1 cursor-pointer" title="Disponibilizar para a lista">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      <span class="text-[7.5px] md:text-[8px] tracking-widest uppercase font-medium">Liberar</span>
                    </button>
                  </div>
                  <div v-else class="flex items-center gap-2 md:gap-3 w-full">
                    <button @click="confirmarReserva(item)" class="py-2 px-1 md:py-2.5 md:px-3 bg-[#8CA894] text-white rounded-sm hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-1 md:gap-1.5 flex-1 cursor-pointer" title="Confirmar Recebimento">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span class="text-[7.5px] md:text-[8px] tracking-widest uppercase font-medium">Confirmar</span>
                    </button>
                    <button @click="cancelarReserva(item)" class="py-2 px-1 md:py-2.5 md:px-3 bg-transparent border border-[#B87C70] text-[#B87C70] rounded-sm hover:bg-[#B87C70] hover:text-white transition-colors flex items-center justify-center gap-1 md:gap-1.5 flex-1 cursor-pointer" title="Cancelar Reserva">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      <span class="text-[7.5px] md:text-[8px] tracking-widest uppercase font-medium">Liberar</span>
                    </button>
                  </div>
                </template>

                <template v-else>
                  <div class="flex items-center justify-between w-full px-0 md:px-1 gap-0">
                    <button @click="alternarDestaque(item)" :disabled="!item.ativo" class="p-1.5 md:p-2 rounded-full transition-all cursor-pointer disabled:opacity-30 hover:disabled:bg-transparent flex-shrink-0" :class="item.destaque ? 'text-[var(--color-casamento-dourado)] bg-[#F2E6D9]' : 'text-gray-400 hover:text-[var(--color-casamento-dourado)] hover:bg-[#F2E6D9]'" title="Destaque">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </button>
                    
                    <span class="w-[1px] h-3 md:h-4 bg-[var(--color-casamento-texto)] opacity-20"></span>
                    
                    <button @click="editarPresente(item)" :disabled="!item.ativo" class="p-1.5 md:p-2 rounded-full transition-all text-[#5A8BBF] opacity-70 hover:opacity-100 hover:bg-blue-50 cursor-pointer disabled:opacity-30 hover:disabled:bg-transparent flex-shrink-0" title="Editar presente">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
    
                    <button @click="alternarStatus(item)" class="p-1.5 md:p-2 rounded-full transition-all cursor-pointer flex-shrink-0" :class="item.ativo ? 'text-[var(--color-casamento-texto)] opacity-50 hover:opacity-100 hover:bg-gray-100' : 'text-red-400 hover:bg-red-50'" :title="item.ativo ? 'Desativar presente' : 'Reativar presente'">
                      <svg v-if="item.ativo" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                    </button>
    
                    <button v-if="item.status !== 'comprado'" @click="excluirPresente(item.id)" :disabled="!item.ativo" class="p-1.5 md:p-2 rounded-full transition-all text-red-400 opacity-70 hover:opacity-100 hover:bg-red-50 cursor-pointer disabled:opacity-30 hover:disabled:bg-transparent flex-shrink-0" title="Excluir Permanentemente">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                    <button v-else disabled class="p-1.5 md:p-2 rounded-full transition-all text-[var(--color-casamento-texto)] opacity-20 flex-shrink-0" title="Não é possível excluir um presente já comprado">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </template>

              </div>
            </div>

          </div>
          
          <!-- Paginação Desktop Presentes -->
          <div v-if="totalPaginasPresentes > 1" class="hidden md:flex justify-between items-center w-full mt-8 border-t border-[var(--color-casamento-texto)] border-opacity-10 pt-6">
            <button @click="paginaPresentes--" :disabled="paginaPresentes === 1" class="px-5 py-2.5 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-widest uppercase rounded-sm transition-all cursor-pointer hover:bg-[var(--color-casamento-dourado)] hover:text-white">Anterior</button>
            <span class="text-[10px] tracking-widest uppercase text-[var(--color-casamento-texto)] opacity-60">Página {{ paginaPresentes }} de {{ totalPaginasPresentes }}</span>
            <button @click="paginaPresentes++" :disabled="paginaPresentes === totalPaginasPresentes" class="px-5 py-2.5 border border-[var(--color-casamento-dourado)] text-[var(--color-casamento-dourado)] text-[9px] tracking-widest uppercase rounded-sm transition-all cursor-pointer hover:bg-[var(--color-casamento-dourado)] hover:text-white">Próxima</button>
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
                <button @click="iniciarEdicaoCategoria(cat)" class="text-[#5A8BBF] opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="Renomear">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button @click="excluirCategoria(cat)" class="text-red-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" title="Excluir">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>

            <div v-else class="flex flex-col gap-2 w-full">
              <input v-model="novoNomeCategoria" type="text" class="w-full bg-gray-50 border border-[var(--color-casamento-dourado)] rounded-sm outline-none p-2 text-xs font-medium text-[var(--color-casamento-texto)] uppercase tracking-widest" @keyup.enter="salvarEdicaoCategoria(cat)" />
              <p v-if="erroEdicaoCategoria" class="text-[8px] text-red-500 uppercase tracking-widest">{{ erroEdicaoCategoria }}</p>
              <p class="text-[8px] text-[#5A8BBF] uppercase tracking-widest opacity-80">Atenção: Isso alterará todos os presentes vinculados a esta categoria.</p>
              <div class="flex justify-end gap-2 mt-1">
                <button @click="cancelarEdicaoCategoria" class="text-[9px] uppercase tracking-widest opacity-60 hover:opacity-100 text-[var(--color-casamento-texto)] px-2 py-1 cursor-pointer">Cancelar</button>
                <button @click="salvarEdicaoCategoria(cat)" :disabled="salvandoCategoria" class="text-[9px] uppercase tracking-widest bg-[var(--color-casamento-dourado)] text-white px-3 py-1 rounded-sm hover:opacity-90 disabled:opacity-50 cursor-pointer">Salvar</button>
              </div>
            </div>

          </li>
        </ul>
        <div class="w-full mt-6 flex justify-center">
            <button @click="fecharGerenciadorCategorias" class="px-6 py-3 border border-[var(--color-casamento-texto)] border-opacity-30 text-[var(--color-casamento-texto)] text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-casamento-texto)] hover:text-white transition-all duration-300 cursor-pointer">
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
                 <button @click.prevent="adicionarNovaCategoria" type="button" class="px-4 py-2 bg-[var(--color-casamento-dourado)] text-white text-[8px] tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity cursor-pointer">Salvar</button>
                 <button @click.prevent="cancelarNovaCategoria" type="button" class="px-2 py-2 text-red-400 text-[10px] font-bold hover:opacity-70 transition-opacity cursor-pointer">&times;</button>
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
               <button @click.prevent="adicionarLink" type="button" class="px-2 sm:px-4 py-2 sm:py-3 bg-[#5A8BBF] text-white text-[8px] sm:text-[9px] tracking-[0.1em] sm:tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity shadow-sm flex-shrink-0 whitespace-nowrap cursor-pointer">Adicionar</button>
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

    <!-- Paginação Mobile Embutida -->
    <div class="md:hidden fixed bottom-0 left-0 w-full z-30 transition-transform duration-300" :class="menuAberto || modalPresenteAberto || modalCategoriasAberto ? 'translate-y-full' : 'translate-y-0'">
      
      <div v-if="abaAtual === 'mensagens' && totalPaginasMensagens > 1" class="bg-white/95 border-t border-[var(--color-casamento-dourado)] border-opacity-20 px-4 py-2 flex justify-between items-center text-[9px] tracking-widest uppercase text-[var(--color-casamento-dourado)]">
        <button @click="paginaMensagens--" :disabled="paginaMensagens === 1" class="px-2 py-1 cursor-pointer disabled:opacity-30">Anterior</button>
        <span class="opacity-60 text-[var(--color-casamento-texto)]">{{ paginaMensagens }} / {{ totalPaginasMensagens }}</span>
        <button @click="paginaMensagens++" :disabled="paginaMensagens === totalPaginasMensagens" class="px-2 py-1 cursor-pointer disabled:opacity-30">Próxima</button>
      </div>
      <div v-if="abaAtual === 'presentes' && totalPaginasPresentes > 1" class="bg-white/95 border-t border-[var(--color-casamento-dourado)] border-opacity-20 px-4 py-2 flex justify-between items-center text-[9px] tracking-widest uppercase text-[var(--color-casamento-dourado)]">
        <button @click="paginaPresentes--" :disabled="paginaPresentes === 1" class="px-2 py-1 cursor-pointer disabled:opacity-30">Anterior</button>
        <span class="opacity-60 text-[var(--color-casamento-texto)]">{{ paginaPresentes }} / {{ totalPaginasPresentes }}</span>
        <button @click="paginaPresentes++" :disabled="paginaPresentes === totalPaginasPresentes" class="px-2 py-1 cursor-pointer disabled:opacity-30">Próxima</button>
      </div>

      <div class="bg-white/95 backdrop-blur-xl border-t border-[var(--color-casamento-dourado)] border-opacity-10 shadow-[0_-10px_40px_rgba(197,160,128,0.05)] px-6 pt-3 pb-safe flex justify-between items-center">
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

// Paginação
const paginaMensagens = ref(1);
const paginaPresentes = ref(1);
const itensPorPagina = 10;

watch([filtroMensagens, abaAtual], () => { paginaMensagens.value = 1; });
watch([filtroPresentes, abaAtual], () => { paginaPresentes.value = 1; });

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

const presentesPendentes = computed(() => {
  return presentesPainel.value.filter(p => p.status === 'reservado');
});

const totalArrecadado = computed(() => {
  return presentesPainel.value.reduce((total, p) => {
    if (p.status === 'comprado') {
      return total + (Number(p.valor) || 0);
    }
    return total;
  }, 0);
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

const isExpirado = (dataReservaIso) => {
  if (!dataReservaIso) return false;
  const reserva = new Date(dataReservaIso).getTime();
  const agora = new Date().getTime();
  const expiraEm = reserva + (24 * 60 * 60 * 1000);
  return agora > expiraEm;
};

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
  } else if (filtroPresentes.value === 'reservados') {
    resultado = resultado.filter(p => p.status === 'reservado');
  }

  // Ordenação Master hierárquica
  resultado.sort((a, b) => {
    const pesoA = a.status === 'reservado' ? 0 : (a.status === 'comprado' ? 1 : (a.destaque ? 2 : 3));
    const pesoB = b.status === 'reservado' ? 0 : (b.status === 'comprado' ? 1 : (b.destaque ? 2 : 3));
    if (pesoA !== pesoB) return pesoA - pesoB;
    return 0; 
  });
  
  return resultado;
});

const totalPaginasMensagens = computed(() => Math.ceil(mensagensFiltradas.value.length / itensPorPagina) || 1);
const totalPaginasPresentes = computed(() => Math.ceil(presentesFiltrados.value.length / itensPorPagina) || 1);

const mensagensPaginadas = computed(() => {
  const inicio = (paginaMensagens.value - 1) * itensPorPagina;
  return mensagensFiltradas.value.slice(inicio, inicio + itensPorPagina);
});

const presentesPaginados = computed(() => {
  const inicio = (paginaPresentes.value - 1) * itensPorPagina;
  return presentesFiltrados.value.slice(inicio, inicio + itensPorPagina);
});

const calcularTempoRestante = (dataReservaIso) => {
  if (!dataReservaIso) return '';
  const reserva = new Date(dataReservaIso).getTime();
  const agora = new Date().getTime();
  const expiraEm = reserva + (24 * 60 * 60 * 1000);
  const diff = expiraEm - agora;

  if (diff <= 0) return 'Expirado';

  const horas = Math.floor(diff / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `Expira em ${horas}h e ${minutos}m`;
};

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

const formatarDataCurta = (dataIso) => {
  if (!dataIso) return '';
  return new Intl.DateTimeFormat('pt-BR', { 
    day: '2-digit', month: '2-digit', year: 'numeric'
  }).format(new Date(dataIso));
};

const getStatusMensagem = (presenteId, msgNome) => {
  const presente = presentesPainel.value.find(p => p.id === presenteId);
  if (!presente) return 'cancelado'; 
  
  const nomeMsg = (msgNome || '').toLowerCase().trim();
  const nomeRes = (presente.reservado_por || '').toLowerCase().trim();
  
  // CIRÚRGICO: Checa se a mensagem é do dono da reserva atual
  if (presente.status === 'comprado') {
    return nomeMsg === nomeRes ? 'comprado' : 'expirado';
  }
  if (presente.status === 'reservado') {
    if (nomeMsg === nomeRes) {
      return isExpirado(presente.data_reserva) ? 'expirado' : 'reservado';
    }
    return 'expirado'; 
  }
  return 'cancelado'; 
};

const excluirMensagem = async (id) => {
  if(confirm("Tem certeza que deseja excluir este recado DEFINITIVAMENTE?")) {
    try {
      await deleteDoc(doc(db, "mensagens", id));
      mensagens.value = mensagens.value.filter(m => m.id !== id);
      
      const sobra = Math.ceil(mensagensFiltradas.value.length / itensPorPagina);
      if (paginaMensagens.value > sobra && sobra > 0) {
        paginaMensagens.value = sobra;
      }
    } catch (error) {
      console.error("Erro ao excluir recado:", error);
      alert("Erro ao excluir o recado.");
    }
  }
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

const confirmarReserva = async (item) => {
  if (confirm(`Confirmar o recebimento do PIX de ${item.reservado_por} para o presente "${item.titulo}"?\nIsso atualizará o seu valor arrecadado.`)) {
    try {
      const refDoc = doc(db, "presentes", item.id);
      await updateDoc(refDoc, { status: 'comprado' });
      item.status = 'comprado';
    } catch (error) {
      console.error(error);
      alert("Erro ao confirmar o pagamento.");
    }
  }
};

const cancelarReserva = async (item) => {
  if (confirm(`Cancelar a reserva de "${item.titulo}" feita por ${item.reservado_por}?\nO presente voltará a ficar disponível para outros convidados.`)) {
    try {
      const refDoc = doc(db, "presentes", item.id);
      await updateDoc(refDoc, { 
        status: 'disponivel', 
        reservado_por: '', 
        data_reserva: null 
      });
      item.status = 'disponivel';
      item.reservado_por = '';
      item.data_reserva = null;
    } catch (error) {
      console.error(error);
      alert("Erro ao cancelar a reserva.");
    }
  }
};

const renovarReserva = async (item) => {
  try {
    const refDoc = doc(db, "presentes", item.id);
    const novaData = new Date().toISOString();
    await updateDoc(refDoc, { data_reserva: novaData });
    item.data_reserva = novaData;
    alert("A reserva foi renovada por mais 24 horas!");
  } catch (error) {
    console.error(error);
    alert("Erro ao renovar a reserva.");
  }
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
      
      const sobra = Math.ceil(presentesFiltrados.value.length / itensPorPagina);
      if (paginaPresentes.value > sobra && sobra > 0) {
        paginaPresentes.value = sobra;
      }
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
      const novaData = new Date().toISOString();
      const docRef = await addDoc(collection(db, "presentes"), {
        titulo: tituloPadronizado,
        descricao: descricaoPadronizada,
        valor: valorNumerico,
        categoria: categoriaPadronizada,
        links: novoPresente.value.links,
        icone: iconeFinal, 
        destaque: novoPresente.value.destaque,
        ativo: true,
        status: 'disponivel', 
        reservado_por: '', 
        data_reserva: null, 
        data_criacao: novaData
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
        ativo: true,
        status: 'disponivel',
        reservado_por: '',
        data_reserva: null,
        data_criacao: novaData
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
.animate-float {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0px); filter: drop-shadow(0 2px 2px rgba(0,0,0,0.05)); }
  50% { transform: translateY(-3px); filter: drop-shadow(0 4px 4px rgba(0,0,0,0.1)); }
}

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