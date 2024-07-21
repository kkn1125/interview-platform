import { DateColumnEntity } from '@common/date-column.entity';
import { Question } from '@src/questions/entities/question.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickname!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @OneToMany(() => Question, (question) => question.user)
  questions!: Question[];
}
