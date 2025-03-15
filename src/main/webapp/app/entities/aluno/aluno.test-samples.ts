import { IAluno, NewAluno } from './aluno.model';

export const sampleWithRequiredData: IAluno = {
  id: 8806,
  name: 'boo tomorrow',
};

export const sampleWithPartialData: IAluno = {
  id: 2189,
  name: 'insecure supposing untimely',
};

export const sampleWithFullData: IAluno = {
  id: 25732,
  name: 'oof near likewise',
};

export const sampleWithNewData: NewAluno = {
  name: 'energetically yet webbed',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
