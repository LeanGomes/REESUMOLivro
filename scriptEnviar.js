function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    // Verificação se tem algum arquivo selecionado.
    if (!file) {
      alert('Por favor, selecione um arquivo.');
      return;
    }
    
    // Verificação do tipo de arquivo.
    if (!(file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      alert('Por favor, selecione um arquivo PDF ou Word.');
      return;
    }
    //back-end
    
    alert('Arquivo enviado com sucesso!');
  }