import java.util.Scanner;

public class Exercicio1 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
       /*
        System.out.println("Digite todas as notas");

        double n1= input.nextDouble();
        double n2= input.nextDouble();
        double n3= input.nextDouble();
        double n4= input.nextDouble();

        System.out.println("Insira o total de aulas e o total de faltas");
        double t_a = input.nextDouble();
        double t_f = input.nextDouble();

        Aluno a1= new Aluno(n1, n2, n3, n4, t_a, t_f);

        a1.avaliar();
        a1.avaliar_faltas();

        System.out.println("Digite o total de alunos, total aprovados e o total de aulas atribuidas");
        double total_alunos = input.nextDouble();
        double total_aprovados = input.nextDouble();
        double total_aulas = input.nextDouble();

        Professor p1 = new Professor(total_alunos, total_aprovados, total_aulas);
        p1.promover();
        p1.bonificar();*/

        System.out.println("Insira a opção: 1-funcionario 2- cliente");
        int op = validador(input);
        System.out.println("insira o nome");
        String nome = input.next();
        System.out.println("Insira a idade");
        int idade = input.nextInt();
        System.out.println("Insira a quantidade de filhos");
        int q_filhos = input.nextInt();
        System.out.println("Insira a renda");
        double salario = input.nextDouble();


        switch (op) {
            case 1:
                System.out.println("Insira o tempo de serviço");
                double tempo = input.nextDouble();
                Funcionario f1 = new Funcionario(nome, idade, q_filhos, salario, tempo);
                f1.aumento_salario();
                f1.promover();
                f1.demitir();
                break;

            case 2:
                Cliente cl = new Cliente(nome, idade, q_filhos, salario);
                cl.fidelizar();
                cl.liberar_desconto();
                break;
            case 3:
            default:
                System.out.println("ERRO!!");
        }

    }
        public static int validador (Scanner input) {

            int op;
            while (true) {
                op = input.nextInt();
                if (op == 1 || op == 2) {
                    return op;
                } else {
                    System.out.println("Opção invalida");
                }
            }

        }
    }

