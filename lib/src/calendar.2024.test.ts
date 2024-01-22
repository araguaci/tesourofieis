import { describe, expect, test } from "vitest";
import { Calendar } from "./calendar";
import { printAll } from "./utils";

describe("calendar", () => {
  test("renders entire calendar correctly", () => {
    const calendar = new Calendar(2024);

    expect(printAll(calendar)).toMatchObject({
      "2024-01-01": {
        tempora: [],
        celebration: [
          {
            id: "sancti:01-01:1:w",
            rank: 1,
            title: "Circuncis\u00e3o do Senhor e Oitava do Natal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-02": {
        tempora: [],
        celebration: [
          {
            id: "tempora:Nat2-0:2:w",
            rank: 2,
            title: "Sant\u00edssimo Nome de Jesus",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-03": {
        tempora: [],
        celebration: [],
        commemoration: [],
      },
      "2024-01-04": {
        tempora: [],
        celebration: [],
        commemoration: [],
      },
      "2024-01-05": {
        tempora: [],
        celebration: [],
        commemoration: [],
      },
      "2024-01-06": {
        tempora: [],
        celebration: [
          {
            id: "sancti:01-06:1:w",
            rank: 1,
            title: "Epifania do Senhor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-07": {
        tempora: [
          {
            id: "tempora:Epi1-0:2:w",
            rank: 2,
            title: "Sagrada Fam\u00edlia",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi1-0:2:w",
            rank: 2,
            title: "Sagrada Fam\u00edlia",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-08": {
        tempora: [
          {
            id: "tempora:Epi1-1:4:w",
            rank: 4,
            title: "Segunda-feira da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-01-09": {
        tempora: [
          {
            id: "tempora:Epi1-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-01-10": {
        tempora: [
          {
            id: "tempora:Epi1-3:4:w",
            rank: 4,
            title: "Quarta-feira da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-01-11": {
        tempora: [
          {
            id: "tempora:Epi1-4:4:w",
            rank: 4,
            title: "Quinta-feira da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-01-12": {
        tempora: [
          {
            id: "tempora:Epi1-5:4:w",
            rank: 4,
            title: "Sexta-feira da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-01-13": {
        tempora: [
          {
            id: "tempora:Epi1-6:4:w",
            rank: 4,
            title: "S\u00e1bado da semana ap\u00f3s a Epifania",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-13:2:w",
            rank: 2,
            title: "Comemora\u00e7\u00e3o do Baptismo do Senhor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-14": {
        tempora: [
          {
            id: "tempora:Epi2-0:2:g",
            rank: 2,
            title: "2\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi2-0:2:g",
            rank: 2,
            title: "2\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-01-15": {
        tempora: [
          {
            id: "tempora:Epi2-1:4:g",
            rank: 4,
            title: "Segunda-feira da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-15:3:w",
            rank: 3,
            title: "S. Paulo, 1.\u00ba Eremita, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-16": {
        tempora: [
          {
            id: "tempora:Epi2-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-16:3:r",
            rank: 3,
            title: "S. Marcelo, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-17": {
        tempora: [
          {
            id: "tempora:Epi2-3:4:g",
            rank: 4,
            title: "Quarta-feira da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-17:3:w",
            rank: 3,
            title: "S. Ant\u00f3nio, Abade",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-18": {
        tempora: [
          {
            id: "tempora:Epi2-4:4:g",
            rank: 4,
            title: "Quinta-feira da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:01-18r:4:w",
            rank: 4,
            title: "Santa Prisca, M\u00e1rtir",
            colors: ["w"],
          },
        ],
      },
      "2024-01-19": {
        tempora: [
          {
            id: "tempora:Epi2-5:4:g",
            rank: 4,
            title: "Sexta-feira da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:01-19:4:r",
            rank: 4,
            title: "S.S. M\u00e1rio, Marta, Audifax e Abachum",
            colors: ["r"],
          },
        ],
      },
      "2024-01-20": {
        tempora: [
          {
            id: "tempora:Epi2-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 2\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-20:3:r",
            rank: 3,
            title: "S.S. Fabi\u00e3o, Papa e Sebasti\u00e3o, M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-21": {
        tempora: [
          {
            id: "tempora:Epi3-0:2:g",
            rank: 2,
            title: "3\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi3-0:2:g",
            rank: 2,
            title: "3\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-01-22": {
        tempora: [
          {
            id: "tempora:Epi3-1:4:g",
            rank: 4,
            title: "Segunda-feira da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-22:3:r",
            rank: 3,
            title: "S.S. Vicente e Anast\u00e1cio, M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-23": {
        tempora: [
          {
            id: "tempora:Epi3-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-23:3:w",
            rank: 3,
            title: "S. Raimundo de Penhafort, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-24": {
        tempora: [
          {
            id: "tempora:Epi3-3:4:g",
            rank: 4,
            title: "Quarta-feira da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-24:3:r",
            rank: 3,
            title: "S. Tim\u00f3teo, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-25": {
        tempora: [
          {
            id: "tempora:Epi3-4:4:g",
            rank: 4,
            title: "Quinta-feira da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-25r:3:w",
            rank: 3,
            title: "Convers\u00e3o S. Paulo, Ap\u00f3stolo",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-26": {
        tempora: [
          {
            id: "tempora:Epi3-5:4:g",
            rank: 4,
            title: "Sexta-feira da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-26:3:r",
            rank: 3,
            title: "S. Policarpo, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-27": {
        tempora: [
          {
            id: "tempora:Epi3-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 3\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-27:3:w",
            rank: 3,
            title:
              "S. Jo\u00e3o Cris\u00f3stomo, Confessor, Bispo e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-28": {
        tempora: [
          {
            id: "tempora:Quadp1-0:2:v",
            rank: 2,
            title: "Domingo da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp1-0:2:v",
            rank: 2,
            title: "Domingo da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-01-29": {
        tempora: [
          {
            id: "tempora:Quadp1-1:4:v",
            rank: 4,
            title: "Segunda-feira da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-29:3:w",
            rank: 3,
            title: "S. Francisco de Sales, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-01-30": {
        tempora: [
          {
            id: "tempora:Quadp1-2:4:v",
            rank: 4,
            title: "Ter\u00e7a-feira da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-30:3:r",
            rank: 3,
            title: "S. Martinha, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-01-31": {
        tempora: [
          {
            id: "tempora:Quadp1-3:4:v",
            rank: 4,
            title: "Quarta-feira da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:01-31:3:w",
            rank: 3,
            title: "S. Jo\u00e3o Bosco, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-01": {
        tempora: [
          {
            id: "tempora:Quadp1-4:4:v",
            rank: 4,
            title: "Quinta-feira da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-01:3:r",
            rank: 3,
            title: "S. In\u00e1cio, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-02-02": {
        tempora: [
          {
            id: "tempora:Quadp1-5:4:v",
            rank: 4,
            title: "Sexta-feira da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-02:2:w",
            rank: 2,
            title: "Purifica\u00e7\u00e3o da B. V. Maria",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-03": {
        tempora: [
          {
            id: "tempora:Quadp1-6:4:v",
            rank: 4,
            title: "S\u00e1bado da semana da Septuag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "commune:C10c:0:w",
            rank: 0,
            title: "3º Missa da Virgem Maria – Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:02-03:4:r",
            rank: 4,
            title: "S. Br\u00e1s, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-02-04": {
        tempora: [
          {
            id: "tempora:Quadp2-0:2:v",
            rank: 2,
            title: "Domingo da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp2-0:2:v",
            rank: 2,
            title: "Domingo da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-05": {
        tempora: [
          {
            id: "tempora:Quadp2-1:4:v",
            rank: 4,
            title: "Segunda-feira da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-05:3:r",
            rank: 3,
            title: "S. \u00c1gueda, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-02-06": {
        tempora: [
          {
            id: "tempora:Quadp2-2:4:v",
            rank: 4,
            title: "Ter\u00e7a-feira da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-06:3:w",
            rank: 3,
            title: "S. Tito, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-07": {
        tempora: [
          {
            id: "tempora:Quadp2-3:4:v",
            rank: 4,
            title: "Quarta-feira da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-07:3:w",
            rank: 3,
            title: "S. Romualdo, Abade",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-08": {
        tempora: [
          {
            id: "tempora:Quadp2-4:4:v",
            rank: 4,
            title: "Quinta-feira da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-08:3:w",
            rank: 3,
            title: "S. Jo\u00e3o da Mata, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-09": {
        tempora: [
          {
            id: "tempora:Quadp2-5:4:v",
            rank: 4,
            title: "Sexta-feira da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-09:3:w",
            rank: 3,
            title:
              "S. Cirilo de Alexandria, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-10": {
        tempora: [
          {
            id: "tempora:Quadp2-6:4:v",
            rank: 4,
            title: "S\u00e1bado da semana da Sexag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-10:3:w",
            rank: 3,
            title: "S. Escol\u00e1stica",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-11": {
        tempora: [
          {
            id: "tempora:Quadp3-0:2:v",
            rank: 2,
            title: "Domingo da Quinquag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp3-0:2:v",
            rank: 2,
            title: "Domingo da Quinquag\u00e9sima",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-12": {
        tempora: [
          {
            id: "tempora:Quadp3-1:4:v",
            rank: 4,
            title: "Segunda-feira da semana da Quinquag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-12:3:w",
            rank: 3,
            title: "Os VII Fundadores dos Servitas de B. V. Maria, Confessores",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-02-13": {
        tempora: [
          {
            id: "tempora:Quadp3-2:4:v",
            rank: 4,
            title: "Ter\u00e7a-feira da semana da Quinquag\u00e9sima",
            colors: ["v"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-02-14": {
        tempora: [
          {
            id: "tempora:Quadp3-3:1:v",
            rank: 1,
            title: "Quarta-feira de Cinzas",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp3-3:1:v",
            rank: 1,
            title: "Quarta-feira de Cinzas",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-15": {
        tempora: [
          {
            id: "tempora:Quadp3-4:3:v",
            rank: 3,
            title: "Quinta-feira depois das Cinzas",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp3-4:3:v",
            rank: 3,
            title: "Quinta-feira depois das Cinzas",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:02-15:4:r",
            rank: 4,
            title: "S.S. Faustino e Jovita, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-02-16": {
        tempora: [
          {
            id: "tempora:Quadp3-5:3:v",
            rank: 3,
            title: "Sexta-feira depois das Cinzas",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp3-5:3:v",
            rank: 3,
            title: "Sexta-feira depois das Cinzas",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-17": {
        tempora: [
          {
            id: "tempora:Quadp3-6:3:v",
            rank: 3,
            title: "S\u00e1bado depois das Cinzas",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quadp3-6:3:v",
            rank: 3,
            title: "S\u00e1bado depois das Cinzas",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-18": {
        tempora: [
          {
            id: "tempora:Quad1-0:1:v",
            rank: 1,
            title: "1\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-0:1:v",
            rank: 1,
            title: "1\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-19": {
        tempora: [
          {
            id: "tempora:Quad1-1:3:v",
            rank: 3,
            title: "Segunda-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-1:3:v",
            rank: 3,
            title: "Segunda-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-20": {
        tempora: [
          {
            id: "tempora:Quad1-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-21": {
        tempora: [
          {
            id: "tempora:Quad1-3:2:v",
            rank: 2,
            title:
              "Quarta-feira da 1\u00aa Semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-3:2:v",
            rank: 2,
            title:
              "Quarta-feira da 1\u00aa Semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-22": {
        tempora: [
          {
            id: "tempora:Quad1-4:3:v",
            rank: 3,
            title: "Quinta-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:02-22:2:w",
            rank: 2,
            title: "Cadeira S. Pedro em Anti\u00f3quia",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Quad1-4:3:v",
            rank: 3,
            title: "Quinta-feira da 1\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
      },
      "2024-02-23": {
        tempora: [
          {
            id: "tempora:Quad1-5:2:v",
            rank: 2,
            title:
              "Sexta-feira 1\u00aa semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-5:2:v",
            rank: 2,
            title:
              "Sexta-feira 1\u00aa semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:02-23:3:w",
            rank: 3,
            title: "S. Pedro Dami\u00e3o, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
      },
      "2024-02-24": {
        tempora: [
          {
            id: "tempora:Quad1-6:2:v",
            rank: 2,
            title:
              "S\u00e1bado da 1\u00aa semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad1-6:2:v",
            rank: 2,
            title:
              "S\u00e1bado da 1\u00aa semana da Quaresma, T\u00eamporas da Primavera",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-25": {
        tempora: [
          {
            id: "tempora:Quad2-0:1:v",
            rank: 1,
            title: "2\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-0:1:v",
            rank: 1,
            title: "2\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-26": {
        celebration: [
          {
            colors: ["r"],
            id: "sancti:02-24:2:r",
            rank: 2,
            title: "S. Matias, Apóstolo",
          },
        ],
        tempora: [
          {
            id: "tempora:Quad2-1:3:v",
            rank: 3,
            title: "Segunda-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Quad2-1:3:v",
            rank: 3,
            title: "Segunda-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
      },
      "2024-02-27": {
        tempora: [
          {
            id: "tempora:Quad2-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-02-28": {
        tempora: [
          {
            id: "tempora:Quad2-3:3:v",
            rank: 3,
            title: "Quarta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-3:3:v",
            rank: 3,
            title: "Quarta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:02-27:3:w",
            rank: 3,
            title: "S. Gabriel de Nossa Senhora das Dores",
            colors: ["w"],
          },
        ],
      },
      "2024-02-29": {
        tempora: [
          {
            id: "tempora:Quad2-4:3:v",
            rank: 3,
            title: "Quinta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-4:3:v",
            rank: 3,
            title: "Quinta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-01": {
        tempora: [
          {
            id: "tempora:Quad2-5:3:v",
            rank: 3,
            title: "Sexta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-5:3:v",
            rank: 3,
            title: "Sexta-feira da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-02": {
        tempora: [
          {
            id: "tempora:Quad2-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad2-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 2\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-03": {
        tempora: [
          {
            id: "tempora:Quad3-0:1:v",
            rank: 1,
            title: "3\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-0:1:v",
            rank: 1,
            title: "3\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-04": {
        tempora: [
          {
            id: "tempora:Quad3-1:3:v",
            rank: 3,
            title: "Segunda-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-1:3:v",
            rank: 3,
            title: "Segunda-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-04:3:w",
            rank: 3,
            title: "S. Casimiro, Confessor",
            colors: ["w"],
          },
        ],
      },
      "2024-03-05": {
        tempora: [
          {
            id: "tempora:Quad3-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-06": {
        tempora: [
          {
            id: "tempora:Quad3-3:3:v",
            rank: 3,
            title: "Quarta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-3:3:v",
            rank: 3,
            title: "Quarta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-06:3:r",
            rank: 3,
            title: "S.S. Perp\u00e9tua e Felicidade, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-03-07": {
        tempora: [
          {
            id: "tempora:Quad3-4:3:v",
            rank: 3,
            title: "Quinta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-4:3:v",
            rank: 3,
            title: "Quinta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-07:3:w",
            rank: 3,
            title: "S. Tom\u00e1s de Aquino, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
      },
      "2024-03-08": {
        tempora: [
          {
            id: "tempora:Quad3-5:3:v",
            rank: 3,
            title: "Sexta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-5:3:v",
            rank: 3,
            title: "Sexta-feira da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-08:3:w",
            rank: 3,
            title: "S. Jo\u00e3o de Deus, Confessor",
            colors: ["w"],
          },
        ],
      },
      "2024-03-09": {
        tempora: [
          {
            id: "tempora:Quad3-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad3-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 3\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-09:3:w",
            rank: 3,
            title: "S. Francisca Romana, Vi\u00fava",
            colors: ["w"],
          },
        ],
      },
      "2024-03-10": {
        tempora: [
          {
            id: "tempora:Quad4-0:1:v",
            rank: 1,
            title: "4\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-0:1:v",
            rank: 1,
            title: "4\u00ba Domingo da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-11": {
        tempora: [
          {
            id: "tempora:Quad4-1:3:v",
            rank: 3,
            title: "Segunda-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-1:3:v",
            rank: 3,
            title: "Segunda-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-12": {
        tempora: [
          {
            id: "tempora:Quad4-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-12:3:w",
            rank: 3,
            title: "S. Greg\u00f3rio, Papa, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
      },
      "2024-03-13": {
        tempora: [
          {
            id: "tempora:Quad4-3:3:v",
            rank: 3,
            title: "Quarta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-3:3:v",
            rank: 3,
            title: "Quarta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-14": {
        tempora: [
          {
            id: "tempora:Quad4-4:3:v",
            rank: 3,
            title: "Quinta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-4:3:v",
            rank: 3,
            title: "Quinta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-15": {
        tempora: [
          {
            id: "tempora:Quad4-5:3:v",
            rank: 3,
            title: "Sexta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-5:3:v",
            rank: 3,
            title: "Sexta-feira da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-16": {
        tempora: [
          {
            id: "tempora:Quad4-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad4-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 4\u00aa semana da Quaresma",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-17": {
        tempora: [
          {
            id: "tempora:Quad5-0:1:v",
            rank: 1,
            title: "Domingo da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-0:1:v",
            rank: 1,
            title: "Domingo da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-18": {
        tempora: [
          {
            id: "tempora:Quad5-1:3:v",
            rank: 3,
            title: "Segunda-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-1:3:v",
            rank: 3,
            title: "Segunda-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-18:3:w",
            rank: 3,
            title:
              "S. Cirilo de Jerusal\u00e9m, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
      },
      "2024-03-19": {
        tempora: [
          {
            id: "tempora:Quad5-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:03-19:1:w",
            rank: 1,
            title: "S. Jos\u00e9, Esposo de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Quad5-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
      },
      "2024-03-20": {
        tempora: [
          {
            id: "tempora:Quad5-3:3:v",
            rank: 3,
            title: "Quarta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-3:3:v",
            rank: 3,
            title: "Quarta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-21": {
        tempora: [
          {
            id: "tempora:Quad5-4:3:v",
            rank: 3,
            title: "Quinta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-4:3:v",
            rank: 3,
            title: "Quinta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:03-21:3:w",
            rank: 3,
            title: "S. Bento, Abade",
            colors: ["w"],
          },
        ],
      },
      "2024-03-22": {
        tempora: [
          {
            id: "tempora:Quad5-5Feria:3:v",
            rank: 3,
            title: "Sexta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-5Feria:3:v",
            rank: 3,
            title: "Sexta-feira da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-23": {
        tempora: [
          {
            id: "tempora:Quad5-6:3:v",
            rank: 3,
            title: "S\u00e1bado da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad5-6:3:v",
            rank: 3,
            title: "S\u00e1bado da semana da Paix\u00e3o",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-24": {
        tempora: [
          {
            id: "tempora:Quad6-0r:1:rv",
            rank: 1,
            title: "Domingo de Ramos",
            colors: ["r", "v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-0r:1:rv",
            rank: 1,
            title: "Domingo de Ramos",
            colors: ["r", "v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-25": {
        tempora: [
          {
            id: "tempora:Quad6-1:1:v",
            rank: 1,
            title: "Segunda-feira Santa",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-1:1:v",
            rank: 1,
            title: "Segunda-feira Santa",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-26": {
        tempora: [
          {
            id: "tempora:Quad6-2:1:v",
            rank: 1,
            title: "Ter\u00e7a-feira Santa",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-2:1:v",
            rank: 1,
            title: "Ter\u00e7a-feira Santa",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-27": {
        tempora: [
          {
            id: "tempora:Quad6-3:1:v",
            rank: 1,
            title: "Quarta-feira Santa",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-3:1:v",
            rank: 1,
            title: "Quarta-feira Santa",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-28": {
        tempora: [
          {
            id: "tempora:Quad6-4r:1:w",
            rank: 1,
            title: "Quinta-feira Santa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-4r:1:w",
            rank: 1,
            title: "Quinta-feira Santa",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-03-29": {
        tempora: [
          {
            id: "tempora:Quad6-5r:1:bv",
            rank: 1,
            title: "Sexta-feira Santa",
            colors: ["b", "v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-5r:1:bv",
            rank: 1,
            title: "Sexta-feira Santa",
            colors: ["b", "v"],
          },
        ],
        commemoration: [],
      },
      "2024-03-30": {
        tempora: [
          {
            id: "tempora:Quad6-6r:1:vw",
            rank: 1,
            title: "S\u00e1bado Santo",
            colors: ["v", "w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Quad6-6r:1:vw",
            rank: 1,
            title: "S\u00e1bado Santo",
            colors: ["v", "w"],
          },
        ],
        commemoration: [],
      },
      "2024-03-31": {
        tempora: [
          {
            id: "tempora:Pasc0-0:1:w",
            rank: 1,
            title: "Domingo da Ressurrei\u00e7\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-0:1:w",
            rank: 1,
            title: "Domingo da Ressurrei\u00e7\u00e3o",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-01": {
        tempora: [
          {
            id: "tempora:Pasc0-1:1:w",
            rank: 1,
            title: "Segunda-feira Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-1:1:w",
            rank: 1,
            title: "Segunda-feira Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-02": {
        tempora: [
          {
            id: "tempora:Pasc0-2:1:w",
            rank: 1,
            title: "Ter\u00e7a-feira Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-2:1:w",
            rank: 1,
            title: "Ter\u00e7a-feira Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-03": {
        tempora: [
          {
            id: "tempora:Pasc0-3:1:w",
            rank: 1,
            title: "Quarta-feira Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-3:1:w",
            rank: 1,
            title: "Quarta-feira Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-04": {
        tempora: [
          {
            id: "tempora:Pasc0-4:1:w",
            rank: 1,
            title: "Quinta-feira Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-4:1:w",
            rank: 1,
            title: "Quinta-feira Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-05": {
        tempora: [
          {
            id: "tempora:Pasc0-5:1:w",
            rank: 1,
            title: "Sexta-feira Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-5:1:w",
            rank: 1,
            title: "Sexta-feira Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-06": {
        tempora: [
          {
            id: "tempora:Pasc0-6:1:w",
            rank: 1,
            title: "S\u00e1bado Pascal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc0-6:1:w",
            rank: 1,
            title: "S\u00e1bado Pascal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-07": {
        tempora: [
          {
            id: "tempora:Pasc1-0:1:w",
            rank: 1,
            title: "Domingo in Albis",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc1-0:1:w",
            rank: 1,
            title: "Domingo in Albis",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-08": {
        tempora: [
          {
            id: "tempora:Pasc1-1:4:w",
            rank: 4,
            title: "Segunda-feira da 1\u00ba semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:03-25:1:w",
            rank: 1,
            title: "Anuncia\u00e7\u00e3o de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-09": {
        tempora: [
          {
            id: "tempora:Pasc1-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da 1\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-10": {
        tempora: [
          {
            id: "tempora:Pasc1-3:4:w",
            rank: 4,
            title: "Quarta-feira da 1\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-11": {
        tempora: [
          {
            id: "tempora:Pasc1-4:4:w",
            rank: 4,
            title: "Quinta-feira da 1\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-11:3:w",
            rank: 3,
            title: "S. Le\u00e3o I, Papa, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-12": {
        tempora: [
          {
            id: "tempora:Pasc1-5:4:w",
            rank: 4,
            title: "Sexta-feira da 1\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-13": {
        tempora: [
          {
            id: "tempora:Pasc1-6:4:w",
            rank: 4,
            title: "S\u00e1bado da 1\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-13:3:r",
            rank: 3,
            title: "S. Hermenegildo, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-14": {
        tempora: [
          {
            id: "tempora:Pasc2-0:2:w",
            rank: 2,
            title: "2\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc2-0:2:w",
            rank: 2,
            title: "2\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-15": {
        tempora: [
          {
            id: "tempora:Pasc2-1:4:w",
            rank: 4,
            title: "Segunda-feira da 2\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-16": {
        tempora: [
          {
            id: "tempora:Pasc2-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da 2\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-17": {
        tempora: [
          {
            id: "tempora:Pasc2-3:2:w",
            rank: 2,
            title: "S. Jos\u00e9, Padroeiro da Santa Igreja e dos Moribundos",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc2-3:2:w",
            rank: 2,
            title: "S. Jos\u00e9, Padroeiro da Santa Igreja e dos Moribundos",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:04-17:4:r",
            rank: 4,
            title: "S. Aniceto, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-04-18": {
        tempora: [
          {
            id: "tempora:Pasc2-4Feria:4:w",
            rank: 4,
            title: "Quinta-feira da 2\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-19": {
        tempora: [
          {
            id: "tempora:Pasc2-5Feria:4:w",
            rank: 4,
            title: "Sexta-feira da 2\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-04-20": {
        tempora: [
          {
            id: "tempora:Pasc2-6Feria:4:w",
            rank: 4,
            title: "S\u00e1bado da 2\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "commune:C10Pasc:0:w",
            rank: 0,
            title: "4 Missa da Virgem Maria – Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-21": {
        tempora: [
          {
            id: "tempora:Pasc3-0r:2:w",
            rank: 2,
            title: "3\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc3-0r:2:w",
            rank: 2,
            title: "3\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-22": {
        tempora: [
          {
            id: "tempora:Pasc3-1Feria:4:w",
            rank: 4,
            title: "Segunda-feira da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-22:3:r",
            rank: 3,
            title: "S.S. Sotero e Caio, Papas e M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-23": {
        tempora: [
          {
            id: "tempora:Pasc3-2Feria:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:04-23:4:r",
            rank: 4,
            title: "S. Jorge, M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-04-24": {
        tempora: [
          {
            id: "tempora:Pasc3-3Feria:4:w",
            rank: 4,
            title: "Quarta-feira da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-24:3:r",
            rank: 3,
            title: "S. Fiel de Sigmaringen, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-25": {
        tempora: [
          {
            id: "tempora:Pasc3-4:4:w",
            rank: 4,
            title: "Quinta-feira da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-25:2:r",
            rank: 2,
            title: "S. Marcos, Evangelista",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-26": {
        tempora: [
          {
            id: "tempora:Pasc3-5:4:w",
            rank: 4,
            title: "Sexta-feira da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-26:3:r",
            rank: 3,
            title: "S.S. Cleto e Marcelino, Papas e M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-27": {
        tempora: [
          {
            id: "tempora:Pasc3-6:4:w",
            rank: 4,
            title: "S\u00e1bado da 3\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-27:3:w",
            rank: 3,
            title: "S. Pedro Can\u00edsio, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-28": {
        tempora: [
          {
            id: "tempora:Pasc4-0:2:w",
            rank: 2,
            title: "4\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc4-0:2:w",
            rank: 2,
            title: "4\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-04-29": {
        tempora: [
          {
            id: "tempora:Pasc4-1:4:w",
            rank: 4,
            title: "Segunda-feira da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-29:3:r",
            rank: 3,
            title: "S. Pedro de Verona, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-04-30": {
        tempora: [
          {
            id: "tempora:Pasc4-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:04-30:3:w",
            rank: 3,
            title: "S. Catarina de Sena, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-01": {
        tempora: [
          {
            id: "tempora:Pasc4-3:4:w",
            rank: 4,
            title: "Quarta-feira da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-01:2:r",
            rank: 2,
            title: "S. Filipe e S. Tiago, Ap\u00f3stolos",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-02": {
        tempora: [
          {
            id: "tempora:Pasc4-4:4:w",
            rank: 4,
            title: "Quinta-feira da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-02:3:w",
            rank: 3,
            title: "S. Atan\u00e1sio, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-03": {
        tempora: [
          {
            id: "tempora:Pasc4-5:4:w",
            rank: 4,
            title: "Sexta-feira da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-03:2:r",
            rank: 2,
            title: "A Inven\u00e7\u00e3o da Santa Cruz",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-04": {
        tempora: [
          {
            id: "tempora:Pasc4-6:4:w",
            rank: 4,
            title: "S\u00e1bado da 4\u00aa semana depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-04:3:w",
            rank: 3,
            title: "S. M\u00f3nica, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-05": {
        tempora: [
          {
            id: "tempora:Pasc5-0:2:w",
            rank: 2,
            title: "5\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc5-0:2:w",
            rank: 2,
            title: "5\u00ba Domingo depois da P\u00e1scoa",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-06": {
        tempora: [
          {
            id: "tempora:Pasc5-1:4:v",
            rank: 4,
            title: "Segunda-feira das Roga\u00e7\u00f5es",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-06:3:r",
            rank: 3,
            title: "S. Jo\u00e3o ante a Porta Latina",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-07": {
        tempora: [
          {
            id: "tempora:Pasc5-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira das Roga\u00e7\u00f5es",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-07:3:r",
            rank: 3,
            title: "S. Estanislau, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-08": {
        tempora: [
          {
            id: "tempora:Pasc5-3:2:w",
            rank: 2,
            title: "Vig\u00edlia da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc5-3:2:w",
            rank: 2,
            title: "Vig\u00edlia da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:05-08:2:w",
            rank: 2,
            title: "Apari\u00e7\u00e3o de S. Miguel, Arcanjo",
            colors: ["w"],
          },
        ],
      },
      "2024-05-09": {
        tempora: [
          {
            id: "tempora:Pasc5-4:1:w",
            rank: 1,
            title: "Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc5-4:1:w",
            rank: 1,
            title: "Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-10": {
        tempora: [
          {
            id: "tempora:Pasc5-5:4:w",
            rank: 4,
            title: "Sexta-feira depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-10:3:w",
            rank: 3,
            title: "S. Antonino, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-11": {
        tempora: [
          {
            id: "tempora:Pasc5-6:4:w",
            rank: 4,
            title: "S\u00e1bado depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "commune:C10Pasc:0:w",
            rank: 0,
            title: "4 Missa da Virgem Maria – Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-12": {
        tempora: [
          {
            id: "tempora:Pasc6-0:2:w",
            rank: 2,
            title: "Domingo depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc6-0:2:w",
            rank: 2,
            title: "Domingo depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-13": {
        tempora: [
          {
            id: "tempora:Pasc6-1:4:w",
            rank: 4,
            title: "Segunda-feira da semana depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-13:3:w",
            rank: 3,
            title: "S. Roberto Belarmino, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-14": {
        tempora: [
          {
            id: "tempora:Pasc6-2:4:w",
            rank: 4,
            title: "Ter\u00e7a-feira da semana depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:05-14:4:r",
            rank: 4,
            title: "S. Bonif\u00e1cio, M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-05-15": {
        tempora: [
          {
            id: "tempora:Pasc6-3:4:w",
            rank: 4,
            title: "Quarta-feira da semana depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-15:3:w",
            rank: 3,
            title: "S. Jo\u00e3o Baptista de la Salle, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-16": {
        tempora: [
          {
            id: "tempora:Pasc6-4r:4:w",
            rank: 4,
            title: "Quinta-feira da semana depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-05-17": {
        tempora: [
          {
            id: "tempora:Pasc6-5:4:w",
            rank: 4,
            title: "Sexta-feira da semana depois da Ascens\u00e3o",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-17:3:w",
            rank: 3,
            title: "S. Pascoal Bail\u00e3o, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-18": {
        tempora: [
          {
            id: "tempora:Pasc6-6:1:r",
            rank: 1,
            title: "Vig\u00edlia de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc6-6:1:r",
            rank: 1,
            title: "Vig\u00edlia de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-19": {
        tempora: [
          {
            id: "tempora:Pasc7-0:1:r",
            rank: 1,
            title: "Domingo de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-0:1:r",
            rank: 1,
            title: "Domingo de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-20": {
        tempora: [
          {
            id: "tempora:Pasc7-1:1:r",
            rank: 1,
            title: "Segunda-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-1:1:r",
            rank: 1,
            title: "Segunda-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-21": {
        tempora: [
          {
            id: "tempora:Pasc7-2:1:r",
            rank: 1,
            title: "Ter\u00e7a-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-2:1:r",
            rank: 1,
            title: "Ter\u00e7a-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-22": {
        tempora: [
          {
            id: "tempora:Pasc7-3:1:r",
            rank: 1,
            title: "Quarta-feira das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-3:1:r",
            rank: 1,
            title: "Quarta-feira das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-23": {
        tempora: [
          {
            id: "tempora:Pasc7-4:1:r",
            rank: 1,
            title: "Quinta-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-4:1:r",
            rank: 1,
            title: "Quinta-feira na semana da oitava de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-24": {
        tempora: [
          {
            id: "tempora:Pasc7-5:1:r",
            rank: 1,
            title: "Sexta-feira das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-5:1:r",
            rank: 1,
            title: "Sexta-feira das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-25": {
        tempora: [
          {
            id: "tempora:Pasc7-6:1:r",
            rank: 1,
            title: "S\u00e1bado das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pasc7-6:1:r",
            rank: 1,
            title: "S\u00e1bado das T\u00eamporas de Pentecostes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-05-26": {
        tempora: [
          {
            id: "tempora:Pent01-0r:1:w",
            rank: 1,
            title: "Domingo da Sant\u00edssima Trindade",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent01-0r:1:w",
            rank: 1,
            title: "Domingo da Sant\u00edssima Trindade",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-27": {
        tempora: [
          {
            id: "tempora:Pent01-1:4:g",
            rank: 4,
            title:
              "Segunda-feira depois 1\u00aa semana da oitava de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-27:3:w",
            rank: 3,
            title: "S. Beda, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-28": {
        tempora: [
          {
            id: "tempora:Pent01-2:4:g",
            rank: 4,
            title:
              "Ter\u00e7a-feira depois 1\u00aa semana da oitava de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-28:3:w",
            rank: 3,
            title: "S. Agostinho de Cantu\u00e1ria, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-29": {
        tempora: [
          {
            id: "tempora:Pent01-3:4:g",
            rank: 4,
            title:
              "Quarta-feira depois 1\u00aa semana da oitava de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-29:3:w",
            rank: 3,
            title: "S. Maria Madalena de Pazzi, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-30": {
        tempora: [
          {
            id: "tempora:Pent01-4:1:w",
            rank: 1,
            title: "Sant\u00edssimo Corpo de Cristo",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent01-4:1:w",
            rank: 1,
            title: "Sant\u00edssimo Corpo de Cristo",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-05-31": {
        tempora: [
          {
            id: "tempora:Pent01-5:4:g",
            rank: 4,
            title: "Sexta-feira depois 1\u00aa semana da oitava de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:05-31:2:w",
            rank: 2,
            title: "Nossa Senhora, Rainha",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-01": {
        tempora: [
          {
            id: "tempora:Pent01-6:4:g",
            rank: 4,
            title: "S\u00e1bado depois 1\u00aa semana da oitava de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-01:3:w",
            rank: 3,
            title: "Santa Angela Mericia",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-02": {
        tempora: [
          {
            id: "tempora:Pent02-0r:2:g",
            rank: 2,
            title: "2\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent02-0r:2:g",
            rank: 2,
            title: "2\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-06-03": {
        tempora: [
          {
            id: "tempora:Pent02-1:4:g",
            rank: 4,
            title: "Segunda-feira da 2\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-06-04": {
        tempora: [
          {
            id: "tempora:Pent02-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 2\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-04:3:w",
            rank: 3,
            title: "S. Francisco Caracc\u00edolo, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-05": {
        tempora: [
          {
            id: "tempora:Pent02-3:4:g",
            rank: 4,
            title: "Quarta-feira da 2\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-05:3:r",
            rank: 3,
            title: "S. Bonif\u00e1cio, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-06": {
        tempora: [
          {
            id: "tempora:Pent02-4:4:g",
            rank: 4,
            title: "Quinta-feira da 2\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-06:3:w",
            rank: 3,
            title: "S. Norberto, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-07": {
        tempora: [
          {
            id: "tempora:Pent02-5:1:w",
            rank: 1,
            title: "Sant\u00edssimo Cora\u00e7\u00e3o de Jesus",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent02-5:1:w",
            rank: 1,
            title: "Sant\u00edssimo Cora\u00e7\u00e3o de Jesus",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-08": {
        tempora: [
          {
            id: "tempora:Pent02-6Feria:4:g",
            rank: 4,
            title: "S\u00e1bado da 2\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-09": {
        tempora: [
          {
            id: "tempora:Pent03-0r:2:g",
            rank: 2,
            title: "3\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent03-0r:2:g",
            rank: 2,
            title: "3\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-06-10": {
        tempora: [
          {
            id: "tempora:Pent03-1Feria:4:g",
            rank: 4,
            title: "Segunda-feira da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-10:3:w",
            rank: 3,
            title: "Santa Margarida, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-11": {
        tempora: [
          {
            id: "tempora:Pent03-2Feria:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-11:3:r",
            rank: 3,
            title: "S. Barnab\u00e9, Ap\u00f3stolo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-12": {
        tempora: [
          {
            id: "tempora:Pent03-3Feria:4:g",
            rank: 4,
            title: "Quarta-feira da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-12:3:r",
            rank: 3,
            title: "S. Jo\u00e3o de Facundo, Confessor",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-13": {
        tempora: [
          {
            id: "tempora:Pent03-4Feria:4:g",
            rank: 4,
            title: "Quinta-feira da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-13:3:w",
            rank: 3,
            title: "S. Ant\u00f3nio de Lisboa, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-14": {
        tempora: [
          {
            id: "tempora:Pent03-5Feria:4:g",
            rank: 4,
            title: "Sexta-feira da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-14:3:w",
            rank: 3,
            title: "S. Bas\u00edlio Magno, Confessor, Bispo e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-15": {
        tempora: [
          {
            id: "tempora:Pent03-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 3\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-15:3:w",
            rank: 3,
            title: "S.S. Vito, Modesto e Cresc\u00eancia, M\u00e1rtires",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-16": {
        tempora: [
          {
            id: "tempora:Pent04-0:2:g",
            rank: 2,
            title: "4\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent04-0:2:g",
            rank: 2,
            title: "4\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-06-17": {
        tempora: [
          {
            id: "tempora:Pent04-1:4:g",
            rank: 4,
            title: "Segunda-feira da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-17r:3:w",
            rank: 3,
            title: "S. Greg\u00f3rio Barbarigo, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-18": {
        tempora: [
          {
            id: "tempora:Pent04-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-18:3:r",
            rank: 3,
            title: "S. Efr\u00e9m, Di\u00e1cono, Confessor e Doutor da Igreja",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-19": {
        tempora: [
          {
            id: "tempora:Pent04-3:4:g",
            rank: 4,
            title: "Quarta-feira da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-19:3:r",
            rank: 3,
            title: "S. Juliana Falconi\u00e9ri, Virgem",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-20": {
        tempora: [
          {
            id: "tempora:Pent04-4:4:g",
            rank: 4,
            title: "Quinta-feira da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:06-20:4:r",
            rank: 4,
            title: "S. Silvestre, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-06-21": {
        tempora: [
          {
            id: "tempora:Pent04-5:4:g",
            rank: 4,
            title: "Sexta-feira da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-21:3:w",
            rank: 3,
            title: "S. Lu\u00eds Gonzaga, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-22": {
        tempora: [
          {
            id: "tempora:Pent04-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 4\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-22:3:w",
            rank: 3,
            title: "S. Paulino, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-23": {
        tempora: [
          {
            id: "tempora:Pent05-0:2:g",
            rank: 2,
            title: "5\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-23:2:v",
            rank: 2,
            title: "Vig\u00edlia da Natividade de S. J\u00e3o Baptista",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Pent05-0:2:g",
            rank: 2,
            title: "5\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
      },
      "2024-06-24": {
        tempora: [
          {
            id: "tempora:Pent05-1:4:g",
            rank: 4,
            title: "Segunda-feira da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-24:1:w",
            rank: 1,
            title: "Nascimento de S. Jo\u00e3o Baptista",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-25": {
        tempora: [
          {
            id: "tempora:Pent05-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-25:3:w",
            rank: 3,
            title: "S. Guilherme, Abade",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-06-26": {
        tempora: [
          {
            id: "tempora:Pent05-3:4:g",
            rank: 4,
            title: "Quarta-feira da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-26r:3:r",
            rank: 3,
            title: "S.S. Jo\u00e3o e Paulo, M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-27": {
        tempora: [
          {
            id: "tempora:Pent05-4:4:g",
            rank: 4,
            title: "Quinta-feira da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-06-28": {
        tempora: [
          {
            id: "tempora:Pent05-5:4:g",
            rank: 4,
            title: "Sexta-feira da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-28:3:r",
            rank: 3,
            title: "S\u00e3o Irineu, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-29": {
        tempora: [
          {
            id: "tempora:Pent05-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 5\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:06-29:1:r",
            rank: 1,
            title: "S. Pedro e S. Paulo, Ap\u00f3stolos",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-06-30": {
        tempora: [
          {
            id: "tempora:Pent06-0:2:g",
            rank: 2,
            title: "6\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent06-0:2:g",
            rank: 2,
            title: "6\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-07-01": {
        tempora: [
          {
            id: "tempora:Pent06-1:4:g",
            rank: 4,
            title: "Segunda-feira da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-01:1:r",
            rank: 1,
            title: "Precios\u00edssimo Sangue de Nosso Senhor Jesus Cristo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-02": {
        tempora: [
          {
            id: "tempora:Pent06-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-02:2:w",
            rank: 2,
            title: "Visita\u00e7\u00e3o de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-03": {
        tempora: [
          {
            id: "tempora:Pent06-3:4:g",
            rank: 4,
            title: "Quarta-feira da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-03r:3:r",
            rank: 3,
            title: "S. Irineus, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-04": {
        tempora: [
          {
            id: "tempora:Pent06-4:4:g",
            rank: 4,
            title: "Quinta-feira da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-07-05": {
        tempora: [
          {
            id: "tempora:Pent06-5:4:g",
            rank: 4,
            title: "Sexta-feira da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-05:3:w",
            rank: 3,
            title: "S. Ant\u00f3nio Maria Zacarias, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-06": {
        tempora: [
          {
            id: "tempora:Pent06-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 6\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-07": {
        tempora: [
          {
            id: "tempora:Pent07-0:2:g",
            rank: 2,
            title: "7\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent07-0:2:g",
            rank: 2,
            title: "7\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-07-08": {
        tempora: [
          {
            id: "tempora:Pent07-1:4:g",
            rank: 4,
            title: "Segunda-feira da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-08:3:w",
            rank: 3,
            title: "S. Isabel, Rainha de Portugal e Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-09": {
        tempora: [
          {
            id: "tempora:Pent07-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-07-10": {
        tempora: [
          {
            id: "tempora:Pent07-3:4:g",
            rank: 4,
            title: "Quarta-feira da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-10:3:r",
            rank: 3,
            title:
              "Os Sete Irm\u00e3os M\u00e1rtires e S.S. Rufina e Secunda, Virgens e M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-11": {
        tempora: [
          {
            id: "tempora:Pent07-4:4:g",
            rank: 4,
            title: "Quinta-feira da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:07-11:4:r",
            rank: 4,
            title: "S. Pio I, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-07-12": {
        tempora: [
          {
            id: "tempora:Pent07-5:4:g",
            rank: 4,
            title: "Sexta-feira da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-12:3:r",
            rank: 3,
            title: "S. Jo\u00e3o Gualberto, Abade",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-13": {
        tempora: [
          {
            id: "tempora:Pent07-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 7\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-14": {
        tempora: [
          {
            id: "tempora:Pent08-0:2:g",
            rank: 2,
            title: "8\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent08-0:2:g",
            rank: 2,
            title: "8\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-07-15": {
        tempora: [
          {
            id: "tempora:Pent08-1:4:g",
            rank: 4,
            title: "Segunda-feira da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-15:3:w",
            rank: 3,
            title: "S. Henrique, Imperador e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-16": {
        tempora: [
          {
            id: "tempora:Pent08-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:07-16:4:w",
            rank: 4,
            title: "B. V. Maria do Monte Carmelo",
            colors: ["w"],
          },
        ],
      },
      "2024-07-17": {
        tempora: [
          {
            id: "tempora:Pent08-3:4:g",
            rank: 4,
            title: "Quarta-feira da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:07-17:4:w",
            rank: 4,
            title: "S. Aleixo, Confessor",
            colors: ["w"],
          },
        ],
      },
      "2024-07-18": {
        tempora: [
          {
            id: "tempora:Pent08-4:4:g",
            rank: 4,
            title: "Quinta-feira da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-18:3:r",
            rank: 3,
            title: "S. Camilo de Lelis",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-19": {
        tempora: [
          {
            id: "tempora:Pent08-5:4:g",
            rank: 4,
            title: "Sexta-feira da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-19:3:w",
            rank: 3,
            title: "S. Vicente de Paulo, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-20": {
        tempora: [
          {
            id: "tempora:Pent08-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 8\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-20:3:r",
            rank: 3,
            title: "S. Jer\u00f3nimo Emiliano",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-21": {
        tempora: [
          {
            id: "tempora:Pent09-0:2:g",
            rank: 2,
            title: "9\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent09-0:2:g",
            rank: 2,
            title: "9\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-07-22": {
        tempora: [
          {
            id: "tempora:Pent09-1:4:g",
            rank: 4,
            title: "Segunda-feira da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-22:3:w",
            rank: 3,
            title: "S. Maria Madalena, Penitente",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-23": {
        tempora: [
          {
            id: "tempora:Pent09-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-23:3:w",
            rank: 3,
            title: "S. Apolin\u00e1rio, Bispo e M\u00e1rtir",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-24": {
        tempora: [
          {
            id: "tempora:Pent09-3:4:g",
            rank: 4,
            title: "Quarta-feira da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:07-24r:4:r",
            rank: 4,
            title: "Santa Cristina",
            colors: ["r"],
          },
        ],
      },
      "2024-07-25": {
        tempora: [
          {
            id: "tempora:Pent09-4:4:g",
            rank: 4,
            title: "Quinta-feira da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-25:2:r",
            rank: 2,
            title: "S. Tiago, Ap\u00f3stolo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-26": {
        tempora: [
          {
            id: "tempora:Pent09-5:4:g",
            rank: 4,
            title: "Sexta-feira da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-26:2:w",
            rank: 2,
            title: "S. Ana, M\u00e3e de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-07-27": {
        tempora: [
          {
            id: "tempora:Pent09-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 9\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:07-27:4:r",
            rank: 4,
            title: "S. Pantale\u00e3o, M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-07-28": {
        tempora: [
          {
            id: "tempora:Pent10-0:2:g",
            rank: 2,
            title: "10\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent10-0:2:g",
            rank: 2,
            title: "10\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-07-29": {
        tempora: [
          {
            id: "tempora:Pent10-1:4:g",
            rank: 4,
            title: "Segunda-feira da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-29:3:r",
            rank: 3,
            title: "S. Marta, Virgem",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-07-30": {
        tempora: [
          {
            id: "tempora:Pent10-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:07-30:4:r",
            rank: 4,
            title: "S.S. \u00c1bdon e Senen, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-07-31": {
        tempora: [
          {
            id: "tempora:Pent10-3:4:g",
            rank: 4,
            title: "Quarta-feira da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:07-31:3:w",
            rank: 3,
            title: "S. In\u00e1cio de Loiola, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-01": {
        tempora: [
          {
            id: "tempora:Pent10-4:4:g",
            rank: 4,
            title: "Quinta-feira da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:08-01r:4:r",
            rank: 4,
            title: "Os Santos M\u00e1rtires Macabeus",
            colors: ["r"],
          },
        ],
      },
      "2024-08-02": {
        tempora: [
          {
            id: "tempora:Pent10-5:4:g",
            rank: 4,
            title: "Sexta-feira da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-02:3:r",
            rank: 3,
            title:
              "S. Afonso de Lig\u00f3rio, Bispo, Confessor e Doutor da Igreja",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-03": {
        tempora: [
          {
            id: "tempora:Pent10-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 10\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-04": {
        tempora: [
          {
            id: "tempora:Pent11-0:2:g",
            rank: 2,
            title: "11\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent11-0:2:g",
            rank: 2,
            title: "11\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-08-05": {
        tempora: [
          {
            id: "tempora:Pent11-1:4:g",
            rank: 4,
            title: "Segunda-feira da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-05:3:w",
            rank: 3,
            title: "Dedica\u00e7\u00e3o da Igreja de Nossa Senhora das Neves",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-06": {
        tempora: [
          {
            id: "tempora:Pent11-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-06:2:r",
            rank: 2,
            title: "Transfigura\u00e7\u00e3o de Nosso Senhor Jesus Cristo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-07": {
        tempora: [
          {
            id: "tempora:Pent11-3:4:g",
            rank: 4,
            title: "Quarta-feira da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-07:3:r",
            rank: 3,
            title: "S. Caetano, Confessor",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-08": {
        tempora: [
          {
            id: "tempora:Pent11-4:4:g",
            rank: 4,
            title: "Quinta-feira da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-08r:3:r",
            rank: 3,
            title: "S. Jo\u00e3o Maria Vianney, Confessor",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-09": {
        tempora: [
          {
            id: "tempora:Pent11-5:4:g",
            rank: 4,
            title: "Sexta-feira da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-09t:3:r",
            rank: 3,
            title: "Vig\u00edlia de S. Louren\u00e7o, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-10": {
        tempora: [
          {
            id: "tempora:Pent11-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 11\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-10:2:r",
            rank: 2,
            title: "S. Louren\u00e7o, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-11": {
        tempora: [
          {
            id: "tempora:Pent12-0:2:g",
            rank: 2,
            title: "12\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent12-0:2:g",
            rank: 2,
            title: "12\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-08-12": {
        tempora: [
          {
            id: "tempora:Pent12-1:4:g",
            rank: 4,
            title: "Segunda-feira da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-12:3:w",
            rank: 3,
            title: "S. Clara, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-13": {
        tempora: [
          {
            id: "tempora:Pent12-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:08-13:4:r",
            rank: 4,
            title: "S.S. Hip\u00f3lito e Cassiano, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-08-14": {
        tempora: [
          {
            id: "tempora:Pent12-3:4:g",
            rank: 4,
            title: "Quarta-feira da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-14:2:w",
            rank: 2,
            title: "Vig\u00edlia da Assun\u00e7\u00e3o de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-15": {
        tempora: [
          {
            id: "tempora:Pent12-4:4:g",
            rank: 4,
            title: "Quinta-feira da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-15r:1:w",
            rank: 1,
            title: "Assun\u00e7\u00e3o de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-16": {
        tempora: [
          {
            id: "tempora:Pent12-5:4:g",
            rank: 4,
            title: "Sexta-feira da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-16:2:w",
            rank: 2,
            title: "S. Joaquim, Pai de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-17": {
        tempora: [
          {
            id: "tempora:Pent12-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 12\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-17:3:w",
            rank: 3,
            title: "S. Jacinto, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-18": {
        tempora: [
          {
            id: "tempora:Pent13-0:2:g",
            rank: 2,
            title: "13\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent13-0:2:g",
            rank: 2,
            title: "13\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-08-19": {
        tempora: [
          {
            id: "tempora:Pent13-1:4:g",
            rank: 4,
            title: "Segunda-feira da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-19:3:w",
            rank: 3,
            title: "S. Jo\u00e3o Eudes, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-20": {
        tempora: [
          {
            id: "tempora:Pent13-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-20:3:w",
            rank: 3,
            title: "S. Bernardo, Abade e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-21": {
        tempora: [
          {
            id: "tempora:Pent13-3:4:g",
            rank: 4,
            title: "Quarta-feira da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-21:3:w",
            rank: 3,
            title: "S. Joana de Chantal, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-22": {
        tempora: [
          {
            id: "tempora:Pent13-4:4:g",
            rank: 4,
            title: "Quinta-feira da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-22r:2:w",
            rank: 2,
            title: "Imaculado Cora\u00e7\u00e3o de Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-23": {
        tempora: [
          {
            id: "tempora:Pent13-5:4:g",
            rank: 4,
            title: "Sexta-feira da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-23:3:w",
            rank: 3,
            title: "S. Filipe Ben\u00edcio, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-24": {
        tempora: [
          {
            id: "tempora:Pent13-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 13\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-24:2:r",
            rank: 2,
            title: "S. Bartolomeu, Ap\u00f3stolo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-25": {
        tempora: [
          {
            id: "tempora:Pent14-0:2:g",
            rank: 2,
            title: "14\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent14-0:2:g",
            rank: 2,
            title: "14\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-08-26": {
        tempora: [
          {
            id: "tempora:Pent14-1:4:g",
            rank: 4,
            title: "Segunda-feira da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:08-26:4:r",
            rank: 4,
            title: "S. Zeferino",
            colors: ["r"],
          },
        ],
      },
      "2024-08-27": {
        tempora: [
          {
            id: "tempora:Pent14-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-27:3:w",
            rank: 3,
            title: "S. Jos\u00e9 Calasans, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-08-28": {
        tempora: [
          {
            id: "tempora:Pent14-3:4:g",
            rank: 4,
            title: "Quarta-feira da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-28:3:r",
            rank: 3,
            title: "S. Agostinho, Bispo, Confessor e Doutor da Igreja",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-29": {
        tempora: [
          {
            id: "tempora:Pent14-4:4:g",
            rank: 4,
            title: "Quinta-feira da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-29:3:r",
            rank: 3,
            title: "Degola\u00e7\u00e3o de  S. Jo\u00e3o Baptista",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-30": {
        tempora: [
          {
            id: "tempora:Pent14-5:4:g",
            rank: 4,
            title: "Sexta-feira da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-30:3:r",
            rank: 3,
            title: "Santa Rosa de Lima, Virgem",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-08-31": {
        tempora: [
          {
            id: "tempora:Pent14-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 14\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:08-31:3:w",
            rank: 3,
            title: "S. Raimundo Nonato, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-01": {
        tempora: [
          {
            id: "tempora:Pent15-0:2:g",
            rank: 2,
            title: "15\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent15-0:2:g",
            rank: 2,
            title: "15\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-09-02": {
        tempora: [
          {
            id: "tempora:Pent15-1:4:g",
            rank: 4,
            title: "Segunda-feira da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-02:3:w",
            rank: 3,
            title: "S. Est\u00eav\u00e3o, Rei e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-03": {
        tempora: [
          {
            id: "tempora:Pent15-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-03r:3:w",
            rank: 3,
            title: "S. Pio X, Papa e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-04": {
        tempora: [
          {
            id: "tempora:Pent15-3:4:g",
            rank: 4,
            title: "Quarta-feira da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-09-05": {
        tempora: [
          {
            id: "tempora:Pent15-4:4:g",
            rank: 4,
            title: "Quinta-feira da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-05:3:w",
            rank: 3,
            title: "S. Louren\u00e7o Justiniano, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-06": {
        tempora: [
          {
            id: "tempora:Pent15-5:4:g",
            rank: 4,
            title: "Sexta-feira da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-09-07": {
        tempora: [
          {
            id: "tempora:Pent15-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 15\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-08": {
        tempora: [
          {
            id: "tempora:Pent16-0:2:g",
            rank: 2,
            title: "16\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-08:2:w",
            rank: 2,
            title: "Natividade da B. V. Maria",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Pent16-0:2:g",
            rank: 2,
            title: "16\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
      },
      "2024-09-09": {
        tempora: [
          {
            id: "tempora:Pent16-1:4:g",
            rank: 4,
            title: "Segunda-feira da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:09-09:4:r",
            rank: 4,
            title: "S. Gorg\u00f3nio, M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-09-10": {
        tempora: [
          {
            id: "tempora:Pent16-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-10:3:w",
            rank: 3,
            title: "S. Nicolau Tolentino, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-11": {
        tempora: [
          {
            id: "tempora:Pent16-3:4:g",
            rank: 4,
            title: "Quarta-feira da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:09-11:4:r",
            rank: 4,
            title: "S. S. Proto e Jacinto, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-09-12": {
        tempora: [
          {
            id: "tempora:Pent16-4:4:g",
            rank: 4,
            title: "Quinta-feira da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-12:3:w",
            rank: 3,
            title: "Sant\u00edssimo Nome de Maria",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-13": {
        tempora: [
          {
            id: "tempora:Pent16-5:4:g",
            rank: 4,
            title: "Sexta-feira da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-09-14": {
        tempora: [
          {
            id: "tempora:Pent16-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 16\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-14:2:r",
            rank: 2,
            title: "Exalta\u00e7\u00e3o da Santa Cruz",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-09-15": {
        tempora: [
          {
            id: "tempora:Pent17-0:2:g",
            rank: 2,
            title: "17\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-15:2:w",
            rank: 2,
            title: "Sete Dores da B. V. Maria",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Pent17-0:2:g",
            rank: 2,
            title: "17\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
      },
      "2024-09-16": {
        tempora: [
          {
            id: "tempora:Pent17-1:4:g",
            rank: 4,
            title: "Segunda-feira da 17\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-16:3:w",
            rank: 3,
            title: "S. S. Corn\u00e9lio e Cipriano, M\u00e1rtires",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-09-17": {
        tempora: [
          {
            id: "tempora:Pent17-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 17\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:09-17:4:w",
            rank: 4,
            title: "Imp. dos Estigmas em S. Francisco",
            colors: ["w"],
          },
        ],
      },
      "2024-09-18": {
        tempora: [
          {
            id: "tempora:093-3:2:v",
            rank: 2,
            title: "Quarta-feira das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:093-3:2:v",
            rank: 2,
            title: "Quarta-feira das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:09-18r:3:w",
            rank: 3,
            title: "S. Jos\u00e9 Cupertino, Confessor",
            colors: ["w"],
          },
        ],
      },
      "2024-09-19": {
        tempora: [
          {
            id: "tempora:Pent17-4:4:g",
            rank: 4,
            title: "Quinta-feira da 17\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-19:3:r",
            rank: 3,
            title: "S. Janu\u00e1rio e Outros, M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-09-20": {
        tempora: [
          {
            id: "tempora:093-5:2:v",
            rank: 2,
            title: "Sexta-feira das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:093-5:2:v",
            rank: 2,
            title: "Sexta-feira das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:09-20:4:r",
            rank: 4,
            title: "S. S. Fabi\u00e3o e Sebasti\u00e3o, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-09-21": {
        tempora: [
          {
            id: "tempora:093-6:2:v",
            rank: 2,
            title: "S\u00e1bado das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-21:2:r",
            rank: 2,
            title: "S. Mateus, Ap\u00f3stolo e Evangelista",
            colors: ["r"],
          },
        ],
        commemoration: [
          {
            id: "tempora:093-6:2:v",
            rank: 2,
            title: "S\u00e1bado das T\u00eamporas de Setembro",
            colors: ["v"],
          },
        ],
      },
      "2024-09-22": {
        tempora: [
          {
            id: "tempora:Pent18-0:2:g",
            rank: 2,
            title: "18\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent18-0:2:g",
            rank: 2,
            title: "18\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-09-23": {
        tempora: [
          {
            id: "tempora:Pent18-1:4:g",
            rank: 4,
            title: "Segunda-feira da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-23:3:r",
            rank: 3,
            title: "S. Lino, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-09-24": {
        tempora: [
          {
            id: "tempora:Pent18-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:09-24:4:w",
            rank: 4,
            title: "B. V. Maria das Merc\u00eas",
            colors: ["w"],
          },
        ],
      },
      "2024-09-25": {
        tempora: [
          {
            id: "tempora:Pent18-3:4:g",
            rank: 4,
            title: "Quarta-feira da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-09-26": {
        tempora: [
          {
            id: "tempora:Pent18-4:4:g",
            rank: 4,
            title: "Quinta-feira da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:09-26:4:r",
            rank: 4,
            title: "S. S. Cipriano e Justina, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-09-27": {
        tempora: [
          {
            id: "tempora:Pent18-5:4:g",
            rank: 4,
            title: "Sexta-feira da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-27:3:r",
            rank: 3,
            title: "S. S. Cosme e Dami\u00e3o, M\u00e1rtires",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-09-28": {
        tempora: [
          {
            id: "tempora:Pent18-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 18\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-28:3:r",
            rank: 3,
            title: "S. Venceslau, M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-09-29": {
        tempora: [
          {
            id: "tempora:Pent19-0:2:g",
            rank: 2,
            title: "19\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-29:1:w",
            rank: 1,
            title: "Dedica\u00e7\u00e3o de S. Miguel Arcanjo",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Pent19-0:2:g",
            rank: 2,
            title: "19\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
      },
      "2024-09-30": {
        tempora: [
          {
            id: "tempora:Pent19-1:4:g",
            rank: 4,
            title: "Segunda-feira da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:09-30r:3:w",
            rank: 3,
            title: "S. Jer\u00f3nimo, Presb\u00edtero Confessor e Doutor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-01": {
        tempora: [
          {
            id: "tempora:Pent19-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:10-01:4:w",
            rank: 4,
            title: "S. Remigio",
            colors: ["w"],
          },
        ],
      },
      "2024-10-02": {
        tempora: [
          {
            id: "tempora:Pent19-3:4:g",
            rank: 4,
            title: "Quarta-feira da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-02:3:w",
            rank: 3,
            title: "Santos Anjos da Guarda",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-03": {
        tempora: [
          {
            id: "tempora:Pent19-4:4:g",
            rank: 4,
            title: "Quinta-feira da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-03:3:w",
            rank: 3,
            title: "Santa Teresa do Menino Jesus",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-04": {
        tempora: [
          {
            id: "tempora:Pent19-5:4:g",
            rank: 4,
            title: "Sexta-feira da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-04:3:w",
            rank: 3,
            title: "S. Francisco",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-05": {
        tempora: [
          {
            id: "tempora:Pent19-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 19\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:10-05:4:r",
            rank: 4,
            title: "S. Pl\u00e1cido e Companheiros M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-10-06": {
        tempora: [
          {
            id: "tempora:Pent20-0:2:g",
            rank: 2,
            title: "20\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent20-0:2:g",
            rank: 2,
            title: "20\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-10-07": {
        tempora: [
          {
            id: "tempora:Pent20-1:4:g",
            rank: 4,
            title: "Segunda-feira da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-07r:2:w",
            rank: 2,
            title: "SS. Ros\u00e1rio da B. V. Maria",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-08": {
        tempora: [
          {
            id: "tempora:Pent20-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-08r:3:w",
            rank: 3,
            title: "Santa Br\u00edgida, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-09": {
        tempora: [
          {
            id: "tempora:Pent20-3:4:g",
            rank: 4,
            title: "Quarta-feira da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-09:3:w",
            rank: 3,
            title: "S. Jo\u00e3o Leonardo, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-10": {
        tempora: [
          {
            id: "tempora:Pent20-4:4:g",
            rank: 4,
            title: "Quinta-feira da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-10:3:w",
            rank: 3,
            title: "S. Francisco de B\u00f3rgia",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-11": {
        tempora: [
          {
            id: "tempora:Pent20-5:4:g",
            rank: 4,
            title: "Sexta-feira da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-11:2:w",
            rank: 2,
            title: "Maternidade da B. V. Maria",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-12": {
        tempora: [
          {
            id: "tempora:Pent20-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 20\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-13": {
        tempora: [
          {
            id: "tempora:Pent21-0:2:g",
            rank: 2,
            title: "21\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent21-0:2:g",
            rank: 2,
            title: "21\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-10-14": {
        tempora: [
          {
            id: "tempora:Pent21-1:4:g",
            rank: 4,
            title: "Segunda-feira da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-14:3:r",
            rank: 3,
            title: "S. Calisto I, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-10-15": {
        tempora: [
          {
            id: "tempora:Pent21-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-15:3:w",
            rank: 3,
            title: "Santa Teresa, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-16": {
        tempora: [
          {
            id: "tempora:Pent21-3:4:g",
            rank: 4,
            title: "Quarta-feira da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-16:3:w",
            rank: 3,
            title: "Santa Hedviges, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-17": {
        tempora: [
          {
            id: "tempora:Pent21-4:4:g",
            rank: 4,
            title: "Quinta-feira da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-17:3:w",
            rank: 3,
            title: "Santa Margarida Maria, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-18": {
        tempora: [
          {
            id: "tempora:Pent21-5:4:g",
            rank: 4,
            title: "Sexta-feira da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-18:2:r",
            rank: 2,
            title: "S. Lucas, Evangelista",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-10-19": {
        tempora: [
          {
            id: "tempora:Pent21-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 21\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-19:3:w",
            rank: 3,
            title: "S. Pedro de Alc\u00e2ntara, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-20": {
        tempora: [
          {
            id: "tempora:Pent22-0:2:g",
            rank: 2,
            title: "22\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent22-0:2:g",
            rank: 2,
            title: "22\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-10-21": {
        tempora: [
          {
            id: "tempora:Pent22-1:4:g",
            rank: 4,
            title: "Segunda-feira da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:10-21:4:w",
            rank: 4,
            title: "S. Hilari\u00e3o, Abade",
            colors: ["w"],
          },
        ],
      },
      "2024-10-22": {
        tempora: [
          {
            id: "tempora:Pent22-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-10-23": {
        tempora: [
          {
            id: "tempora:Pent22-3:4:g",
            rank: 4,
            title: "Quarta-feira da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-23r:3:w",
            rank: 3,
            title: "S. Ant\u00f3nio Maria Claret, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-24": {
        tempora: [
          {
            id: "tempora:Pent22-4:4:g",
            rank: 4,
            title: "Quinta-feira da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-24:3:w",
            rank: 3,
            title: "S. Rafael, Arcanjo",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-25": {
        tempora: [
          {
            id: "tempora:Pent22-5:4:g",
            rank: 4,
            title: "Sexta-feira da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:10-25:4:r",
            rank: 4,
            title: "S.S. Crisanto e Daria, M\u00e1rtires",
            colors: ["r"],
          },
        ],
      },
      "2024-10-26": {
        tempora: [
          {
            id: "tempora:Pent22-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 22\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "commune:C10t:0:w",
            rank: 0,
            title: "5ª Missa da Virgem Maria - Missa Salve, Sancta Parens",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-27": {
        tempora: [
          {
            id: "tempora:Pent23-0:2:g",
            rank: 2,
            title: "23\u00ba Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-DUr:1:w",
            rank: 1,
            title: "Cristo Rei",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-10-28": {
        tempora: [
          {
            id: "tempora:Pent23-1:4:g",
            rank: 4,
            title: "Segunda-feira da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:10-28:2:r",
            rank: 2,
            title: "S.S. Sim\u00e3o e Judas, Ap\u00f3stolos",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-10-29": {
        tempora: [
          {
            id: "tempora:Pent23-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-10-30": {
        tempora: [
          {
            id: "tempora:Pent23-3:4:g",
            rank: 4,
            title: "Quarta-feira da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-10-31": {
        tempora: [
          {
            id: "tempora:Pent23-4:4:g",
            rank: 4,
            title: "Quinta-feira da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-01": {
        tempora: [
          {
            id: "tempora:Pent23-5:4:g",
            rank: 4,
            title: "Sexta-feira da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-01:1:w",
            rank: 1,
            title: "Todos os Santos",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-02": {
        tempora: [
          {
            id: "tempora:Pent23-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 23\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-02m1:1:b",
            rank: 1,
            title:
              "Comemora\u00e7\u00e3o dos Fi\u00e9is Defuntos, 1\u00aa Missa",
            colors: ["b"],
          },
          {
            id: "sancti:11-02m2:1:b",
            rank: 1,
            title:
              "Comemora\u00e7\u00e3o dos Fi\u00e9is Defuntos, 2\u00aa Missa",
            colors: ["b"],
          },
          {
            id: "sancti:11-02m3:1:b",
            rank: 1,
            title:
              "Comemora\u00e7\u00e3o dos Fi\u00e9is Defuntos, 3\u00aa Missa",
            colors: ["b"],
          },
        ],
        commemoration: [],
      },
      "2024-11-03": {
        tempora: [
          {
            id: "tempora:Epi4-0:2:g",
            rank: 2,
            title: "4\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi4-0:2:g",
            rank: 2,
            title: "4\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-11-04": {
        tempora: [
          {
            id: "tempora:Epi4-1:4:g",
            rank: 4,
            title: "Segunda-feira da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-04r:3:w",
            rank: 3,
            title: "S. Carlos Borromeu, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-05": {
        tempora: [
          {
            id: "tempora:Epi4-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-06": {
        tempora: [
          {
            id: "tempora:Epi4-3:4:g",
            rank: 4,
            title: "Quarta-feira da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-07": {
        tempora: [
          {
            id: "tempora:Epi4-4:4:g",
            rank: 4,
            title: "Quinta-feira da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-08": {
        tempora: [
          {
            id: "tempora:Epi4-5:4:g",
            rank: 4,
            title: "Sexta-feira da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:11-08r:4:r",
            rank: 4,
            title: "Os Quatro S.S. M\u00e1rtires Coroados",
            colors: ["r"],
          },
        ],
      },
      "2024-11-09": {
        tempora: [
          {
            id: "tempora:Epi4-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 4\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-09:2:w",
            rank: 2,
            title: "Dedica\u00e7\u00e3o da Bas\u00edlica do Salvador",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-10": {
        tempora: [
          {
            id: "tempora:Epi5-0:2:g",
            rank: 2,
            title: "5\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi5-0:2:g",
            rank: 2,
            title: "5\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-11-11": {
        tempora: [
          {
            id: "tempora:Epi5-1:4:g",
            rank: 4,
            title: "Segunda-feira da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-11:3:w",
            rank: 3,
            title: "S. Martinho, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-12": {
        tempora: [
          {
            id: "tempora:Epi5-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-12:3:r",
            rank: 3,
            title: "S. Martinho I, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-11-13": {
        tempora: [
          {
            id: "tempora:Epi5-3:4:g",
            rank: 4,
            title: "Quarta-feira da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:11-13:4:w",
            rank: 4,
            title: "S. Diogo, Confessor",
            colors: ["w"],
          },
        ],
      },
      "2024-11-14": {
        tempora: [
          {
            id: "tempora:Epi5-4:4:g",
            rank: 4,
            title: "Quinta-feira da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-14:3:w",
            rank: 3,
            title: "S. Josaf\u00e1, Bispo e M\u00e1rtir",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-15": {
        tempora: [
          {
            id: "tempora:Epi5-5:4:g",
            rank: 4,
            title: "Sexta-feira da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-15:3:w",
            rank: 3,
            title: "S. Alberto Magno, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-16": {
        tempora: [
          {
            id: "tempora:Epi5-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 5\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-16:3:w",
            rank: 3,
            title: "S. Gertrudes, Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-17": {
        tempora: [
          {
            id: "tempora:Epi6-0:2:g",
            rank: 2,
            title: "6\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Epi6-0:2:g",
            rank: 2,
            title: "6\u00ba Domingo ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-11-18": {
        tempora: [
          {
            id: "tempora:Epi6-1:4:g",
            rank: 4,
            title: "Segunda-feira da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-18r:3:w",
            rank: 3,
            title: "Dedica\u00e7\u00e3o da Bas\u00edlica de S.S Pedro e Paulo",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-19": {
        tempora: [
          {
            id: "tempora:Epi6-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-19:3:w",
            rank: 3,
            title: "S. Isabel, Vi\u00fava",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-20": {
        tempora: [
          {
            id: "tempora:Epi6-3:4:g",
            rank: 4,
            title: "Quarta-feira da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-20:3:w",
            rank: 3,
            title: "S. F\u00e9lix de Valois, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-21": {
        tempora: [
          {
            id: "tempora:Epi6-4:4:g",
            rank: 4,
            title: "Quinta-feira da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-21:3:w",
            rank: 3,
            title: "Apresenta\u00e7\u00e3o da Nossa Senhora",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-22": {
        tempora: [
          {
            id: "tempora:Epi6-5:4:g",
            rank: 4,
            title: "Sexta-feira da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-22:3:r",
            rank: 3,
            title: "S. Cec\u00edlia, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-11-23": {
        tempora: [
          {
            id: "tempora:Epi6-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 6\u00aa semana ap\u00f3s a Epifania",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-23:3:r",
            rank: 3,
            title: "S. Clemente I, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-11-24": {
        tempora: [
          {
            id: "tempora:Pent24-0:2:g",
            rank: 2,
            title: "24 Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "tempora:Pent24-0:2:g",
            rank: 2,
            title: "24 Domingo depois de Pentecostes",
            colors: ["g"],
          },
        ],
        commemoration: [],
      },
      "2024-11-25": {
        tempora: [
          {
            id: "tempora:Pent24-1:4:g",
            rank: 4,
            title: "Segunda-feira da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-25:3:r",
            rank: 3,
            title: "S. Catarina, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-11-26": {
        tempora: [
          {
            id: "tempora:Pent24-2:4:g",
            rank: 4,
            title: "Ter\u00e7a-feira da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-26:3:w",
            rank: 3,
            title: "S. Silvestre, Abade",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-11-27": {
        tempora: [
          {
            id: "tempora:Pent24-3:4:g",
            rank: 4,
            title: "Quarta-feira da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-28": {
        tempora: [
          {
            id: "tempora:Pent24-4:4:g",
            rank: 4,
            title: "Quinta-feira da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [],
      },
      "2024-11-29": {
        tempora: [
          {
            id: "tempora:Pent24-5:4:g",
            rank: 4,
            title: "Sexta-feira da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [],
        commemoration: [
          {
            id: "sancti:11-29r:4:r",
            rank: 4,
            title: "S. Saturnino, M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-11-30": {
        tempora: [
          {
            id: "tempora:Pent24-6:4:g",
            rank: 4,
            title: "S\u00e1bado da 24\u00aa semana depois de Pentecostes",
            colors: ["g"],
          },
        ],
        celebration: [
          {
            id: "sancti:11-30:2:r",
            rank: 2,
            title: "S. Andr\u00e9, Ap\u00f3stolo",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-12-01": {
        tempora: [
          {
            id: "tempora:Adv1-0:1:v",
            rank: 1,
            title: "1\u00aa Domingo do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv1-0:1:v",
            rank: 1,
            title: "1\u00aa Domingo do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-02": {
        tempora: [
          {
            id: "tempora:Adv1-1:3:v",
            rank: 3,
            title: "Segunda-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-02:3:r",
            rank: 3,
            title: "S. Bibiana, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv1-1:3:v",
            rank: 3,
            title: "Segunda-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-03": {
        tempora: [
          {
            id: "tempora:Adv1-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-03:3:w",
            rank: 3,
            title: "S. Francisco Xavier, Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv1-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-04": {
        tempora: [
          {
            id: "tempora:Adv1-3:3:v",
            rank: 3,
            title: "Quarta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-04:3:w",
            rank: 3,
            title:
              "S. Pedro Chrys\u00f3logo, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv1-3:3:v",
            rank: 3,
            title: "Quarta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-05": {
        tempora: [
          {
            id: "tempora:Adv1-4:3:v",
            rank: 3,
            title: "Quinta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv1-4:3:v",
            rank: 3,
            title: "Quinta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:12-05:4:w",
            rank: 4,
            title: "S. Sabbas, Abade",
            colors: ["w"],
          },
        ],
      },
      "2024-12-06": {
        tempora: [
          {
            id: "tempora:Adv1-5:3:v",
            rank: 3,
            title: "Sexta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-06:3:w",
            rank: 3,
            title: "S. Nicolau, Bispo e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv1-5:3:v",
            rank: 3,
            title: "Sexta-feira da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-07": {
        tempora: [
          {
            id: "tempora:Adv1-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-07:3:w",
            rank: 3,
            title: "S. Ambr\u00f3sio, Bispo, Confessor e Doutor da Igreja",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv1-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 1\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-08": {
        tempora: [
          {
            id: "tempora:Adv2-0:1:v",
            rank: 1,
            title: "2\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-08:1:w",
            rank: 1,
            title: "Imaculada Concei\u00e7\u00e3o da SS. Virgem",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv2-0:1:v",
            rank: 1,
            title: "2\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-09": {
        tempora: [
          {
            id: "tempora:Adv2-1:3:v",
            rank: 3,
            title: "Segunda-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv2-1:3:v",
            rank: 3,
            title: "Segunda-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-10": {
        tempora: [
          {
            id: "tempora:Adv2-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv2-2:3:v",
            rank: 3,
            title: "Ter\u00e7a-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [
          {
            id: "sancti:12-10:4:r",
            rank: 4,
            title: "S. Melqu\u00edades, Papa e M\u00e1rtir",
            colors: ["r"],
          },
        ],
      },
      "2024-12-11": {
        tempora: [
          {
            id: "tempora:Adv2-3:3:v",
            rank: 3,
            title: "Quarta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-11:3:w",
            rank: 3,
            title: "S. D\u00e2maso, Papa e Confessor",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv2-3:3:v",
            rank: 3,
            title: "Quarta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-12": {
        tempora: [
          {
            id: "tempora:Adv2-4:3:v",
            rank: 3,
            title: "Quinta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv2-4:3:v",
            rank: 3,
            title: "Quinta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-13": {
        tempora: [
          {
            id: "tempora:Adv2-5:3:v",
            rank: 3,
            title: "Sexta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-13r:3:r",
            rank: 3,
            title: "S. Luzia, Virgem e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv2-5:3:v",
            rank: 3,
            title: "Sexta-feira da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-14": {
        tempora: [
          {
            id: "tempora:Adv2-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv2-6:3:v",
            rank: 3,
            title: "S\u00e1bado da 2\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-15": {
        tempora: [
          {
            id: "tempora:Adv3-0:1:v",
            rank: 1,
            title: "3\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv3-0:1:v",
            rank: 1,
            title: "3\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-16": {
        tempora: [
          {
            id: "tempora:Adv3-1:3:v",
            rank: 3,
            title: "Segunda-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-16:3:r",
            rank: 3,
            title: "S. Eus\u00e9bio, Bispo e M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv3-1:3:v",
            rank: 3,
            title: "Segunda-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
      },
      "2024-12-17": {
        tempora: [
          {
            id: "tempora:Adv3-2:2:v",
            rank: 2,
            title: "Ter\u00e7a-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv3-2:2:v",
            rank: 2,
            title: "Ter\u00e7a-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-18": {
        tempora: [
          {
            id: "tempora:Adv3-3:2:v",
            rank: 2,
            title: "Quarta-feira das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv3-3:2:v",
            rank: 2,
            title: "Quarta-feira das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-19": {
        tempora: [
          {
            id: "tempora:Adv3-4:2:v",
            rank: 2,
            title: "Quinta-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv3-4:2:v",
            rank: 2,
            title: "Quinta-feira da 3\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-20": {
        tempora: [
          {
            id: "tempora:Adv3-5:2:v",
            rank: 2,
            title: "Sexta-feira das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv3-5:2:v",
            rank: 2,
            title: "Sexta-feira das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-21": {
        tempora: [
          {
            id: "tempora:Adv3-6:2:v",
            rank: 2,
            title: "S\u00e1bado das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "sancti:12-21:2:r",
            rank: 2,
            title: "S. Tom\u00e9, Ap\u00f3stolo",
            colors: ["r"],
          },
        ],
        commemoration: [
          {
            id: "tempora:Adv3-6:2:v",
            rank: 2,
            title: "S\u00e1bado das T\u00eamporas de Inverno",
            colors: ["v"],
          },
        ],
      },
      "2024-12-22": {
        tempora: [
          {
            id: "tempora:Adv4-0:1:v",
            rank: 1,
            title: "4\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv4-0:1:v",
            rank: 1,
            title: "4\u00ba Domingo do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-23": {
        tempora: [
          {
            id: "tempora:Adv4-1:2:v",
            rank: 2,
            title: "Segunda-feira da 4\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        celebration: [
          {
            id: "tempora:Adv4-1:2:v",
            rank: 2,
            title: "Segunda-feira da 4\u00aa semana do Advento",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-24": {
        tempora: [],
        celebration: [
          {
            id: "sancti:12-24:1:v",
            rank: 1,
            title: "Vig\u00edlia Natal de N. S. Jesus Cristo",
            colors: ["v"],
          },
        ],
        commemoration: [],
      },
      "2024-12-25": {
        tempora: [],
        celebration: [
          {
            id: "sancti:12-25m1:1:w",
            rank: 1,
            title: "Natal de N. S. Jesus Cristo",
            colors: ["w"],
          },
          {
            id: "sancti:12-25m2:1:w",
            rank: 1,
            title: "Natal de N. S. Jesus Cristo",
            colors: ["w"],
          },
          {
            id: "sancti:12-25m3:1:w",
            rank: 1,
            title: "Natal de N. S. Jesus Cristo",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-12-26": {
        tempora: [],
        celebration: [
          {
            id: "sancti:12-26:2:r",
            rank: 2,
            title: "S. Est\u00eav\u00e3o, Primeiro M\u00e1rtir",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-12-27": {
        tempora: [],
        celebration: [
          {
            id: "sancti:12-27:2:w",
            rank: 2,
            title: "S. Jo\u00e3o, Ap\u00f3stolo e Evangelista",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-12-28": {
        tempora: [],
        celebration: [
          {
            id: "sancti:12-28:2:r",
            rank: 2,
            title: "Santos Inocentes",
            colors: ["r"],
          },
        ],
        commemoration: [],
      },
      "2024-12-29": {
        tempora: [
          {
            id: "tempora:Nat1-0:2:w",
            rank: 2,
            title: "Domingo dentro do Oitav\u00e1rio do Natal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Nat1-0:2:w",
            rank: 2,
            title: "Domingo dentro do Oitav\u00e1rio do Natal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-12-30": {
        tempora: [
          {
            id: "tempora:Nat1-1:2:w",
            rank: 2,
            title: "Feria na Oitav\u00e1ria do Natal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Nat1-1:2:w",
            rank: 2,
            title: "Feria na Oitav\u00e1ria do Natal",
            colors: ["w"],
          },
        ],
        commemoration: [],
      },
      "2024-12-31": {
        tempora: [
          {
            id: "tempora:Nat1-1:2:w",
            rank: 2,
            title: "Feria na Oitav\u00e1ria do Natal",
            colors: ["w"],
          },
        ],
        celebration: [
          {
            id: "tempora:Nat1-1:2:w",
            rank: 2,
            title: "Feria na Oitav\u00e1ria do Natal",
            colors: ["w"],
          },
        ],
        commemoration: [
          {
            id: "sancti:12-31r:4:w",
            rank: 4,
            title: "S. Silvestre",
            colors: ["w"],
          },
        ],
      },
    });
  });
});
