
import { Repository } from 'typeorm';


export abstract class BaseService<T> {
  constructor(private repo: Repository<T>) { }

  find(): Promise<T[]> {
    return this.repo.find();
  }

  findOneBy(where): Promise<T> {
    return this.repo.findOneBy(where);
  }

  removeById(where) {
    return this.repo.delete(where);
  }

  create(createDto): Promise<T> {
    return this.repo.save(createDto);
  }
  updateById(where, updateDto) {
    return this.repo.update(where, updateDto);
  }
}
