import { Details } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
export class Detail implements Details{
    
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    title: string

    @ApiProperty({required:false, nullable:true})
    text: string | null

    @ApiProperty()
    img: string

    @ApiProperty()
    time: string

    @ApiProperty()
    prize: number

    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
}
