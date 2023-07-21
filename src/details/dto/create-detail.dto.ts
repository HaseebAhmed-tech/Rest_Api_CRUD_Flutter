import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
    IsInt
  } from 'class-validator';
export class CreateDetailDto {

    
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(12)
    @ApiProperty()
    name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    @ApiProperty()
    title: string

    @IsString()
    @MaxLength(1000)
    @ApiProperty({required: false})
    text?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: "img/images1.jpeg"})
    img: string = "img/images1.jpeg"

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    time: string

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    prize: number



}
