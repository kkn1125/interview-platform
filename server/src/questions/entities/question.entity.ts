import { DateColumnEntity } from '@common/date-column.entity';
import { CategoryType } from '@common/enums/category.enum';
import { Bundle } from '@src/bundles/entities/bundle.entity';
import { User } from '@src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Question extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number | null;

  @Column({ type: 'enum', enum: CategoryType })
  categoryType!: CategoryType;

  @Column({ type: 'text', nullable: true })
  contents!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.questions)
  @JoinColumn()
  user!: User;

  @ManyToMany(() => Bundle, (bundle) => bundle.questions)
  bundles!: Bundle[];

  @ManyToOne(() => Category, (category) => category.questions)
  @JoinColumn({ name: 'category_type', referencedColumnName: 'name' })
  category!: Category;
}
