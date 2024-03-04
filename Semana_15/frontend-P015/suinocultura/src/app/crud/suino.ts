export interface Suino {
  brincoAnimal: number; // Aceita somente número e é requerido
  brincoPai: number; // Aceita somente número e é requerido
  brincoMae: number; // Aceita somente número e é requerido
  dataNascimento: string; // dia / mês / ano e é requerido
  dataSaida: string; // dia / mês / ano e é requerido
  status: "A vo" | "Vendido" | "Morto"; // Pode ser “A vo”, “Vendido” ou “Morto”
  sexo: "M" | "F"; // Pode ser “M” ou “F”
}