import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({tableName: "users"})
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  lastname: string;

  @Column
  email: string;

  @Column
  username: string;

  @Column
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
