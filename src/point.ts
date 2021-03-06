// Interface for point data structure used e.g. in SignaturePad#fromData method
export interface BasicPoint {
  x: number;
  y: number;
  p: number;
  tx: number;
  ty: number;
  r: number;
  time: number;
}

export class Point implements BasicPoint {
  public p: number;
  public time: number;
  tx: number;
  ty: number;
  r: number;

  constructor(public x: number, public y: number, p?: number, tx?: number, ty?: number, r?: number, time?: number) {
    this.p = p || 0;
    this.tx = tx ?? 0;
    this.ty = ty ?? 0;
    this.r = r ?? 0;
    this.time = time || Date.now();
  }

  public distanceTo(start: BasicPoint): number {
    return Math.sqrt(
      Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2),
    );
  }

  public equals(other: BasicPoint): boolean {
    return this.x === other.x && this.y === other.y && this.time === other.time;
  }

  public velocityFrom(start: BasicPoint): number {
    return this.time !== start.time
      ? this.distanceTo(start) / (this.time - start.time)
      : 0;
  }
}
