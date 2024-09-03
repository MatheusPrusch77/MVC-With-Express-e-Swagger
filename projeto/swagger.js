module.exports = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "API de Usuários",
      description: "API para gerenciar usuários",
    },
    host: "localhost:3000",
    basePath: "/",
    tags: [
      {
        name: "Usuários",
        description: "Gerenciamento de usuários",
      },
    ],
    schemes: ["http"],
    paths: {
      "/": {
        get: {
          tags: ["Usuários"],
          summary: "Listar todos os usuários",
          responses: {
            "200": {
              description: "Lista de usuários",
            },
          },
        },
      },
      "/cadastrar": {
        post: {
          tags: ["Usuários"],
          summary: "Cadastrar um novo usuário",
          parameters: [
            {
              name: "nome",
              in: "formData",
              required: true,
              type: "string",
            },
            {
              name: "email",
              in: "formData",
              required: true,
              type: "string",
            },
          ],
          responses: {
            "200": {
              description: "Usuário cadastrado com sucesso",
            },
          },
        },
      },
      "/excluir/{id}": {
        post: {
          tags: ["Usuários"],
          summary: "Excluir um usuário",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              type: "string",
            },
          ],
          responses: {
            "200": {
              description: "Usuário excluído com sucesso",
            },
          },
        },
      },
    },
  };
  