export default {
  name: 'Nome',
  tel: 'Telefone',
  save: 'Save',
  confirm: 'Salvar',
  cancel: 'Cancelar',
  delete: 'Excluir',
  complete: 'Completo',
  loading: 'Carregando...',
  telEmpty: 'Por favor preencha o tel',
  nameEmpty: 'Por favor, preencha o nome',
  nameInvalid: 'Nome malformado',
  confirmDelete: 'Tem certeza de que deseja excluir?',
  telInvalid: 'Número de telefone incorreto',
  calendar: {
    end: 'Fim',
    start: 'Começar',
    title: 'Calendário',
    startEnd: 'Começar/Fim',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: maxRange => `Escolha no máximo ${maxRange} dias`,
  },
};
