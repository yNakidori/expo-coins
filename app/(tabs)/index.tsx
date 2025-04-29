import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import EscolhaPicker from "../../components/comps/EscolhaPicker";
import { estilos } from "../../components/styles/styles";
import { sortear } from "../../components/utils/sortear";

export default function CaraCoroaApp() {
  const [escolhaUsuario, setEscolhaUsuario] = useState("cara");
  const [resultado, setResultado] = useState<"cara" | "coroa" | null>(null);
  const [totalSorteios, setTotalSorteios] = useState(0);
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasMaquina, setVitoriasMaquina] = useState(0);

  const realizarSorteio = () => {
    const resultadoSorteio = sortear();
    setResultado(resultadoSorteio);
    setTotalSorteios((prev) => prev + 1);

    if (resultadoSorteio === escolhaUsuario) {
      setVitoriasUsuario((prev) => prev + 1);
    } else {
      setVitoriasMaquina((prev) => prev + 1);
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo Cara ou Coroa</Text>

      <EscolhaPicker escolha={escolhaUsuario} setEscolha={setEscolhaUsuario} />

      <Button title="Sortear" onPress={realizarSorteio} />

      {resultado && (
        <View style={estilos.resultadoArea}>
          <Image
            source={
              resultado === "cara"
                ? require("../../assets/images/cara.png")
                : require("../../assets/images/coroa.png")
            }
            style={estilos.imagem}
          />
          <Text style={estilos.resultadoTexto}>
            Resultado: {resultado.toUpperCase()}
          </Text>
        </View>
      )}

      <View style={estilos.estatisticas}>
        <Text>Total de Sorteios: {totalSorteios}</Text>
        <Text>Acertos do Usuário: {vitoriasUsuario}</Text>
        <Text>Vitórias da Máquina: {vitoriasMaquina}</Text>
      </View>
    </View>
  );
}
