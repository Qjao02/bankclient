export interface ClienteInterface {
    //        #data_cadastro,nome,rua_mora,cidade_mora,estado_mora,funcionario_cadastrou

    id: number;
    nome: string;
    rua_mora : string;
    cidade_mora : string;
    estado_mora : string;
    funcionario_cadastrou : string;
    data_cadastro : Date
}
