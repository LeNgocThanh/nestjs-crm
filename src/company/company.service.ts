import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from './schema/brand.schema';
import { CreateBrandDto, UpdateBrandDto } from './dto/brand.dto';
import { RoomBrand } from './schema/roomBrand.schema';
import { CreateRoomBrandDto, UpdateRoomBrandDto } from './dto/roomBrand.dto';
import { BrandLaPassion } from './schema/brandLaPassion.schema';
import { CreateBrandLaPassionDto, UpdateBrandLaPassionDto } from './dto/brandLaPassion.dto';
import {Category} from './schema/category.schema';
import { CreateCategoryDto, UpdateCategoryDto} from './dto/category.dto';
import {Department} from './schema/department.schema';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import {StatusReport} from './schema/statusReport.schema';
import { CreateStatusReportDto, UpdateStatusReportDto } from './dto/statusReport.dto';
import { ReportRepair } from './schema/reportRepair.schema';
import { CreateReportRepairDto, UpdateReportRepairDto } from './dto/reportRepair.dto';
import { HumanResources } from './schema/humanResources.schema';
import { CreateHumanResourcesDto, UpdateHumanResourcesDto } from './dto/humanResources.dto';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const createdBrand = new this.brandModel(createBrandDto);
    return createdBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async findOne(id: string): Promise<Brand> {
    const brand = await this.brandModel.findById(id).exec();
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    const updatedBrand = await this.brandModel.findByIdAndUpdate(id, updateBrandDto, { new: true }).exec();
    if (!updatedBrand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return updatedBrand;
  }

  async remove(id: string): Promise<Brand> {
    const deletedBrand = await this.brandModel.findByIdAndDelete(id).exec();
    if (!deletedBrand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return deletedBrand;
  }
}

export class RoomBrandService {
    constructor(@InjectModel(RoomBrand.name) private roomBrandModel: Model<RoomBrand>) {}
  
    async create(createRoomBrandDto: CreateRoomBrandDto): Promise<RoomBrand> {
      const createdRoomBrand = new this.roomBrandModel(createRoomBrandDto);
      return createdRoomBrand.save();
    }
  
    async findAll(): Promise<RoomBrand[]> {
      return this.roomBrandModel.find().exec();
    }
  
    async findOne(id: string): Promise<RoomBrand> {
      const roomBrand = await this.roomBrandModel.findById(id).exec();
      if (!roomBrand) {
        throw new NotFoundException(`RoomBrand with ID ${id} not found`);
      }
      return roomBrand;
    }
  
    async update(id: string, updateRoomBrandDto: UpdateRoomBrandDto): Promise<RoomBrand> {
      const updatedRoomBrand = await this.roomBrandModel.findByIdAndUpdate(id, updateRoomBrandDto, { new: true }).exec();
      if (!updatedRoomBrand) {
        throw new NotFoundException(`RoomBrand with ID ${id} not found`);
      }
      return updatedRoomBrand;
    }
  
    async remove(id: string): Promise<RoomBrand> {
      const deletedRoomBrand = await this.roomBrandModel.findByIdAndDelete(id).exec();
      if (!deletedRoomBrand) {
        throw new NotFoundException(`RoomBrand with ID ${id} not found`);
      }
      return deletedRoomBrand;
    }
  }

  export class BrandLaPassionService {
    constructor(@InjectModel(BrandLaPassion.name) private brandLaPassionModel: Model<BrandLaPassion>) {}
  
    async create(createBrandLaPassionDto: CreateBrandLaPassionDto): Promise<BrandLaPassion> {
      const createdBrandLaPassion = new this.brandLaPassionModel(createBrandLaPassionDto);
      return createdBrandLaPassion.save();
    }
  
    async findAll(): Promise<BrandLaPassion[]> {
      return this.brandLaPassionModel.find().exec();
    }
  
    async findOne(id: string): Promise<BrandLaPassion> {
      const brandLaPassion = await this.brandLaPassionModel.findById(id).exec();
      if (!brandLaPassion) {
        throw new NotFoundException(`BrandLaPassion with ID ${id} not found`);
      }
      return brandLaPassion;
    }
  
    async update(id: string, updateBrandLaPassionDto: UpdateBrandLaPassionDto): Promise<BrandLaPassion> {
      const updatedBrandLaPassion = await this.brandLaPassionModel.findByIdAndUpdate(id, updateBrandLaPassionDto, { new: true }).exec();
      if (!updatedBrandLaPassion) {
        throw new NotFoundException(`BrandLaPassion with ID ${id} not found`);
      }
      return updatedBrandLaPassion;
    }
  
    async remove(id: string): Promise<BrandLaPassion> {
      const deletedBrandLaPassion = await this.brandLaPassionModel.findByIdAndDelete(id).exec();
      if (!deletedBrandLaPassion) {
        throw new NotFoundException(`BrandLaPassion with ID ${id} not found`);
      }
      return deletedBrandLaPassion;
    }
  }

  export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}
  
    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
      const createdCategory = new this.categoryModel(createCategoryDto);
      return createdCategory.save();
    }
  
    async findAll(): Promise<Category[]> {
      return this.categoryModel.find().exec();
    }
  
    async findOne(id: string): Promise<Category> {
      const category = await this.categoryModel.findById(id).exec();
      if (!category) {
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      return category;
    }
  
    async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
      const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).exec();
      if (!updatedCategory) {
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      return updatedCategory;
    }
  
    async remove(id: string): Promise<Category> {
      const deletedCategory = await this.categoryModel.findByIdAndDelete(id).exec();
      if (!deletedCategory) {
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      return deletedCategory;
    }
  }

  export class DepartmentService {
    constructor(@InjectModel(Department.name) private departmentModel: Model<Department>) {}
  
    async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
      const createdDepartment = new this.departmentModel(createDepartmentDto);
      return createdDepartment.save();
    }
  
    async findAll(): Promise<Department[]> {
      return this.departmentModel.find().exec();
    }
  
    async findOne(id: string): Promise<Department> {
      return this.departmentModel.findById(id).exec();
    }
  
    async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
      return this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, { new: true }).exec();
    }
  
    async delete(id: string): Promise<Department> {
      return this.departmentModel.findByIdAndDelete(id).exec();
    }
  }
 
  export class StatusReportService {
    constructor(@InjectModel(StatusReport.name) private statusReportModel: Model<StatusReport>) {}
  
    async create(createStatusReportDto: CreateStatusReportDto): Promise<StatusReport> {
      const createdStatusReport = new this.statusReportModel(createStatusReportDto);
      return createdStatusReport.save();
    }
  
    async findAll(): Promise<StatusReport[]> {
      return this.statusReportModel.find().exec();
    }
  
    async findOne(id: string): Promise<StatusReport> {
      return this.statusReportModel.findById(id).exec();
    }
  
    async update(id: string, updateStatusReportDto: UpdateStatusReportDto): Promise<StatusReport> {
      return this.statusReportModel.findByIdAndUpdate(id, updateStatusReportDto, { new: true }).exec();
    }
  
    async delete(id: string): Promise<StatusReport> {
      return this.statusReportModel.findByIdAndDelete(id).exec();
    }
  }

export class ReportRepairService {
  constructor(@InjectModel(ReportRepair.name) private reportRepairModel: Model<ReportRepair>) {}

  async create(createReportRepairDto: CreateReportRepairDto): Promise<ReportRepair> {
    const createdReportRepair = new this.reportRepairModel(createReportRepairDto);
    return createdReportRepair.save();
  }

  async findAll(): Promise<ReportRepair[]> {
    return this.reportRepairModel.find().exec();
  }

  async findOne(id: string): Promise<ReportRepair> {
    return this.reportRepairModel.findById(id).exec();
  }

  async update(id: string, updateReportRepairDto: UpdateReportRepairDto): Promise<ReportRepair> {
    return this.reportRepairModel.findByIdAndUpdate(id, updateReportRepairDto, { new: true }).exec();
  }

  async delete(id: string): Promise<ReportRepair> {
    return this.reportRepairModel.findByIdAndDelete(id).exec();
  }
}

export class HumanResourcesService {
  constructor(
    @InjectModel(HumanResources.name) private readonly humanResourcesModel: Model<HumanResources>,
  ) {}

  async create(createHumanResourcesDto: CreateHumanResourcesDto): Promise<HumanResources> {
    const createdHumanResources = new this.humanResourcesModel(createHumanResourcesDto);
    return createdHumanResources.save();
  }

  async findAll(): Promise<HumanResources[]> {
    return this.humanResourcesModel.find().exec();
  }

  async findOne(id: string): Promise<HumanResources> {
    const humanResources = await this.humanResourcesModel.findById(id).exec();
    if (!humanResources) {
      throw new NotFoundException(`HumanResources with ID ${id} not found`);
    }
    return humanResources;
  }

  async update(id: string, updateHumanResourcesDto: UpdateHumanResourcesDto): Promise<HumanResources> {
    const updatedHumanResources = await this.humanResourcesModel.findByIdAndUpdate(id, updateHumanResourcesDto, { new: true }).exec();
    if (!updatedHumanResources) {
      throw new NotFoundException(`HumanResources with ID ${id} not found`);
    }
    return updatedHumanResources;
  }

  async remove(id: string): Promise<HumanResources> {
    const deletedHumanResources = await this.humanResourcesModel.findByIdAndDelete(id).exec();
    if (!deletedHumanResources) {
      throw new NotFoundException(`HumanResources with ID ${id} not found`);
    }
    return deletedHumanResources;
  }
}