public class programacao_orientada_objeto {

    private String marca;
    private String modelo;
    private int ano;
    //construtor padrao
    public programacao_orientada_objeto() {
        this.marca = "Sem marca";
        this.modelo = "Sem modelo";
        this.ano = 0;

    }

    public class Animal {
        public void fazerSom(){
            System.out.println("O animal faz algum som");
        }
    }
    
    public class cachorro extends Animal{

    }

    public static void main(String[] args) {

        /* Exemplo criação de objeto
        Pessoa pessoa1 = new Pessoa ("Joâo", 30);
        Pessoa pessoa2 = new Pessoa ("Maria", 25;

        tipos de classe:
        Dominio: usada para modelar
        exemplo:

        Public class carro{
        private String marca;
        private String modelo;
        private int ano;
        public Carro(String marca, String modelo, int ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        }

        utilitaria:  somente metodos nao tem atributos para caracterizar ela, somente uma ferramenta
        exemplo funcao matematica

        serviço:

        entidade: armazenar informaçoes, copnsultar no banco de dados, conseguir fazer autorizaçao de determinados usuarios
        exemplo: public class Usuario{
        private long id;

        }

        controle: extremamente pontuais, criação de funcoes, vizando manipular o programa, permitindo acesso

        comando this:

        chamada dos construtores
        retorno de instancia atual



         */



    }
}
