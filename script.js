document.getElementById('diagnosticoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores selecionados pelo utilizador
    const cultura = document.getElementById('cultura').value;
    const sintoma = document.getElementById('sintoma').value;

    let diagnostico = "";
    let tratamento = "";

    // Lógica de diagnóstico baseada nos sintomas e culturas
    if (sintoma === "po_avermelhado") {
        diagnostico = "⚠️ Ferrugem (Fungo)";
        tratamento = "A ferrugem asiática ou comum espalha-se rapidamente pelo vento. <strong>Solução sustentável:</strong> Aplicação de Calda Bordalesa (mistura de sulfato de cobre e cal) ou extrato de cavalinha. É importante também garantir um bom espaçamento entre as plantas para circular o ar.";
    
    } else if (sintoma === "po_branco") {
        diagnostico = "⚠️ Oídio (Fungo)";
        tratamento = "Ocorre muito em épocas secas com noites húmidas. <strong>Solução sustentável:</strong> Pulverização com Calda de Leite cru a 10% (1 litro de leite para 9 litros de água). O leite atua como fungicida natural e ajuda a proteger a folha sob a luz do sol.";
    
    } else if (sintoma === "furos") {
        diagnostico = "🐛 Ataque de Lagartas ou Besouros (Praga)";
        tratamento = "Os insetos mastigadores estão a devorar a área foliar. <strong>Solução sustentável:</strong> Aplicação de Óleo de Neem ou Calda de Fumo. Para pequenas hortas, a catação manual ou atração de predadores naturais (como joaninhas e pássaros) é altamente recomendada.";
    
    } else if (sintoma === "amarela_murcha") {
        diagnostico = "🥀 Deficiência Nutricional ou Podridão Radicular";
        tratamento = "Pode ser falta de nitrogénio no solo ou excesso de água a apodrecer as raízes. <strong>Solução sustentável:</strong> Melhorar a drenagem do solo e aplicar adubação orgânica rica, como húmus de minhoca ou compostagem bem curtida. Evitar regar as folhas, focando apenas no solo.";
    } else {
        diagnostico = "Sintoma não reconhecido.";
        tratamento = "Por favor, consulte um engenheiro agrónomo local para uma análise presencial.";
    }

    // Exibe os resultados no ecrã
    document.getElementById('nome-doenca').innerText = diagnostico;
    document.getElementById('mensagem-tratamento').innerHTML = tratamento;

    // Torna a caixa de resultados visível
    document.getElementById('resultado').className = 'resultado-visivel';
});
