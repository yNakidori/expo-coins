import React from "react";
import { Picker } from "@react-native-picker/picker";
import { estilos } from "../styles/styles";

interface Props {
  escolha: string;
  setEscolha: (valor: "cara" | "coroa") => void;
}

export default function EscolhaPicker({ escolha, setEscolha }: Props) {
  return (
    <Picker
      selectedValue={escolha}
      onValueChange={(itemValue) => setEscolha(itemValue as "cara" | "coroa")}
      style={estilos.picker}
    >
      <Picker.Item label="Cara" value="cara" />
      <Picker.Item label="Coroa" value="coroa" />
    </Picker>
  );
}
