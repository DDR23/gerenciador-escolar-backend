import { Aluno } from "@prisma/client";
import { CreateAlunoDto } from "../dto/create-aluno.dto";

export interface IAlunoRepositories {
  createAluno(data: CreateAlunoDto): Promise<Aluno>;
}