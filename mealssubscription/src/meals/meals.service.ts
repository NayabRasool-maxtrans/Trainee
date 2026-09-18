import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { mealsplan } from './entity/mealsplanentity';
import { InjectRepository } from '@nestjs/typeorm';
import { mealdto } from './dto/mealsdto';
import { updatemealsdto } from './dto/mealsupdatedto';

@Injectable()
export class MealsService {

  constructor(@InjectRepository(mealsplan) private readonly mealsrepository: Repository<mealsplan>) { }

  //get all meals
  async getall() {
    try {

      return await this.mealsrepository.find()

    } catch (error) {

      throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

    }

  }

  //get by meal id
  async getbyid(id: number) {
    try {
      const mealid = await this.mealsrepository.findOne({ where: { id } })
      if (!mealid) {
        throw new NotFoundException(`meal id ${id} not exists`)
      }
      return mealid

    }
    catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      else {
        throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

      }
    }


  }

  //delete by meal
  async Deletebyid(id: number) {

    try {
      const deleteid = await this.mealsrepository.findOne({ where: { id } })
      if (!deleteid) {
        throw new NotFoundException(`meal id ${id} not exists`)
      }
      this.mealsrepository.remove(deleteid)
      return "meal deleted sucessfully.."

    }
    catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      else {
        throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

      }


    }



  }

  //create meals
  async createmeal(dto: mealdto) {
    try {
      const meal =  this.mealsrepository.create(dto)

      return await this.mealsrepository.save(meal)

    }
    catch (error) {
      throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

    }


  }

  //update meals
  async update(id: number, updatedto: updatemealsdto) {
    try {

      const mealid = await this.mealsrepository.findOne({ where: { id} })
      if (!mealid) {
        throw new NotFoundException("meal id not exists..")

      }

      Object.assign(mealid, updatedto)
      return await this.mealsrepository.save(mealid);

    }
    catch (error) {
      if (error instanceof NotFoundException) {
            throw error
      }
      else {
        throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

      }
    }



  }

}
