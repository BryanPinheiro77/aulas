public class Professor {

    public double total_alunos;
    public double total_aprovados;
    public double total_aulas;

    public Professor(double total_alunos, double total_aprovados, double total_aulas){
        this.total_alunos = total_alunos;
        this.total_aprovados = total_aprovados;
        this.total_aulas = total_aulas;
    }

    public void promover(){
        if (total_aprovados/total_alunos*100>75){
            System.out.println("Professor promovido");
        } else {
            System.out.println("Professor aprovado");
        }
    }

    public void bonificar(){
        if (total_aulas>=30){
            System.out.println("Ganha bonificação");
        } else {
            System.out.println("Nao ganha bonificação");
        }
    }
}
