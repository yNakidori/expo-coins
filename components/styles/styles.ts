import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fafafa",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  picker: {
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
  },
  imagem: {
    width: 150,
    height: 150,
    marginTop: 20,
    alignSelf: "center",
  },
  resultadoArea: {
    alignItems: "center",
    marginVertical: 20,
  },
  resultadoTexto: {
    fontSize: 20,
    marginTop: 10,
  },
  estatisticas: {
    marginTop: 20,
  },
});
