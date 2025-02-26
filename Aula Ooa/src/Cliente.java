public class Cliente {
    public String nome;
    public int idade;
    public int q_filhos;
    public double salario;

    public Cliente(String nome, int idade,int q_filhos,double salario){
        this.nome = nome;
        this.idade = idade;
        this.q_filhos = q_filhos;
        this.salario = salario;
    }

    public void fidelizar(){
        if (salario>2500&&q_filhos>3) {
            System.out.println("Fidelize o cliente");
        } else {
            System.out.println("Não fidelize o cliete");
        }
    }

    public void liberar_desconto(){
        if (idade>35&&q_filhos>2){
            System.out.println("Desconto liberado para Sr(a) " + nome);
        } else {
            System.out.println("Sem desconto para Sr(a) " + nome);
        }
    }
}
