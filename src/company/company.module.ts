import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandService, RoomBrandService, BrandLaPassionService, CategoryService, DepartmentService, StatusReportService, ReportRepairService, HumanResourcesService } from './company.service';
import { BrandController, RoomBrandController, BrandLaPassionController, CategoryController, DepartmentController, StatusReportController, ReportRepairController, HumanResourcesController } from './company.controller';
import { Brand, BrandSchema } from './schema/brand.schema';
import { RoomBrand, RoomBrandSchema } from './schema/roomBrand.schema';
import { BrandLaPassion, BrandLaPassionSchema } from './schema/brandLaPassion.schema'; 
import { Category, CategorySchema } from './schema/category.schema';
import { Department, DepartmentSchema } from './schema/department.schema';
import { StatusReport, StatusReportSchema } from './schema/statusReport.schema';
import { ReportRepair, ReportRepairSchema } from './schema/reportRepair.schema';
import { HumanResources, HumanResourceSchema } from './schema/humanResources.schema';
import * as bodyParser from 'body-parser';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
        MongooseModule.forFeature([{ name: RoomBrand.name, schema: RoomBrandSchema }]),
        MongooseModule.forFeature([{ name: BrandLaPassion.name, schema: BrandLaPassionSchema }]),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
        MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }]),
        MongooseModule.forFeature([{ name: StatusReport.name, schema: StatusReportSchema }]),
        MongooseModule.forFeature([{ name: ReportRepair.name, schema: ReportRepairSchema }]),
        MongooseModule.forFeature([{ name: HumanResources.name, schema: HumanResourceSchema }]),
      ],
      controllers: [BrandController, RoomBrandController, BrandLaPassionController, CategoryController, DepartmentController, StatusReportController, ReportRepairController, HumanResourcesController],
      providers: [BrandService, RoomBrandService, BrandLaPassionService, CategoryService, DepartmentService, StatusReportService, ReportRepairService, HumanResourcesService],
  })
  export class CompanyModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(
          bodyParser.json({ limit: '50mb' }),
          bodyParser.urlencoded({ limit: '50mb', extended: true })
        )
        .forRoutes('*');
    }
  }
