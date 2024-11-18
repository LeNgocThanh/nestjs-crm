import { IsString, IsDate, IsOptional, IsMongoId, IsArray } from 'class-validator';

export class CreateReportRepairDto {
  @IsString()
  readonly ReportRepairName: string;

  @IsOptional()
  @IsDate()
  readonly desiredDate?: Date;

  @IsOptional()
  @IsString()
  readonly Detail?: string;

  @IsOptional()
  @IsString()
  readonly Area?: string;

  @IsOptional()
  @IsDate()
  readonly completeDate?: Date;

  @IsMongoId()
  readonly department: string;

  @IsMongoId()
  readonly category: string;

  @IsMongoId()
  readonly brandLaPassion: string;

  @IsMongoId()
  readonly user: string;

  @IsMongoId()
  readonly statusReport: string;

  @IsOptional()
  @IsString()
  readonly Description?: string;

  @IsOptional()
  @IsString()
  readonly status?: string;  

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsString()
  readonly repairer?: string; 

  @IsOptional()
    @IsDate()
    readonly startDate?: Date;

    @IsOptional()
    @IsDate()
    readonly endDate?: Date;

    @IsOptional()
    @IsString()
    readonly cost?: string; 
}

export class UpdateReportRepairDto {
    @IsString()
    readonly ReportRepairName: string;
  
    @IsOptional()
    @IsDate()
    readonly desiredDate?: Date;

    @IsOptional()
    @IsString()
    readonly Detail?: string;
  
    @IsOptional()
    @IsString()
    readonly Area?: string;
  
    @IsOptional()
    @IsDate()
    readonly completeDate?: Date;
  
    @IsMongoId()
    readonly department: string;
  
    @IsMongoId()
    readonly category: string;
  
    @IsMongoId()
    readonly brandLaPassion: string;

    @IsMongoId()
  readonly user: string;
  
    @IsMongoId()
    readonly statusReport: string;
  
    @IsOptional()
    @IsString()
    readonly Description?: string;

    @IsOptional()
  @IsString()
  readonly status?: string;  

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsString()
  readonly repairer?: string; 

  @IsOptional()
    @IsDate()
    readonly startDate?: Date;

    @IsOptional()
    @IsDate()
    readonly endDate?: Date;

    @IsOptional()
    @IsString()
    readonly cost?: string; 

  }