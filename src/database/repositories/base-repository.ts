import { Injectable } from '@nestjs/common';
import { Model, ModelCtor } from 'sequelize-typescript';

export interface BaseRepositoryInterface<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: number, data: Partial<T>): Promise<[number, T[]]>;
  delete(id: number): Promise<number>;
}

@Injectable()
export class BaseRepository<T extends Model<T>>
  implements BaseRepositoryInterface<T>
{
  constructor(private readonly model: ModelCtor<T>) {}

  async findAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async findById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data as any);
  }

  async update(id: any, data: Partial<T>): Promise<[number, T[]]> {
    const [affectedRows, updatedDocuments] = await this.model.update(
      { ...data },
      { where: { id }, returning: true },
    );
    return [affectedRows, updatedDocuments];
  }

  async delete(id: any): Promise<number> {
    return this.model.destroy({ where: { id } });
  }
}
