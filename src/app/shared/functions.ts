export class Functions {
  public static mapData(
    value: number,
    lowerLimit: number,
    upperLimit: number
  ): number {
    return (upperLimit - lowerLimit) * value + lowerLimit;
  }
}
