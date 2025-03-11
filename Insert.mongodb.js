const database = "BD3-NoSQL-AtlasMongoDB"

use(database);

db["bd3-nosql-atv1"].insertMany([
    {
        "cod_aluno": 3,
        "cod_turma": 3,
        "nome": "senhor codador3",
        "cpf": "252.895.763-03",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "3" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 4,
        "cod_turma": 4,
        "nome": "senhor codador4",
        "cpf": "252.895.763-04",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "4" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 5,
        "cod_turma": 5,
        "nome": "senhor codador5",
        "cpf": "252.895.763-05",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "5" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 6,
        "cod_turma": 6,
        "nome": "senhor codador6",
        "cpf": "252.895.763-06",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "6" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },    {
        "cod_aluno": 7,
        "cod_turma": 7,
        "nome": "senhor codador7",
        "cpf": "252.895.763-07",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "7" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 8,
        "cod_turma": 8,
        "nome": "senhor codador8",
        "cpf": "252.895.763-08",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "8" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 9,
        "cod_turma": 9,
        "nome": "senhor codador9",
        "cpf": "252.895.763-09",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "9" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
    {
        "cod_aluno": 10,
        "cod_turma": 10,
        "nome": "senhor codador10",
        "cpf": "252.895.763-10",
        "rg":"12345655902-1",
        "telefone_aluno": "98002-8922",
        "telefone_responsavel": "92357-4534",
        "email": "exemplo" + "10" + "@gmail.com",
        "data_nascimento": Timestamp(4, 5)
    },
]);