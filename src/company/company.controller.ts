import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BrandService } from './company.service';
import { CreateBrandDto, UpdateBrandDto } from './dto/brand.dto';
import { RoomBrandService } from './company.service';
import { CreateRoomBrandDto, UpdateRoomBrandDto } from './dto/roomBrand.dto';
import { BrandLaPassionService, HumanResourcesService } from './company.service';
import { CreateBrandLaPassionDto, UpdateBrandLaPassionDto } from './dto/brandLaPassion.dto';
import { CategoryService } from './company.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { DepartmentService } from './company.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { StatusReportService } from './company.service';
import { CreateStatusReportDto, UpdateStatusReportDto } from './dto/statusReport.dto';
import { ReportRepairService } from './company.service';
import { CreateReportRepairDto, UpdateReportRepairDto } from './dto/reportRepair.dto';
import { CreateHumanResourcesDto, UpdateHumanResourcesDto } from './dto/humanResources.dto';
import { HumanResources } from './schema/humanResources.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  async findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}

@Controller('room-brands')
export class RoomBrandController {
  constructor(private readonly roomBrandService: RoomBrandService) {}

  @Post()
  async create(@Body() createRoomBrandDto: CreateRoomBrandDto) {
    return this.roomBrandService.create(createRoomBrandDto);
  }

  @Get()
  async findAll() {
    return this.roomBrandService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomBrandService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomBrandDto: UpdateRoomBrandDto) {
    return this.roomBrandService.update(id, updateRoomBrandDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.roomBrandService.remove(id);
  }
}

@Controller('brandLaPassion')
export class BrandLaPassionController {
  constructor(private readonly brandLaPassionService: BrandLaPassionService) {}

  @Post()
  async create(@Body() createBrandLaPassionDto: CreateBrandLaPassionDto) {
    return this.brandLaPassionService.create(createBrandLaPassionDto);
  }

  @Get()
  async findAll() {
    return this.brandLaPassionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.brandLaPassionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBrandLaPassionDto: UpdateBrandLaPassionDto) {
    return this.brandLaPassionService.update(id, updateBrandLaPassionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.brandLaPassionService.remove(id);
  }
}

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: CreateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async findAll()  {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDepartmentDto: CreateDepartmentDto){
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}

@Controller('status-reports')
export class StatusReportController {
  constructor(private readonly statusReportService: StatusReportService) {}

  @Post()
  async create(@Body() createStatusReportDto: CreateStatusReportDto) {
    return this.statusReportService.create(createStatusReportDto);
  }

  @Get()
  async findAll() {
    return this.statusReportService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.statusReportService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStatusReportDto: UpdateStatusReportDto) {
    return this.statusReportService.update(id, updateStatusReportDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.statusReportService.delete(id);
  }
}

@Controller('report-repairs')
export class ReportRepairController {
  constructor(private readonly reportRepairService: ReportRepairService) {}

  @Post()
  async create(@Body() createReportRepairDto: CreateReportRepairDto) {
    return this.reportRepairService.create(createReportRepairDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.reportRepairService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reportRepairService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReportRepairDto: UpdateReportRepairDto) {
    return this.reportRepairService.update(id, updateReportRepairDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reportRepairService.delete(id);
  }
}

@Controller('human-resources')
export class HumanResourcesController {
  constructor(private readonly humanResourcesService: HumanResourcesService) {}
  
  @Post()
  async create(@Body() createHumanResourcesDto: CreateHumanResourcesDto): Promise<HumanResources> {
    return this.humanResourcesService.create(createHumanResourcesDto);
  }

  @Get()
  async findAll(): Promise<HumanResources[]> {
    return this.humanResourcesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HumanResources> {
    return this.humanResourcesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHumanResourcesDto: UpdateHumanResourcesDto): Promise<HumanResources> {
    return this.humanResourcesService.update(id, updateHumanResourcesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<HumanResources> {
    return this.humanResourcesService.remove(id);
  }
}