public class Aluno {

    public double n1;
    public double n2;
    public double n3;
    public double n4;
    public double t_a;
    public double t_f;

    //construtor

    public Aluno(double n1,double n2,double n3,double n4,double t_a,double t_f){
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.n4 = n4;
        this.t_a = t_a;
        this.t_f = t_f;
    }

    //1° metodo
    public void avaliar(){

        if (n1+n2+n3+n4/4.0>7){
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

    }

    public void avaliar_faltas(){
        if (t_f/t_a*100>75.0){
            System.out.println("Reprovado");

        } else {
            System.out.println("Aprovado por frequencia");
        }
    }
}
