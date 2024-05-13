import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  Handle: string;

  @Column
  Title: string;

  @Column
  Description: string;

  @Column
  SKU: string;

  @Column
  Grams: number;

  @Column
  Stock: number;

  @Column
  Price: number;

  @Column
  ComparePrice: number;

  @Column
  Barcode: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
