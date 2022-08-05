import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('RH_INSTITUICOES')
export class Cliente {
  @PrimaryColumn({name: 'ID_INSTITUICOES', type: 'number'})
  id: number;
}
