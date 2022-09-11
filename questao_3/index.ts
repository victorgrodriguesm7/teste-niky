abstract class IAluno {
    abstract calcularIdade(): number;
    abstract calcularImc(): number;
    abstract calcularTempoMatriculado(): number ;
    abstract getTurmas(): ITurma[];
    abstract getMonitoria(): ITurma | null;

    abstract cadastrarAluno(aluno: IAluno): Promise<void>;
    abstract getAluno(id: number): Promise<IAluno | null>;
    abstract deletarAluno(id: number): Promise<void>;
    abstract salvarAluno(id: number, aluno: IAluno): Promise<void>;
}

abstract class ITurma {
    abstract getAlunos(): IAluno[];
    abstract getInstrutor(): IInstrutor;
    abstract getMonitor(): IAluno;
    abstract getAtividade(): IAtividade;

    abstract cadastrarTurma(turma: ITurma): Promise<void>;
    abstract getTurma(id: number): Promise<ITurma | null>;
    abstract deletarTurma(id: number): Promise<void>;
    abstract salvarTurma(id: number, turma: ITurma): Promise<void>;
}

abstract class IAtividade {
    abstract getTurmas(): ITurma[];

    abstract cadastrarAtividade(atividade: IAtividade): Promise<void>;
    abstract getAtividade(id: number): Promise<IAtividade | null>;
    abstract deletarAtividade(id: number): Promise<void>;
    abstract salvarAtividade(id: number, atividade: IAtividade): Promise<void>;
}

abstract class IInstrutor {
    abstract getTelefones(): ITelefone[];
    abstract getTitulo(): ITitulo;

    abstract getTurmas(): ITurma[];

    abstract cadastrarInstrutor(instrutor: IInstrutor): Promise<void>;
    abstract getInstrutor(id: number): Promise<IInstrutor | null>;
    abstract deletarInstrutor(id: number): Promise<void>;
    abstract salvarInstrutor(id: number, instrutor: IInstrutor): Promise<void>;
}

abstract class ITitulo {
    abstract getInstrutores(): IInstrutor[];

    abstract cadastrarTitulo(titulo: ITitulo): Promise<void>;
    abstract getTitulo(id: number): Promise<ITitulo | null>;
    abstract deletarTitulo(id: number): Promise<void>;
    abstract salvarTitulo(id: number, titulo: ITitulo): Promise<void>;
}

abstract class ITelefone {
    abstract getInstrutor(): IInstrutor;

    abstract cadastrarTelefone(telefone: ITelefone): Promise<void>;
    abstract getTelefone(id: number): Promise<ITelefone | null>;
    abstract deletarTelefone(id: number): Promise<void>;
    abstract salvarTelefone(id: number, telefone: ITelefone): Promise<void>;
}