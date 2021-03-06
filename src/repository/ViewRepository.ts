import {Model} from '../metadata';

export interface ViewRepository<T, ID> {
  metadata(): Model;
  keys(): string[];
  all?(ctx?: any): Promise<T[]>;
  load(id: ID, ctx?: any): Promise<T>;
  exist?(id: ID): Promise<boolean>;
}
