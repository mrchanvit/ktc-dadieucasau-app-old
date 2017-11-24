import { Thit } from "./thit";
import { Giavi } from "./giavi";
import { Nguyenlieu } from "./nguyenlieu";
export interface Monan {
    id: number,
    createdAt: number,
    name: string, 
    imageUrl: string, 
    videoUrl?: string, 
    giavis: Giavi[],
    nguyenlieus: Nguyenlieu[],
    thits: Thit[],
    steps: string [],
    description: string, 
    enjoy?: string
  }
  