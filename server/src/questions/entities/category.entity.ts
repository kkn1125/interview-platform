import { DateColumnEntity } from '@common/date-column.entity';
import { CategoryType } from '@common/enums/category.enum';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Category extends BaseEntity implements DateColumnEntity {
  @PrimaryColumn({ type: 'enum', enum: CategoryType })
  name!: CategoryType;

  @Column()
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @OneToMany(() => Question, (question) => question.category)
  questions!: Question[];
}
